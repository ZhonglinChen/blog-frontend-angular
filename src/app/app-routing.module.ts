import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogDetailComponent } from './_components-main/blogs/blog-detail/blog-detail.component';
import { BlogListComponent } from './_components-main/blogs/blog-list/blog-list.component';
import { HomeComponent } from './_components-main/home/home.component';
import { DevlogsComponent } from './_components-main/devlogs/devlogs.component';
import { DevPanelComponent } from './_components-main/dev-panel/dev-panel.component';
import { ResourcesComponent } from './_components-main/resources/resources.component';
import { DemoListComponent } from './_components-main/demos/demo-list/demo-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs', component: BlogListComponent },
  { path: 'blogdetail/:id', component: BlogDetailComponent },
  { path: 'demos', component: DemoListComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'devlogs', component: DevlogsComponent },
  { path: 'devpanel', component: DevPanelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
