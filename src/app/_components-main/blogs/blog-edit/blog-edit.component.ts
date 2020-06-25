import { Component, OnInit, ViewChild } from '@angular/core';
import { IBlog } from 'src/app/_models/IBlog';
import { BlogService } from 'src/app/_services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  @ViewChild('ngForm', { static: true }) ngForm: NgForm;
  blog: IBlog;
  toCreate: boolean;
  public Editor = ClassicEditor;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.blog = { id: undefined, title: '', postDate: new Date(), content: '' , category:''};
    this.toCreate = this.route.snapshot.params.id === null;

    if (!this.toCreate) {
      this.blogService.getBlog(this.route.snapshot.params.id).subscribe(data => {
        this.blog = data;

        console.log('BlogEditComponent: getBlog succ');
      
      });
    }
  }

  addBlog() {
    this.blogService.addBlog(this.blog).subscribe(
      data => {
        console.log('BlogEditComponent add blog successful');
        this.router.navigate(['/blogs']);

      }, error => {
        console.log('BlogEditComponent add Blog ' + error);
      }
    );
  }

  updateBlog() {
    this.blogService.updateBlog(this.blog).subscribe(
      data => {
        console.log('BlogEditComponent update blog successful');
        this.router.navigate(['/blogs']);

      }, error => {
        console.log('BlogEditComponent update Blog ' + error);
      }
    )
  }



}
