import {
    collection,
    Firestore,
    getDocs,
    getFirestore,
    query,
} from 'firebase/firestore';
import {
    AppPhoto,
    AppPhotoDataConverter,
    AppTag,
    AppTagDataConverter,
} from '../models/photo';

export default class AppState {
    public photos: AppPhoto[] = [];
    public tags: AppTag[] = [];
    public filters: string[] = [];

    constructor() {}
}
