import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemesListComponent } from './container/memes-list/memes-list.component';
import { MemeComponent } from './componenets/meme/meme.component';
import { MemesService } from './services/memes.service';

@NgModule({
  declarations: [
    AppComponent,
    MemesListComponent,
    MemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MemesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
