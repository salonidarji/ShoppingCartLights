import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "./auth.guard";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { ViewUserComponent } from "./user/view-user/view-user.component";
import { InsertUserComponent } from "./user/insert-user/insert-user.component";
import { UpdateUserComponent } from "./user/update-user/update-user.component";
import { InsertAdminComponent } from "./admin/insert-admin/insert-admin.component";
import { UpdateAdminComponent } from "./admin/update-admin/update-admin.component";
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
import { ViewOrderDetailComponent } from "./orderDetail/view-order-detail/view-order-detail.component";
import { InsertOrderDetailComponent } from "./orderDetail/insert-order-detail/insert-order-detail.component";
import { UpdateOrderDetailComponent } from "./orderDetail/update-order-detail/update-order-detail.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ViewUserComponent,
    InsertUserComponent,
    UpdateUserComponent,
    InsertAdminComponent,
    UpdateAdminComponent,
    ViewAdminComponent,
    ViewCategoryComponent,
    InsertCategoryComponent,
    UpdateCategoryComponent,
    ViewProductComponent,
    InsertProductComponent,
    UpdateProductComponent,
    ViewFeatureComponent,
    InsertFeatureComponent,
    UpdateFeatureComponent,
    ViewProductFeatureComponent,
    InsertProductFeatureComponent,
    UpdateProductFeatureComponent,
    ViewProductImageComponent,
    InsertProductImageComponent,
    UpdateProductImageComponent,
    ViewUserAddressComponent,
    InsertUserAddressComponent,
    UpdateUserAddressComponent,
    ViewOrderComponent,
    InsertOrderComponent,
    UpdateOrderComponent,
    ViewOrderDetailComponent,
    InsertOrderDetailComponent,
    UpdateOrderDetailComponent,
    LoginComponent,
    DashboardComponent
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
