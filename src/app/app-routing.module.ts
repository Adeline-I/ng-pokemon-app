import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";

const routes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
    // Ajout d'une route par défaut, ici, celle de la liste des pokemons
    // pathMatch permet d'éviter les effets de bord et donc de mieux isoler les choses
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}