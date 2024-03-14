import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: CounterComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CounterRoutingModule { }