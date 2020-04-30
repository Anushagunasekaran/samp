import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; import {OrderComponent} from './order/order.component';
import {AboutComponent} from './about/about.component'
import {BlogComponent} from './blog/blog.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:'Order',component: OrderComponent},
  {path:'About',component:AboutComponent},
{path:'Blog',component:BlogComponent},
{path:'Home',component:HomeComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
