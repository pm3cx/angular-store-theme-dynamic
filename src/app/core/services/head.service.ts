import { Injector } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { LinkDefinition } from "../interfaces/global.interface";
import { filter, map } from 'rxjs/operators';

export class HeadService {
    private _doc: Document;
    private _injector: Injector;

    constructor(document: Document, injector: Injector) {
        this._doc = document;
        this._injector = injector;
    }


    private addTitle() {
        const title = this._injector.get(Title)
        const router = this._injector.get(Router);
        const activeRoute = this._injector.get(ActivatedRoute)
        router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let child = activeRoute.firstChild;
                while (child?.firstChild) {
                    child = child.firstChild;
                }
                if (child?.snapshot.data['title']) {
                    return child.snapshot.data['title'];
                }
                return title.getTitle();
            })
        ).subscribe((ttl: string) => {
            title.setTitle(ttl);
        })
    }

    addStyleReference(link: LinkDefinition): void {
        const css = this.getStyleReference(link.id);
        if (css) {
            css.href = link.href;
            this.loadHead().appendChild(css);
        } else {
            const css = this._doc.createElement('link');
            css.setAttribute('id', link.id);
            css.setAttribute('href', link.href);
            css.setAttribute('rel', 'stylesheet');
            this.loadHead().appendChild(css);
        }
    }

    // protected document
    private getStyleReference(id: string): HTMLLinkElement | null {
        return this._doc.getElementById(id) as HTMLLinkElement;  
    }

    // protected document
    private loadHead(): HTMLHeadElement {
        return this._doc.getElementsByTagName('head')[0]
    }
}

export const HeadFactoryService = (doc: Document, injector: Injector) => {
    return new HeadService(doc, injector)
}
