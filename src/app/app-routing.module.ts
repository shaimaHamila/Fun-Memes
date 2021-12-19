import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemesListComponent } from './container/memes-list/memes-list.component';

const routes: Routes = [
  {path: 'meme', component: MemesListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
