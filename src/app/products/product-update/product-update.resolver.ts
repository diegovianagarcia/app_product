import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

export class ProductUpdateResolver implements Resolve<Observable<Product>>{

    constructor(private service: ProductService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Observable<Observable<Product>> | Promise<Observable<Product>> {
        return this.service.readById(route.params.id)
    }
}