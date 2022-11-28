import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ScrumboardService{

  constructor(private _http:HttpClient) {}

  get Points():Observable<Point[]> {
    let auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJhZG1pbiJdfQ.CdWxmHjUmRH7m7xqJokcTUgCRcDmoM2FMd5L7sRsNck";

    const headers = new HttpHeaders({

      'Content-Type': 'application/json',

      'Authorization': `Bearer ${auth_token}`

    });
    const requestOptions = { headers: headers };
    return this._http.get<Point[]>('http://localhost:5000/storypoints',requestOptions)
  }

  get Stories() {
    return this._http.get<Story[]>('http://localhost:5000/storyboard').toPromise()
  }
  async  Post(title:string,estimation:number,priority:boolean) {
    return this._http.post('http://localhost:5000/storyboard',{
      "title":title,
      "estimation":estimation,
      "state":0,
      "priority":priority
    }).toPromise();
  }

  async Delete(id:number){
    return this._http.delete(`http://localhost:5000/storyboard/${id}`).toPromise();
  }

  async Update(id:number, story: Story){
    return this._http.put(`http://localhost:5000/storyboard/${id}`,story).toPromise();
  }
}

export interface Point{
  value: number;
}

export interface Story {
  title: string;
  estimation: any;
  state: number;
  priority: any;
  id: number;
}
