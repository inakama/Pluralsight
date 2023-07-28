import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productUrl = 'api/products/products.json'

    constructor(private http: HttpClient ) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl)
            .pipe(
                tap(data => console.log('All: ', JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            // a clien-side or network error ocurred
            errorMessage = `An error ocurred: ${err.error.message}`;
        } else {
            // the backend returned an unsuccessful response code
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
        }

        console.error(errorMessage);
        return throwError(() => errorMessage);
    }
}