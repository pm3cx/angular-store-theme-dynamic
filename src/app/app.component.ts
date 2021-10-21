import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ThemeState } from './store/app.action';
import { AppState } from './store/app.state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  @Select(AppState.theme) theme$: Observable<string>; // select the theme selector that w've create on the app.state.ts

  constructor(
    private store: Store,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.theme$.subscribe((res) => this.init(res));
  }

  onChange(event: string): void {
    this.store.dispatch(new ThemeState(event)); // dispatch the new theme from dropdown
    this.init(event);
  }

  private init(theme: string) {
    const head = this.document.getElementsByTagName('head')[0];
    let themeLink = this.document.getElementById('theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = theme + '.css';
    } else {
      const style = this.document.createElement('link');
      style.id = 'theme';
      style.rel = 'stylesheet';
      style.href = theme + '.css';
      head.appendChild(style);
    }
  }
}
