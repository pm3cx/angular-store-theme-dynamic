import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ThemeState } from './app.action';
import { AppState } from './app.state';

describe('app', () => {
    let store: Store;

    beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [NgxsModule.forRoot([AppState])]
      });
      store = TestBed.inject(Store);
    });


    it('it should select current theme', () => {
      const theme = store.selectSnapshot(AppState.theme);
      expect(theme).toEqual('light-theme');
    });

    it('it should add theme', () => {
      store.dispatch(new ThemeState('dark-theme'));
      const theme = store.selectSnapshot(AppState.theme);
      expect(theme).toBe('dark-theme');
    });

  });

