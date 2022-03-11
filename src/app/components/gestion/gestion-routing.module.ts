import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddTacheComponent } from "../add-tache/add-tache.component";
import { GetallComponent } from "../getall/getall.component";

const routes: Routes = [
    {path:"liste", component: GetallComponent},
    {path:"add", component: AddTacheComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GestionRoutingModule { }