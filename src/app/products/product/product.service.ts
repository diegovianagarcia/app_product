import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';

const BASE_URL = environment.apiUrl + '/products'

@Injectable({ providedIn: 'root' })
export class ProductService {

    constructor(private http: HttpClient) { }

    read(): Observable<Product[]> {
        return this.http.get<Product[]>(BASE_URL);
    }

    readById(id: number): Observable<Product> {
        const url = `${BASE_URL}/${id}`
        return this.http.get<Product>(url);
    }

    create(product: Product): Observable<Product> {
        return this.http.post<Product>(BASE_URL, product)
    }

    update(id: number, product: Product): Observable<Product> {
        const url = `${BASE_URL}/${id}`
        return this.http.put<Product>(url, product)
    }

    delete(id: number): Observable<Product> {
        const url = `${BASE_URL}/${id}`
        return this.http.delete<Product>(url);
    }

}