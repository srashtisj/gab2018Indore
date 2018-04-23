
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    public _baseUri: string;
    public _pageSize: number;
    public _pageIndex: number;
    public _totalCount: number;

    constructor(public http: Http) {
               this._baseUri = "https://demo-testfun1.azurewebsites.net/api/HttpTriggerJS1"
    }

    get() {   
        
        return this.http.get(`${this._baseUri}`).map((res: Response) => {
          return res.json();
        })
          
      }

   

    getName() {        
        return this.get();
    }
}

