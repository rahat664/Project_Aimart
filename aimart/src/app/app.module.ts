import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {SwiperModule} from "swiper/angular";
import {HttpClientModule} from "@angular/common/http";
import { CheckoutComponent } from './Pages/checkout/checkout.component';


@NgModule({
    declarations: [
        AppComponent,
        CheckoutComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        SwiperModule,
        HttpClientModule
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
