import { doc, DocumentData, DocumentSnapshot } from 'firebase/firestore';

export default class AppMedia {
    public id?: string;

    public constructor(
        public title: string = '',
        public description: string = '',
        public url: string = '',
        public date: string = ''
    ) {}

    public static fromFirestore(docSnap: DocumentSnapshot): AppMedia {
        const data = docSnap.data()!;
        const media = new AppMedia(
            data.title,
            data.description,
            data.url,
            data.date
        );

        media.id = docSnap.id;

        return media;
    }

    public static toFirestore(media: AppMedia): DocumentData {
        const copy = { ...media };

        delete copy.id;

        return { ...copy };
    }
}
