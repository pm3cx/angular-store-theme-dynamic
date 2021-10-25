import { DOCUMENT } from "@angular/common";
import { INJECTOR, Provider } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { HeadService, HeadFactoryService } from "../services/head.service";

export const Providers: Provider[] = [
    Title,
    { 
        provide: HeadService, 
        useFactory: HeadFactoryService, 
        deps: [DOCUMENT, INJECTOR]
    }
]