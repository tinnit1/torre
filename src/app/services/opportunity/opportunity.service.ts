import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(public http: HttpClient) { }

  getOpportunity(id: string){
    return this.http.get(`https://torre.co/api/opportunities/${id}`)
      .pipe(
        map((data: any) => data)
      );
  }
}
