import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/_services/blog.service';
import { IBlog } from 'src/app/_models/IBlog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: IBlog[];
  constructor(private blogService: BlogService, private router: Router, protected authService: AuthService) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(
      data => {
        this.blogs = data;
        console.log(this.blogs);
      }, error => {
        console.log('getBlogs ' + error);

      }
    );
  }
  editBlog(id: number) {
    console.log('click edit');
    this.router.navigate(['/blog/edit/update', id]);
  }

  deleteBlog(id: number) {
    console.log(id);
    this.blogService.deleteBlog(id).subscribe(
      data => {
        console.log('succ dele');
        const index = this.blogs.findIndex(b => b.id === id);
        this.blogs.splice(index, 1);

      }, error => {
        console.log('delete Blog ' + error);
      }
    );
  }

}
