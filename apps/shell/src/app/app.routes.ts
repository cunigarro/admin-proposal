import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const COLLECTION_URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'cobranza',
      loadChildren: () => loadRemoteModule({
          remoteEntry: COLLECTION_URL,
          remoteName: 'mfe1',
          exposedModule: './Collection'
        })
        .then(m => m.CollectionCoreModule)
    },
    {
      path: '**',
      component: NotFoundComponent
    }
];
