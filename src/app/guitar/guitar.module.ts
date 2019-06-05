import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GuitarRoutingModule } from "./guitar-routing.module";
import { StringsComponent } from "./strings/strings.component";

@NgModule({
  declarations: [StringsComponent],
  imports: [CommonModule, GuitarRoutingModule]
})
export class GuitarModule {}
