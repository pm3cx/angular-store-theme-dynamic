import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ThemeState } from './app.action';

export interface AppStateModel {
  // the state model
  theme: string; // for testing we use string we can enumerate theme proporty with specific values
}

@State<AppStateModel>({
  name: 'app', // initiate the name of the states
  defaults: {
    theme: 'light-theme', // we set a default theme
  },
})
@Injectable()
export class AppState {
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
