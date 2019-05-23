import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { SingleProductComponent } from "./single-product/single-product.component";
import { ProductCategoryComponent } from "./product-category/product-category.component";

const routes: Routes = [
  { path: "", redirectTo: "/content", pathMatch: "full" },
  {
    path: "content",
    component: ContentComponent
  },
  {
    path: "singleProduct",
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
