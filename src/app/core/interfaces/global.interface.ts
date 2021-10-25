import { ModuleWithProviders, Provider, Type } from "@angular/core";

export type LinkDefinition = {
    id: string;
    href: string;
}


export interface ICustomizedModule<T> {
    ngModule: Type<T>;
    providers?: Provider[];
    declarations?: Array<Type<any> | any[]>;
    imports?: Array<Type<any> | ModuleWithProviders<any> | any[]>;
}

export interface IConfiguration {
    providers?: Provider[];
    declarations?: Array<Type<any> | any[]>;
    imports?: Array<Type<any> | ModuleWithProviders<any> | any[]>;
}

export interface IApplication {
    theme: string;
    language: string;
}