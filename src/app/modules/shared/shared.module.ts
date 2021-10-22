import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { IConfiguration, ICustomizedModule, LayoutComponent, HeaderComponent, SidebarComponent } from "../../../app/core";


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FormsModule,
  ]
})

export class SharedModule {
  public static forRoot(
    options?: IConfiguration
  ): ICustomizedModule<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        options?.providers || [],
      ],
    };
  }
}