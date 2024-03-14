import { RouterModule, Routes } from "@angular/router";
import { CounterNgrxComponent } from "./counter-ngrx.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: CounterNgrxComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CounterNgrxRoutingModule { }