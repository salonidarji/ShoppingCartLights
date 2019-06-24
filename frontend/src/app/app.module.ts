import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CategoriesComponent } from "./categories/categories.component";
import { ProductComponent } from "./product/product.component";
import { SingleProductComponent } from "./single-product/single-product.component";
import { ContentComponent } from "./content/content.component";
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductAllComponent } from './product-all/product-all.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { NotLoginComponent } from './not-login/not-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { VerificationComponent } from './verification/verification.component';
import { ShowWishlistComponent } from './show-wishlist/show-wishlist.component';
import { PaySuccessComponent } from './pay-success/pay-success.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    ProductComponent,
    SingleProductComponent,
    ContentComponent,
    ProductCategoryComponent,
    ProductAllComponent,
    LoginSignupComponent,
    NotLoginComponent,
    ForgotPasswordComponent,
    CartComponent,
    CheckoutComponent,
    OrderHistoryComponent,
    ProfileComponent,
    UpdateAddressComponent,
    VerificationComponent,
    ShowWishlistComponent,
    PaySuccessComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
