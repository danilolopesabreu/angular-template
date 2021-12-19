import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutes, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  /**
   * Allows for retrieving singletons using `AppModule.injector.get(MyService)`
   * This is good to prevent injecting the service as constructor parameter.
   */
  static injector: Injector;
  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}
