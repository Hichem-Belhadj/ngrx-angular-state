import { RouterModule, Routes } from "@angular/router";
import { PostComponent } from "./post.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: PostComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }