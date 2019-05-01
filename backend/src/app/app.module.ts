import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { ViewUserComponent } from "./user/view-user/view-user.component";
import { InsertUserComponent } from "./user/insert-user/insert-user.component";
import { UpdateUserComponent } from "./user/update-user/update-user.component";

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ViewUserComponent,
    InsertUserComponent,
    UpdateUserComponent
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
