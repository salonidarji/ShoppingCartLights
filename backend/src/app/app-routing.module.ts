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

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "profile", component: ProfileComponent },
  { path: "forgotPassword", component: ForgotPasswordComponent },
  { path: "viewUser", component: ViewUserComponent },
  { path: "insertUser", component: InsertUserComponent },
  { path: "updateUser/:uId", component: UpdateUserComponent },
  { path: "viewAdmin", component: ViewAdminComponent },
  { path: "insertAdmin", component: InsertAdminComponent },
  { path: "updateAdmin/:uId", component: UpdateAdminComponent },
  { path: "viewCategory", component: ViewCategoryComponent },
  { path: "insertCategory", component: InsertCategoryComponent },
  { path: "updateCategory/:uId", component: UpdateCategoryComponent },
  { path: "viewProduct", component: ViewProductComponent },
  { path: "insertProduct", component: InsertProductComponent },
  { path: "updateProduct/:uId", component: UpdateProductComponent },
  { path: "viewFeature", component: ViewFeatureComponent },
  { path: "insertFeature", component: InsertFeatureComponent },
  { path: "updateFeature/:uId", component: UpdateFeatureComponent },
  { path: "viewProductFeature", component: ViewProductFeatureComponent },
  { path: "insertProductFeature", component: InsertProductFeatureComponent },
  {
    path: "updateProductFeature/:uId",
    component: UpdateProductFeatureComponent
  },
  { path: "viewProductImage", component: ViewProductImageComponent },
  { path: "insertProductImage", component: InsertProductImageComponent },
  { path: "updateProductImage/:uId", component: UpdateProductImageComponent },
  { path: "viewUserAddress", component: ViewUserAddressComponent },
  { path: "insertUserAddress", component: InsertUserAddressComponent },
  { path: "updateUserAddress/:uId", component: UpdateUserAddressComponent },
  { path: "viewOrder", component: ViewOrderComponent },
  { path: "insertOrder", component: InsertOrderComponent },
  { path: "updateOrder/:uId", component: UpdateOrderComponent },
  { path: "viewOrderDetail", component: ViewOrderDetailComponent },
  { path: "insertOrderDetail", component: InsertOrderDetailComponent },
  { path: "updateOrderDetail/:uId", component: UpdateOrderDetailComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
