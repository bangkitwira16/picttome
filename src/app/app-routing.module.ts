import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'postDetails',
    loadChildren: () => import('./pages/post-detail/post-detail.module').then(m => m.PostDetailPageModule)
  },
  {
    path: 'user-detail',
    loadChildren: () => import('./user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },
  {
    path: 'post-gallery',
    loadChildren: () => import('./post-gallery/post-gallery.module').then( m => m.PostGalleryPageModule)
  },
  {
    path: 'view-comments',
    loadChildren: () => import('./view-comments/view-comments.module').then( m => m.ViewCommentsPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./component/loading/loading.module').then( m => m.LoadingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
