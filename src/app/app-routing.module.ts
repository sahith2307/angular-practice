import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    children: [
      { path: 'first-parent', component: ParentComponent },
      { path: 'first-child', component: ChildComponent },
    ],
  },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'child/:id', component: ChildComponent },
  { path: '**', component: FirstComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
