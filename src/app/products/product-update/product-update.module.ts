import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { ProductUpdateComponent } from './product-update.component';

@NgModule({
    declarations: [ProductUpdateComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        VMessageModule,
        RouterModule,
    ]
})
export class ProductUpdateModule { }