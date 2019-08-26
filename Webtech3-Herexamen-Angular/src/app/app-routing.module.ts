import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './Search_component/search/search.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';


const routes: Routes = [
  {path: 'list', component: ListComponentComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', component: HomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
