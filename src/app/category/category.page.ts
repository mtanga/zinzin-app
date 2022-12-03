import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FunctionsService } from '../services/functions.service';
import { WordpressService } from '../services/wordpress.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  posts: any;
  category : any

  constructor(
    private wordpressService: WordpressService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    public functions : FunctionsService
  ) { }

  ngOnInit() {
    this.category = localStorage.getItem('category');
    console.log(this.category);
    this.route.paramMap.subscribe(paramMap => {
     let cat = paramMap.get('id');
      this.getPosts(cat);
    });
}

async invite(post){
  this.functions.share(post);
}

getPosts(cat){
  this.wordpressService.getPsotBycat(cat).subscribe(data => {
    console.log(data);
    this.posts = data;
  })

} 


}