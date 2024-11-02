import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
  
})
export class ProduitsComponent implements OnInit {
   
    produits: Produit[];
   
    constructor(private produitService: ProduitService ) {
      
      this.produits=[];
      }
      ngOnInit():void{
        this.chargerProduit();
      }
 chargerProduit()
 {
  this.produitService.listeProduit().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
    });
 }
 
 
 supprimerProduit(p: Produit)
{
let conf = confirm("Etes-vous sûr ?");
if (conf&& p.idProduit !== undefined)
this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
console.log("produit supprimé");
this.chargerProduit();
});
} 

    
}
 