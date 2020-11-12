import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from "./Store/store.module";
import { AppComponent } from './app.component';

import {CartDetailComponent} from "./Store/cartDetail.component";
import {CheckoutComponent} from "./Store/checkout.component";
import {StoreComponent} from "./Store/store.component";
 import {StoreFirstGuard} from "./storeFirst.guard";
import { RouterModule } from "@angular/router";
import {} from './Admin/admin.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, StoreModule,  RouterModule.forRoot([
    { 
      path: "store", component: StoreComponent,
      canActivate: [StoreFirstGuard]
  },
    {
       path: "cart", component: CartDetailComponent,
       canActivate: [StoreFirstGuard]
      },
    { 
      path: "checkout", component: CheckoutComponent,
      canActivate: [StoreFirstGuard]
    },
    {
      path: "admin",
      loadChildren: "./Admin/admin.module#AdminModule",
      canActivate: [StoreFirstGuard]
  },
    { 
      path: "**", redirectTo: "/store", 
    }
]), ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
