import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { SingleProductComponent } from "./single-product/single-product.component";
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { ProductAllComponent } from "./product-all/product-all.component";
import { LoginSignupComponent } from "./login-signup/login-signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

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
    path: "forgotPassword",
    component: ForgotPasswordComponent
  },
  {
    path: "singleProduct/:uId",
    component: SingleProductComponent
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