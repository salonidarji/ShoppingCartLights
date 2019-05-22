import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { SingleProductComponent } from "./single-product/single-product.component";

const routes: Routes = [
  { path: "", redirectTo: "/content", pathMatch: "full" },
  {
    path: "content",
    component: ContentComponent
  },
  {
    path: "singleProduct",
    component: SingleProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
