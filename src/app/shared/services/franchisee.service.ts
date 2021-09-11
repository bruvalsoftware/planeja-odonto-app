import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Franchisee } from '../models/Franchisee';

@Injectable({
  providedIn: 'root'
})
export class FranchiseeService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public createFranchisee(data) {
    return this.httpClient.post( this.apiUrl + "v1/Franchisee/create", {
      "name": data.name,
      "email": data.email,
      "phone": data.phone
    });
  }

  public getFranchisees(): Observable<Franchisee[]> {
    let url = this.apiUrl + '​v1​/Franchisee/getAll';
    console.log(url);
    return this.httpClient.get<Franchisee[]>( url );
  }
  
  public getFranchiseesT() {
    return this.httpClient.get(encodeURI(this.apiUrl + "​v1​/user/getAll"));
  }
}
