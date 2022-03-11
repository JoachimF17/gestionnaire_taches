import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { GestionRoutingModule } from "./gestion-routing.module";
import { GetallComponent } from "../getall/getall.component";

@NgModule({
    declarations: [
        GetallComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        GestionRoutingModule
    ]
})

export class GestionModule{}