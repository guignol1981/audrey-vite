import { DocumentData, DocumentSnapshot } from 'firebase/firestore';

export default class AppService {
    constructor(
        public id: string = '',
        public name: string = '',
        public description: string = '',
        public photoId: string = '',
        public bottomPrice: number = 0
    ) {}

    public static toFirestore(service: AppService): DocumentData {
        const doc = { ...service } as DocumentData;
        delete doc.id;
        return { ...doc };
    }

    public static fromFirestore(snapshot: DocumentSnapshot): AppService {
        const data = snapshot.data()!;

        return new AppService(
            snapshot.id,
            data.name,
            data.description,
            data.photoId,
            data.bottomPrice
        );
    }
}
