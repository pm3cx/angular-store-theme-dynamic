import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  template: '<h1>Hi from dashboard module</h1>',
})

export class DashboardComponent implements OnInit {


  ngOnInit(): void {
    console.log('Hi from dashboard module')
  }

}