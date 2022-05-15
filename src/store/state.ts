import AppCollection from '../models/collection';
import AppFilters from '../models/filters';
import AppMedia from '../models/media';
import { AppPhoto, AppTag } from '../models/photo';
import AppService from '../models/service';

export default class AppState {
    public photos: AppPhoto[] = [];
    public tags: AppTag[] = [];
    public services: AppService[] = [];
    public collections: AppCollection[] = [];
    public filters: AppFilters = new AppFilters();
    public medias: AppMedia[] = [];
    public products: any = [];
}
