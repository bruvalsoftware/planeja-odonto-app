import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public createFranchise(data) {

  }

}
