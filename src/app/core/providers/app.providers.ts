import { DOCUMENT } from "@angular/common";
import { Provider } from "@angular/core";
import { HeadService, HeadFactoryService } from "../services/head.service";

export const Providers: Provider[] = [
    { 
        provide: HeadService, 
        useFactory: HeadFactoryService, 
        deps: [DOCUMENT]
    }
]