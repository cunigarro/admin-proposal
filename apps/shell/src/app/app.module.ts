import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { categoryReducer, moviesReducer } from '@nx-ngrx-angular/data-store';
import { CategoryComponent } from '../category/category.component';
import { ContainerComponent } from '../container/container.component';
import { LoaderDirective } from '../loader.directive';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CategoryComponent,
    LoaderDirective,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    FormsModule,
    /* StoreModule.forRoot(
      { movies: moviesReducer, categories: categoryReducer },
      {}
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
