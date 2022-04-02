import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import Vuex, { ActionContext } from 'vuex';
import {
    AppPhoto,
    AppPhotoDataConverter,
    AppTag,
    AppTagDataConverter,
} from '../models/photo';
import AppState from './state';

export default new Vuex.Store({
    state: new AppState(),
    getters: {
        portfolio: (state: AppState): AppPhoto[] => {
            return state.photos.filter((p) => p.portfolio);
        },
        boutique: (state: AppState): AppPhoto[] => {
            return state.photos.filter((p) => p.boutique);
        },
        filteredBoutique: (state: AppState): AppPhoto[] => {
            if (!state.filters.length)
                return state.photos.filter((p) => p.boutique);

            return state.photos
                .filter((p) => p.boutique)
                .filter((p) => p.tags.some((t) => state.filters.includes(t)));
        },
        tagGroup: (state: AppState): string[] => {
            return state.tags.map((t) => t.group);
        },
        collections: (state: AppState): AppTag[] => {
            return state.tags.filter((t) => t.group === 'Collections');
        },
        photosForCollections: (state: AppState) => (): AppPhoto[] => {
            return state.tags
                .filter((t) => t.group === 'Collections')
                .map((c) => {
                    return state.photos.find((p) =>
                        p.tags.includes(c.id ?? '')
                    )!;
                });
        },
    },
    mutations: {
        photos(state, photos): void {
            state.photos = [...photos];
        },
        tags(state, tags): void {
            state.tags = [...tags];
        },
        toggleFilter(state, tagId: string): void {
            const index = state.filters.indexOf(tagId);

            if (index !== -1) {
                state.filters.splice(index, 1);
            } else {
                state.filters.push(tagId);
            }
        },
    },
    actions: {
        async loadPhotos(
            context: ActionContext<AppState, AppState>
        ): Promise<void> {
            const db = getFirestore();
            const photos: AppPhoto[] = [];
            const q = query(
                collection(db, 'photos').withConverter(AppPhotoDataConverter)
            );

            const qSnap = await getDocs(q);

            qSnap.forEach((docSnap) => {
                photos.push(docSnap.data());
            });

            context.commit('photos', photos);
        },
        async loadTags(
            context: ActionContext<AppState, AppState>
        ): Promise<void> {
            const db = getFirestore();
            const tags: AppTag[] = [];
            const q = query(
                collection(db, 'tags').withConverter(AppTagDataConverter)
            );

            const qSnap = await getDocs(q);

            qSnap.forEach((docSnap) => {
                tags.push(docSnap.data());
            });

            context.commit('tags', tags);
        },
    },
});
