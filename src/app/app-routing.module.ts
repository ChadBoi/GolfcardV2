import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupPageComponent} from './setup-page/setup-page.component';
import { CardPageComponent } from './card-page/card-page.component';

const routes: Routes = [
  {
    path: 'setupPage',
    component: SetupPageComponent
  },
  {
    path: 'cardPage',
    component: CardPageComponent
  },
  {
    path: '**',
    redirectTo: 'setupPage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
