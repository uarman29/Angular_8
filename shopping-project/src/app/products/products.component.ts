import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  products$:Observable<Product[]>;
  products:Product[];
  category:string;
  filteredProducts:Product[];
  subscription:Subscription;

  constructor(private productService:ProductService,private route:ActivatedRoute) {
    this.products$ = productService.productObservable;

    this.subscription = this.products$.subscribe(products =>{
      this.filteredProducts = this.products = products;
      route.queryParamMap.subscribe(params =>{
        this.category = params.get('category');
        this.filteredProducts = (this.category) ? this.products.filter(p => p.category.toLowerCase() == this.category.toLowerCase()): this.products;
      });
    });

   }

  ngOnInit() {
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

}
