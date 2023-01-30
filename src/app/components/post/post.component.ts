import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  postForm = new FormGroup({
    username: new FormControl(),
    date: new FormControl(),
    message: new FormControl(),
  })
tweetForm: any;

  shareIt() : void {
    console.log(this.postForm.value);
    
  }
}
