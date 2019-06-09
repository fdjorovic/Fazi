export class Importer {
    constructor() {
        this.request = new XMLHttpRequest();
    }
    loadComponent(url) {
        this.request.open("GET", url, false);
        this.request.send(null);
        return this.request.responseText;
    }
}