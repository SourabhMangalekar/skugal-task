import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'feature1', pathMatch: 'full'
  },
  {
    path: 'feature1', loadChildren: () => import('./features/feat1/feat1.module').then(m => m.Feat1Module)
  },
  {
    path: 'feature2', loadChildren: () => import('./features/feat2/feat2.module').then(m => m.Feat2Module)
  },
  {
    path: 'feature3', loadChildren: () => import('./features/feat3/feat3.module').then(m => m.Feat3Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
