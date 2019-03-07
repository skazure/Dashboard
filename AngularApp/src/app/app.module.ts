import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnvironmentUrlService } from './shared/services/environment-url.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';

//import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { RepositoryService } from './shared/services/repository.service';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
import { ErrorHandlerService } from './shared/services/error-handler.service';


@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    InternalServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    HttpClientModule,    
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'owner', loadChildren: "./owner/owner.module#OwnerModule" },
      { path: '404', component : NotFoundComponent},
      { path: '500', component: InternalServerComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/404', pathMatch: 'full'}      
     ])    
  ],
  providers: [EnvironmentUrlService, RepositoryService, ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
