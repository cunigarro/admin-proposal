import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { categoryReducer, moviesReducer } from '@nx-ngrx-angular/data-store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CollectionCoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    CollectionCoreModule
    /* StoreModule.forRoot(
      { movies: moviesReducer, categories: categoryReducer },
      {}
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [], */
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
