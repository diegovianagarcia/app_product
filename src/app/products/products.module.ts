import { NgModule } from '@angular/core';
import { ProductListModule } from './product-list/product-list.module';
import { ProductCreateModule } from './product-create/product-create.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../core/auth/request.interceptor';
import { ProductUpdateModule } from './product-update/product-update.module';

@NgModule({
    imports: [
        ProductListModule,
        ProductCreateModule,
        ProductUpdateModule
    ],
    declarations: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class ProducsModule { }