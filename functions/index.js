const functions = require('firebase-functions');
const admin = require('firebase-admin');
const path = require('path');
const os = require('os');
const sharp = require('sharp');
const uuid = require('uuid-v4');
const fs = require('fs');

const RESISED_SUFFIX = '_min';

admin.initializeApp();

exports.resizePhoto = functions.storage.object().onFinalize(async (object) => {
    functions.logger.log('Starting resize for: ', object.name);

    if (object.name.includes(RESISED_SUFFIX)) {
        return;
    }

    const tempLocalPhotoPath = path.join(os.tmpdir(), object.name ?? '');
    const tempLocalResizedPhotoPath = path.join(
        os.tmpdir(),
        (object.name ?? '') + RESISED_SUFFIX
    );
    const bucket = admin.storage().bucket(object.bucket);
    const file = bucket.file(object.name);

    await file.download({ destination: tempLocalPhotoPath, validation: false });

    await sharp(tempLocalPhotoPath)
        .resize(1000)
        .jpeg()
        .toFile(tempLocalResizedPhotoPath);

    const [resizedPhoto] = await bucket.upload(tempLocalResizedPhotoPath, {
        predefinedAcl: 'publicRead',
        metadata: {
            contentType: object.contentType,
            metadata: {
                firebaseStorageDownloadTokens: uuid(),
            },
        },
    });

    fs.unlinkSync(tempLocalPhotoPath);
    fs.unlinkSync(tempLocalResizedPhotoPath);

    const updateData = {};

    updateData.photoId = resizedPhoto.id;
    updateData.photoUrl = resizedPhoto.publicUrl();

    functions.logger.log('updateData: ', updateData);

    await admin
        .firestore()
        .collection('photos')
        .doc(object.metadata.photoId)
        .update(updateData);

    await admin.storage().bucket().file(object.name).delete();

    return 'done';
});
