import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewUserComponent } from "./user/view-user/view-user.component";
import { InsertUserComponent } from "./user/insert-user/insert-user.component";
import { UpdateUserComponent } from "./user/update-user/update-user.component";

const routes: Routes = [
  { path: "", redirectTo: "/viewUser", pathMatch: "full" },
  { path: "viewUser", component: ViewUserComponent },
  { path: "insertUser", component: InsertUserComponent },
  { path: "updateUser/:uId", component: UpdateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
