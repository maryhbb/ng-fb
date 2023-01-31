import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from 'src/app/servieces/dataservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      username: new FormControl(''),
      date: new FormControl(''),
      message: new FormControl('')
    });
  }

  shareIt(): void {
    console.log(this.postForm.value);
    this.dataService.posts.push({
      username: this.postForm.value.username,
      date: this.postForm.value.date,
      message: this.postForm.value.message
    });
    console.log(this.dataService.posts)
  }
}
