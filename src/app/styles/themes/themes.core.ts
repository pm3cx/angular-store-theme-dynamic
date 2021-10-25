import { IApplication } from "../../../app/core";



// Theme interface
interface ITheme {
    [key: string] : string;
}

// Supported themes
export const Themes: ITheme = {
    dark: 'dark-theme',
    light: 'light-theme',
};

// Default theme
const defaultTheme = Themes.light;


export const mapThemeName = (app: IApplication | null) => {
    if (app !== null)
        for (const key in Themes)
            return app.theme === Themes[key] ? app.theme : defaultTheme;
    else return defaultTheme;
}

export const setTheme = (theme: any) => {
    Object.keys(theme).forEach(k =>
        document.documentElement.style.setProperty(`${k}`, theme[k])
    );
}

