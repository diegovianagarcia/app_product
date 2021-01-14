import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  user$: Observable<User>;

  constructor(
    private productService: ProductService,
    userService: UserService) {

    this.user$ = userService.getUser();
  }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.productService.read().
      subscribe(products => {
        console.log(products);
        this.user$.subscribe(user => {
          console.log(user)
          if (user) {
            this.products = products
          } else {
            this.products = products.filter(product => product.enabled == true)
          }
        });
      })
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(() => {
      this.load()
    })
  }

}
