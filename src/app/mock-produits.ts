import { Produit } from "./produit";

export const PRODUITS: Produit[] = [
    {
        nom: 'Nom du produit 1', 
        description: 'Description du produit 1....', 
        prix: 10, 
        caracteristiques: {
            couleur:'rouge'
        }
    },
    {
        nom: 'Nom du produit 2',
        description: 'Description du produit2....',
        prix: 20,
        caracteristiques: {
            couleur: 'bleue', 
            taille : '3 pieds'
        }
    }, 
    {
        nom: 'Nom du produit 3',
        description: 'Description du produit 3....',
        prix: 30,
        caracteristiques: {
            taille : 'Petit'
        }
    },
    {
        nom: 'Nom du produit 4',
        description: 'Description du produit 4....',
        prix: 40,
        caracteristiques: {}
    },
    {
        nom: 'Nom du produit 6',
        description: 'Description du produit 6....',
        prix: 50,
        caracteristiques: {}
    } 
]