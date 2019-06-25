import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewUserComponent } from "./user/view-user/view-user.component";
import { InsertUserComponent } from "./user/insert-user/insert-user.component";
import { UpdateUserComponent } from "./user/update-user/update-user.component";
import { UpdateAdminComponent } from "./admin/update-admin/update-admin.component";
import { InsertAdminComponent } from "./admin/insert-admin/insert-admin.component";
import { ViewAdminComponent } from "./admin/view-admin/view-admin.component";
import { ViewCategoryComponent } from "./category/view-category/view-category.component";
import { InsertCategoryComponent } from "./category/insert-category/insert-category.component";
import { UpdateCategoryComponent } from "./category/update-category/update-category.component";
import { ViewProductComponent } from "./product/view-product/view-product.component";
import { InsertProductComponent } from "./product/insert-product/insert-product.component";
import { UpdateProductComponent } from "./product/update-product/update-product.component";
import { ViewFeatureComponent } from "./feature/view-feature/view-feature.component";
import { InsertFeatureComponent } from "./feature/insert-feature/insert-feature.component";
import { UpdateFeatureComponent } from "./feature/update-feature/update-feature.component";
import { ViewProductFeatureComponent } from "./productFeature/view-product-feature/view-product-feature.component";
import { InsertProductFeatureComponent } from "./productFeature/insert-product-feature/insert-product-feature.component";
import { UpdateProductFeatureComponent } from "./productFeature/update-product-feature/update-product-feature.component";
import { ViewProductImageComponent } from "./productImage/view-product-image/view-product-image.component";
import { InsertProductImageComponent } from "./productImage/insert-product-image/insert-product-image.component";
import { UpdateProductImageComponent } from "./productImage/update-product-image/update-product-image.component";
import { ViewUserAddressComponent } from "./userAddress/view-user-address/view-user-address.component";
import { InsertUserAddressComponent } from "./userAddress/insert-user-address/insert-user-address.component";
import { UpdateUserAddressComponent } from "./userAddress/update-user-address/update-user-address.component";
import { ViewOrderComponent } from "./order/view-order/view-order.component";
import { InsertOrderComponent } from "./order/insert-order/insert-order.component";
import { UpdateOrderComponent } from "./order/update-order/update-order.component";
import { InsertOrderDetailComponent } from "./orderDetail/insert-order-detail/insert-order-detail.component";
import { UpdateOrderDetailComponent } from "./orderDetail/update-order-detail/update-order-detail.component";
import { ViewOrderDetailComponent } from "./orderDetail/view-order-detail/view-order-detail.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SingleProductComponent } from "./product/single-product/single-product.component";
import { ReviewComponent } from "./review/review.component";
import { NotLoginComponent } from "./not-login/not-login.component";
import { ViewFaqComponent } from "./view-faq/view-faq.component";
import { UpdateFaqComponent } from "./update-faq/update-faq.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "dashboard",
    component: DashboardComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "profile",
    component: ProfileComponent,
    runGuardsAndResolvers: "always"
  },
  { path: "forgotPassword", component: ForgotPasswordComponent },
  {
    path: "viewUser",
    component: ViewUserComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "insertUser",
    component: InsertUserComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "updateUser/:uId",
    component: UpdateUserComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "viewAdmin",
    component: ViewAdminComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "insertAdmin",
    component: InsertAdminComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "updateAdmin/:uId",
    component: UpdateAdminComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "viewCategory",
    component: ViewCategoryComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "insertCategory",
    component: InsertCategoryComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "updateCategory/:uId",
    component: UpdateCategoryComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "viewProduct",
    component: ViewProductComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "singleProduct/:uId",
    component: SingleProductComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "insertProduct",
    component: InsertProductComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "updateProduct/:uId",
    component: UpdateProductComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "viewFeature",
    component: ViewFeatureComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "insertFeature",
    component: InsertFeatureComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "updateFeature/:uId",
    component: UpdateFeatureComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "viewProductFeature",
    component: ViewProductFeatureComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "insertProductFeature/:uId",
    component: InsertProductFeatureComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "updateProductFeature/:uId",
    component: UpdateProductFeatureComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "viewProductImage",
    component: ViewProductImageComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "insertProductImage",
    component: InsertProductImageComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "updateProductImage/:uId",
    component: UpdateProductImageComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "viewUserAddress",
    component: ViewUserAddressComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "insertUserAddress",
    component: InsertUserAddressComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "updateUserAddress/:uId",
    component: UpdateUserAddressComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "viewOrder",
    component: ViewOrderComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "insertOrder",
    component: InsertOrderComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "updateOrder/:uId",
    component: UpdateOrderComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "viewOrderDetail",
    component: ViewOrderDetailComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "viewFaq",
    component: ViewFaqComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "updateFaq/:uId",
    component: UpdateFaqComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "insertOrderDetail",
    component: InsertOrderDetailComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "updateOrderDetail/:uId",
    component: UpdateOrderDetailComponent,
    runGuardsAndResolvers: "always"
  },
  { path: "login", component: LoginComponent },
  { path: "review", component: ReviewComponent },
  {
    path: "**",
    component: NotLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
