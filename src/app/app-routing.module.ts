import { MyDashboardComponent } from "./my-dashboard/my-dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: MyDashboardComponent
  },
  {
    path: "guitar",
    loadChildren: "./guitar/guitar.module#GuitarModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
