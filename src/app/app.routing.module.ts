import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginGuard } from './core/auth/login.guard';
import { SignInComponent } from './home/signin/signin.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { ProductUpdateResolver } from './products/product-update/product-update.resolver';

const routes: Routes = [
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: 'p/add',
        component: ProductCreateComponent,
        //  Tem que estar autenticado
        canActivate: [AuthGuard],
    },
    {
        path: 'p/update/:id',
        component: ProductUpdateComponent,
        //  Tem que estar autenticado
        canActivate: [AuthGuard],

    },
    {
        path: 'login',
        component: SignInComponent,
        //  Não vai para tela de login se já está autenticado
        canActivate: [LoginGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

