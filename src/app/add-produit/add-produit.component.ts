import { Component} from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
  
})
export class AddProduitComponent  {
    newProduit=new Produit();
    message :string;
constructor(private produitService: ProduitService,
  private router :Router
) {
  this.message="";
}
    
addProduit(){
  this.produitService.ajouterProduit(this.newProduit)
  .subscribe(prod => {
  console.log(prod);
  this.router.navigate(['produits']);
  });
  } 

    
}
