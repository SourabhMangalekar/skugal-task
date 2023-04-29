import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shared1Component } from 'src/app/shared-components/shared1/shared1.component';
import { Shared2Component } from 'src/app/shared-components/shared2/shared2.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'shared1', pathMatch: 'full'
  },
  {path: 'shared1', component: Shared1Component },
  {path: 'shared2', component: Shared2Component },
 ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feat3RoutingModule { }
