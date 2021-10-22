import { AfterViewInit, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState } from './core/store/app.state';
import { HeadService } from './core/services/head.service';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>' 
})

export class AppComponent implements AfterViewInit  {
  @Select(AppState.theme) theme$: Observable<string>; // select the theme selector that w've create on the app.state.ts

  constructor(private head: HeadService) {}

  ngAfterViewInit(): void {
    this.theme$.subscribe((res) =>  this.head.addStyleReference({ id: 'theme', href: res + '.css'}));
  }

}
