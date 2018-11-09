import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CnodeService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getCnode() {
    return this.http.get(`https://cnodejs.org/api/v1/topics`);
  }

}
