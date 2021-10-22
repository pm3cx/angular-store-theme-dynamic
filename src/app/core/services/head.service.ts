import { Renderer2, RendererFactory2 } from "@angular/core";
import { LinkDefinition } from "../interfaces/global.interface";

export class HeadService {
    private _doc: Document;

    constructor(document: Document) {
        this._doc = document;
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

export const HeadFactoryService = (doc: Document) => {
    return new HeadService(doc)
}
