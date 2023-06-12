import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'tab1',
        loadChildren: () => import('../home/home.module').then( m =>m.HomePageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../chat/chat.module').then( m =>m.ChatPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
