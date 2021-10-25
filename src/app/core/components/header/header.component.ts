import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Select(AppState.theme) theme$: Observable<string>; 
}