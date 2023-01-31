import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  posts = [
    {username: "President Biden1", date: "23.10.2020" , message: "Im building back an economy with better jobs and better pay -one that includes good-paying jobs that dont require a four-year degree, and communities that are too often forgotten."},
    {username: "President Biden2", date: "23.10.2020" , message: "Im building back an economy with better jobs and better pay -one that includes good-paying jobs that dont require a four-year degree, and communities that are too often forgotten."},
    {username: "President Biden3", date: "23.10.2020" , message: "Im building back an economy with better jobs and better pay -one that includes good-paying jobs that dont require a four-year degree, and communities that are too often forgotten."},
  ]
}
