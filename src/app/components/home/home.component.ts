import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/servieces/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataserviceService){}

  posts : { username : String , date : String, message : String } [] = [];


public ngOnInit() {
  this.posts = this.dataService.posts;
}
}