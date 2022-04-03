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
            return state.photos.filter((p) => p.boutique);
        },
        tagGroups: (state: AppState): string[] => {
            return [...new Set(state.tags.map((t) => t.group))];
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
        quickviewId(state, id: string): void {
            state.quickviewId = id;
        },
        products(state, products: any): void {
            state.products = [...products];
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
        async loadProducts(
            context: ActionContext<AppState, AppState>
        ): Promise<void> {
            const db = getFirestore();
            const products: any = [];
            const q = query(collection(db, 'products'));

            const qSnaps = await getDocs(q);

            qSnaps.forEach(async (docSnap) => {
                const product = docSnap.data();
                product.id = docSnap.id;
                product.prices = [];

                const qSnapsPrice = await getDocs(
                    collection(db, `products/${docSnap.id}/prices`)
                );

                qSnapsPrice.forEach((docSnap) => {
                    const price = docSnap.data();
                    price.id = docSnap.id;
                    product.prices.push(price);
                });

                products.push(product);
                context.commit('products', products);
            });
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
