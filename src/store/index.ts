import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import Vuex, { ActionContext } from 'vuex';
import AppCollection from '../models/collection';
import AppFilters from '../models/filters';
import {
    AppPhoto,
    AppPhotoDataConverter,
    AppTag,
    AppTagDataConverter,
} from '../models/photo';
import AppService from '../models/service';
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
    },
    mutations: {
        photos(state, photos): void {
            state.photos = [...photos];
        },
        tags(state, tags): void {
            state.tags = [...tags];
        },
        services(state, services): void {
            state.services = [...services];
        },
        collections(state, collections): void {
            state.collections = [...collections];
        },
        filters(state, filters: AppFilters): void {
            state.filters = filters;
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
        async loadServices(
            context: ActionContext<AppState, AppState>
        ): Promise<void> {
            const db = getFirestore();
            const services: AppService[] = [];

            const q = query(
                collection(db, 'services').withConverter(AppService)
            );

            const qSnap = await getDocs(q);

            qSnap.forEach((docSnap) => {
                services.push(docSnap.data());
            });

            context.commit('services', services);
        },
        async loadCollections(
            context: ActionContext<AppState, AppState>
        ): Promise<void> {
            const db = getFirestore();
            const collections: AppCollection[] = [];

            const q = query(
                collection(db, 'collections').withConverter(AppCollection)
            );

            const qSnap = await getDocs(q);

            qSnap.forEach((docSnap) => {
                collections.push(docSnap.data());
            });

            context.commit('collections', collections);
        },
    },
});
