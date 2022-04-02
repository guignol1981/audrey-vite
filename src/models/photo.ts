import { DocumentData, DocumentSnapshot } from 'firebase/firestore';

const PhotoVisibilities = ['portfolio', 'boutique', 'service'];

export class AppTag {
    id?: string;

    constructor(public group: string, public name: string) {}
}

export const AppTagDataConverter = {
    toFirestore: (tag: AppTag): DocumentData => {
        const copy = { ...tag };
        delete copy.id;
        return copy;
    },
    fromFirestore: (snap: DocumentSnapshot): AppTag => {
        const data = snap.data()!;
        const tag = new AppTag(data.group, data.name);
        tag.id = snap.id;
        return tag;
    },
};

export class AppPhoto {
    public constructor(
        public id: string = '',
        public title: string = '',
        public description: string = '',
        public photoUrl: string = '',
        public boutiqueUrl: string = '',
        public photoId: string = '',
        public boutiqueId: string = '',
        public orientation: 'portrait' | 'paysage' = 'paysage',
        public portfolio: boolean = true,
        public boutique: boolean = true,
        public service: boolean = false,
        public tags: string[] = [],
        public supportedProducts: any[] = [],
        public ordre?: number
    ) {}
}

export const AppPhotoDataConverter = {
    toFirestore: (photo: AppPhoto): DocumentData => {
        const doc = { ...photo } as DocumentData;
        delete doc.id;
        return { ...photo };
    },

    fromFirestore: (snapshot: DocumentSnapshot): AppPhoto => {
        const data = snapshot.data()!;
        return new AppPhoto(
            snapshot.id,
            data.title,
            data.description,
            data.photoUrl,
            data.boutiqueUrl,
            data.photoId,
            data.boutiqueId,
            data.orientation,
            data.portfolio,
            data.boutique,
            data.service,
            data.tags,
            data.supportedProducts,
            data.ordre
        );
    },
};

export { PhotoVisibilities };
