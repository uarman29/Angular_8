import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products$:Observable<Product[]>;
  products:Product[];
  filteredProducts:Product[];
  subscription:Subscription;

  constructor(private productService:ProductService) {
    this.products$ = productService.productObservable;
    this.subscription = this.products$.subscribe(products => {
      this.filteredProducts = this.products = products;
    })
   }

  ngOnInit() 
  {
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  filter(query:string)
  {
    this.filteredProducts = (query) ? this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

}
