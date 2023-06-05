import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DataService {
   id:any = 1;
  private apiUrl = 'http://localhost:4000/api/data';

  //private apiUrl1 = `${this.apiUrl}/${this.id}`;


  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.apiUrl);
  }

  // getData1() {
  //   return this.http.get(this.apiUrl1);
  // }


  createData(data4: { title: string; text: string; }){
    return this.http.post(this.apiUrl, data4);
  }

updateData(id: number, data: any) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, data);
  }




  deleteData(id:number) {

    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);

}

}
