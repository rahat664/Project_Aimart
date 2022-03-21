import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {BannerComponent} from './banner/banner.component';
import {SwiperModule} from "swiper/angular";
import {ProductCardComponent} from './product-card/product-card.component';
import {ImagePipe} from "./pipes/image.pipe";
import {SubHeadingComponent} from './sub-heading/sub-heading.component';


@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        BannerComponent,
        ProductCardComponent,
        ImagePipe,
        SubHeadingComponent
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        BannerComponent,
        ProductCardComponent,
        ImagePipe,
        SubHeadingComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SwiperModule
    ]
})
export class SharedModule { }
