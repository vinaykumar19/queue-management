import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QueueHttpService } from './queue-http.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      {path: 'view/:id', component: ViewComponent}
     
    ])
  ],
  providers: [QueueHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
