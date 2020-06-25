import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/_models/IBlog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/_services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  blog: IBlog;
  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlog(this.route.snapshot.params.id).subscribe(
      data => { this.blog = data; }
    );

  }

}
