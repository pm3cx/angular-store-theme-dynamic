import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { StorageService } from '../services/storage.service';
import { ThemeState } from './app.action';
import { mapThemeName, Themes } from '../../styles/themes/themes.core';

export interface AppStateModel {
  // the state model
  theme: string; // for testing we use string we can enumerate theme proporty with specific values
}

@State<AppStateModel>({
  name: 'app', // initiate the name of the states
  defaults: {
    theme: Themes.light, // we set a default theme
  },
})

@Injectable()
export class AppState implements NgxsOnInit {

  constructor(private readonly storage: StorageService) {}

  ngxsOnInit(ctx: StateContext<AppStateModel>) {
    const app = this.storage.get('app');
    ctx.patchState({
      theme: mapThemeName(app)
    });
  }

  // selector for the theme state
  @Selector()
  static theme(state: AppStateModel) {
    return state.theme;
  }

  // the actions that is going to be dispatch inside the dropdown menu
  @Action(ThemeState)
  initTheme(ctx: StateContext<AppStateModel>, actions: AppStateModel) {
    ctx.patchState({
      theme: actions.theme,
    });
  }
}
