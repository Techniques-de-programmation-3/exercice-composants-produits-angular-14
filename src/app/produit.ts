import { Caracteristiques } from "./caracteristiques";

export interface Produit {
    id?: number;
    nom: string,
    description: string,
    prix: number, 
    caracteristiques: Caracteristiques,
    qteStock: number
}

