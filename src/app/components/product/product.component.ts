import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products:Product[] = [];
  dataLoaded = false;
  filterText="";

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService, private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        //sanki dünyada tek başımaymışım gibi
        this.getProductsByCategory(params["categoryId"]);
      }else{
        this.getProducts();
      }
    });
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=> {
      this.products = response.data
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsById(categoryId).subscribe(response=> {
      this.products = response.data
      this.dataLoaded = true;
    });
  }

  addToCard(product:Product){
    this.toastrService.success("Sepete Eklendi",product.productName);
    this.cartService.addToCart(product);
  }
}