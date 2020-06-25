import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogDetailComponent } from './_components-main/blogs/blog-detail/blog-detail.component';
import { BlogListComponent } from './_components-main/blogs/blog-list/blog-list.component';
import { DemoDetailComponent } from './_components-main/demos/demo-detail/demo-detail.component';
import { NavComponent } from './_components-common/nav/nav.component';
import { HomeComponent } from './_components-main/home/home.component';
import { ResourcesComponent } from './_components-main/resources/resources.component';
import { DevlogsComponent } from './_components-main/devlogs/devlogs.component';
import { TodoListComponent } from './_components-util/todo-list/todo-list.component';
import { TimelineComponent } from './_components-util/timeline/timeline.component';
import { DevPanelComponent } from './_components-main/dev-panel/dev-panel.component';
import { DemoListComponent } from './_components-main/demos/demo-list/demo-list.component';




export function tokenGetter() {
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DemoListComponent,
    ResourcesComponent,
    DevlogsComponent,
    TodoListComponent,
    TimelineComponent,
    DevPanelComponent,
    BlogDetailComponent,
    BlogListComponent,
    DemoDetailComponent,
    DemoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
