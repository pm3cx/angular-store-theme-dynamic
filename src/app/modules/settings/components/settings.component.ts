import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AppState, HeadService, ThemeState } from '../../../../app/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  @Select(AppState.theme) theme$: Observable<string>;

  constructor(private store: Store,private head: HeadService) {}

  ngOnInit(): void {
    console.log('Hi from settings module');
  }

  onChange(event: string): void {
    this.store.dispatch(new ThemeState(event)); // dispatch the new theme from dropdown
  }
}
