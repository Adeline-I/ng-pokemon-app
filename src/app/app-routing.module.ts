import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
    // Ajout d'une route par défaut, ici, celle de la liste des pokemons
    // pathMatch permet d'éviter les effets de bord et donc de mieux isoler les choses
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    // Ajout d'une route permettant d'intercepter toutes les routes en cas d'erreurs
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}