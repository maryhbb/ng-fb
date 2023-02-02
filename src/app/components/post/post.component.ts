import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from 'src/app/servieces/dataservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent  {
 
  constructor(private dataService: DataserviceService) { }

  postForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    date: new FormControl(''),
    message: new FormControl('')
  });
  
  shareIt(): void {
    console.log(this.postForm.value);
    this.dataService.posts.push(this.postForm.value);
    console.log(this.dataService.posts)
  }
}
