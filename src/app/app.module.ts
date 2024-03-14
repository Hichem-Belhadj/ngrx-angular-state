import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './modules/counter/counter.component';
import { CounterOutputComponent } from './modules/counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './modules/counter/counter-buttons/counter-buttons.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './modules/home/home.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {StoreModule} from "@ngrx/store";
import { CounterNgrxButtonsComponent } from './modules/counter-ngrx/counter-ngrx-buttons/counter-ngrx-buttons.component';
import { CounterNgrxOutputComponent } from './modules/counter-ngrx/counter-ngrx-output/counter-ngrx-output.component';
import { CounterNgrxComponent } from './modules/counter-ngrx/counter-ngrx.component';
import { CustomCounterNgrxInputComponent } from './modules/counter-ngrx/custom-counter-ngrx-input/custom-counter-ngrx-input.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PostComponent } from './modules/post/post.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {ToolbarComponent} from "./shared/toolbar/toolbar.component";
import {MenuComponent} from "./shared/menu/menu.component";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {MatTableModule} from "@angular/material/table";
import { AddPostComponent } from './modules/post/add-post/add-post.component';
import { AddPostDialogComponent } from './modules/post/add-post-dialog/add-post-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {appReducer} from "./core/state/app/app.state";
import { UpdatePostComponent } from './modules/post/update-post/update-post.component';
import { DeletePostComponent } from './modules/post/delete-post/delete-post.component';
import { AuthComponent } from './auth/auth.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from './core/state/auth/auth.effects';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    HomeComponent,
    CounterNgrxButtonsComponent,
    CounterNgrxOutputComponent,
    CounterNgrxComponent,
    CustomCounterNgrxInputComponent,
    PostComponent,
    ToolbarComponent,
    MenuComponent,
    AddPostComponent,
    AddPostDialogComponent,
    UpdatePostComponent,
    DeletePostComponent,
    AuthComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    StoreDevtoolsModule.instrument(),
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
