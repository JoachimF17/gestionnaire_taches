import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddTacheComponent } from "../add-tache/add-tache.component";
import { DetailsComponent } from "../details/details.component";
import { GetallComponent } from "../getall/getall.component";
import { ModifierComponent } from "../modifier/modifier.component";

const routes: Routes = [
    {path:"liste", component: GetallComponent},
    {path:"add", component: AddTacheComponent},
    {path:"tache/:id", component: DetailsComponent},
    {path:"modifier/:id", component: ModifierComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GestionRoutingModule { }