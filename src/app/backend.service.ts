import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient, private router: Router) { }

  baseUrl = "https://3ltqsd57hk6bs7uefsyluqyh5e0ciszv.lambda-url.eu-west-2.on.aws/"

  baseUrl1 = "https://6vcgruz8w3.execute-api.eu-west-2.amazonaws.com/dev/"
  // https://6vcgruz8w3.execute-api.eu-west-2.amazonaws.com/dev/update-item

  load_poc() {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    return this.http.get(this.baseUrl1 + 'items', { headers })
  }

  add_poc(paylaod: any) {
    const b = {
      "id": "poc_data",
      "data": paylaod
    }
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    return this.http.put(this.baseUrl1 + '/update-item',b,{ headers })
  }
}
