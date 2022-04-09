import { DocumentData, DocumentSnapshot } from 'firebase/firestore';

export default class AppCollection {
    constructor(
        public id: string = '',
        public name: string = '',
        public photoId: string = ''
    ) {}

    public static toFirestore(collection: AppCollection): DocumentData {
        const doc = { ...collection } as DocumentData;
        delete doc.id;
        return { ...doc };
    }

    public static fromFirestore(snapshot: DocumentSnapshot): AppCollection {
        const data = snapshot.data()!;

        return new AppCollection(snapshot.id, data.name, data.photoId);
    }
}
