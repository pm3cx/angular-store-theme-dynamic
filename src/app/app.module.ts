import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { environment } from '../environments/environment';
import { AppState, Providers, AppRoutingModule } from './core'; 
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production, // NGSX Store: https://www.ngxs.io/concepts/store
    }), // initial ngxs module and create the state of app
    NgxsStoragePluginModule.forRoot(), // ngxs store plugin offers init state in localstore, we can set custom keys and options inside forRoor()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: Providers, // Please add all providers inside Providers folders
})
export class AppModule {}
