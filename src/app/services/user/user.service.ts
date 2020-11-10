import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RootObject} from '../../models/rootObject';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getUser(username: string = 'juanpalacor'){
    return this.http.get(`https://bio.torre.co/api/bios/${username}`)
      .pipe(
        map((data: any) => data)
      );
    }
}
