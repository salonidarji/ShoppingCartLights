import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CategoriesComponent, ProductComponent, SingleProductComponent, ContentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
