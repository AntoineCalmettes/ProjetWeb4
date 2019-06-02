import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts().then((data) => {

  })

getPosts(){
  return new Promise(resolve) => {
    this.httpClient.get("/api/post", (data) => {
      resolve(data)
    })
  }
};
}
