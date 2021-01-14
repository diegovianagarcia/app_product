import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/components/card/card.module';

import { ProductListComponent } from './product-list.component';

@NgModule({
    declarations: [
        ProductListComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        CardModule,
        RouterModule,
    ],
    exports: [ProductListComponent]
})
export class ProductListModule { }