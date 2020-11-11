import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(public http: HttpClient) { }

  getJobs(){
    return this.http.post('https://search.torre.co/opportunities/_search/?[offset=1&size=3&aggregate=jobs]', {})
      .pipe(
        map((data: any) => data.results)
      );
  }
}
