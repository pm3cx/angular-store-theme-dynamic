import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CapitalizeFirstLetter } from '../../functions/capitalize-string';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

  constructor(private titleService: Title, private router: Router) {}

  routerLink(url: string) {
    this.titleService.setTitle((CapitalizeFirstLetter(url) + ' - 3CX'));
    this.router.navigate(['/' + url]);
  }
}