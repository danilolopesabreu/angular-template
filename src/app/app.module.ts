import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { PagesnavbarModule} from './shared/pagesnavbar/pagesnavbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AppRoutes } from './app.routing';

@NgModule({
    imports:      [
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes,{
          useHash: true
        }),
        HttpModule,
        SidebarModule,
        NavbarModule,
        PagesnavbarModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
