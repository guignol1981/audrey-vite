export default class AppFilters {
    constructor(
        public collection: string = '',
        public tags: string[] = [],
        public showAll: boolean = false,
        public limited: boolean = false
    ) {}
}
