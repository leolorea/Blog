import { Post } from './../model/Post';
import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost : Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {

  }



  findPosts(){
    this.postService.getPosts().subscribe()
  }
}
