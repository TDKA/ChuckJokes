import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showAllJokes: any = [];
  jokeTest: any = [];
  categories: any = [];

  // chucks = [
  //   {
  //     "categories": [],
  //     "created_at": "2020-01-05 13:42:26.194739",
  //     "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  //     "id": "nyuM7LryRgGGCn2QsXWuEw",
  //     "updated_at": "2020-01-05 13:42:26.194739",
  //     "url": "https://api.chucknorris.io/jokes/nyuM7LryRgGGCn2QsXWuEw",
  //     "value": "Chuck Norris broke the sound barrier whilst head banging"
  //   },
  //
  //   {
  //     "categories": [],
  //     "created_at": "2020-01-05 13:42:23.484083",
  //     "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  //     "id": "fJOjv6mUTHWjU3OQm4VLbg", "updated_at": "2020-01-05 13:42:23.484083",
  //     "url": "https://api.chucknorris.io/jokes/fJOjv6mUTHWjU3OQm4VLbg",
  //     "value": "After drinking a case of Corona beer, Chuck Norris' urine smells like a steaming platter of chicken fajitas."
  //   },
  //
  //   {
  //     "categories": [],
  //     "created_at": "2020-01-05 13:42:23.484083",
  //     "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  //     "id": "fJOjv6mUTHWjU3OQm4VLbg", "updated_at": "2020-01-05 13:42:23.484083",
  //     "url": "https://api.chucknorris.io/jokes/fJOjv6mUTHWjU3OQm4VLbg",
  //     "value": "After drinking a case of Corona beer, Chuck Norris' urine smells like a steaming platter of chicken fajitas."
  //   },
  //
  //   {
  //     "categories":[],
  //     "created_at":"2020-01-05 13:42:19.104863",
  //     "icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  //     "id":"kudfbz0dtlw83676r_cmea","updated_at":"2020-01-05 13:42:19.104863",
  //     "url":"https://api.chucknorris.io/jokes/kudfbz0dtlw83676r_cmea",
  //     "value":"Chuck Norris drives an ice cream truck covered in human skulls."
  //   }
  //
  // ];


constructor(private http: HttpClient) {
}

  url = 'https://api.chucknorris.io/jokes/random';
  urlCategory = 'https://api.chucknorris.io/jokes/';

  // showJokes(){
  //   this.showAllJokes = this.chucks;
  //   console.log(this.showAllJokes);
  // }


  hideJokes(){
    this.showAllJokes = [];
  }

  getJokesApi() {
    this.http.get(this.url).subscribe(chuck => { this.showAllJokes.push(chuck) } );
    console.log(this.jokeTest);
  }

  getCategories() {
    this.http.get(this.urlCategory + `categories`).subscribe(categories => {
      this.categories = categories
    });
  }

  getJokeByCategory(category: any){
    this.http.get(`https://api.chucknorris.io/jokes/random?category=${category}`).subscribe(joke => {
      this.showAllJokes.push(joke);
    });
  }

  deleteJoke(chuck: any) {

    const index = this.showAllJokes.indexOf(chuck);
    this.showAllJokes.splice(index, 1);
  }



}












