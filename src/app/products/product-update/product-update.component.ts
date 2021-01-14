import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { ProductUpdateResolver } from './product-update.resolver';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      enabled: [true]
    })
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      console.log(product);
      this.productForm.setValue(
        {
          name: product.name,
          description: product.description,
          enabled: product.enabled
        }
      )
    })
  }

  submit(): void {
    const product = this.productForm.getRawValue() as Product;
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.update(id, product).subscribe((dados) => {
      console.log(dados)
      this.router.navigate(['']);
    });
  }

  cancel(): void {
    console.log('cheguei')
    this.router.navigate(['/'])
  }

}
