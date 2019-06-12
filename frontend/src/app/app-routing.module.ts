import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { SingleProductComponent } from "./single-product/single-product.component";
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { ProductAllComponent } from "./product-all/product-all.component";
import { LoginSignupComponent } from "./login-signup/login-signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { OrderHistoryComponent } from "./order-history/order-history.component";
import { ProfileComponent } from "./profile/profile.component";
import { UpdateAddressComponent } from "./update-address/update-address.component";
import { VerificationComponent } from "./verification/verification.component";
import { ShowWishlistComponent } from "./show-wishlist/show-wishlist.component";

const routes: Routes = [
  { path: "", redirectTo: "/content", pathMatch: "full" },
  {
    path: "content",
    component: ContentComponent
  },
  {
    path: "productAll",
    component: ProductAllComponent
  },
  {
    path: "loginSignup",
    component: LoginSignupComponent
  },
  {
    path: "verification/:uId",
    component: VerificationComponent
  },
  {
    path: "forgotPassword",
    component: ForgotPasswordComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "showWishlist",
    component: ShowWishlistComponent
  },
  {
    path: "orderHistory",
    component: OrderHistoryComponent
  },
  {
    path: "singleProduct/:uId",
    component: SingleProductComponent
  },
  {
    path: "updateAddress/:uId",
    component: UpdateAddressComponent
  },
  {
    path: "productByCategory/:uId",
    component: ProductCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
