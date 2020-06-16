import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import {  throwError, Observable } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BoatManagementService {

constructor(private http: HttpClient) { }

public getAllBoats(){
  return this.http.get(environment.API_URL + "/GetBoats").pipe(catchError(this.handleError));
}

public addNewBoat(model:any):Observable<any>{
  return this.http.post(environment.API_URL + 'Boats/AddBoat' , model).pipe(map((data:HttpResponse<any>) => {
  return data;
  }
  ));
}

handleError(error: HttpErrorResponse) {
  let errorMessage = 'Unknown error!';
  if (error.error instanceof ErrorEvent) {
    // Client-side errors
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side errors
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}

}

