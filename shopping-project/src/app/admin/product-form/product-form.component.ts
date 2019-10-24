import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/category';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories:Observable<Category[]>;
  product:Product = {title:"", price:0 ,category:"",imageUrl:""};
  id;
  constructor(private categoryService:CategoryService, private productService:ProductService, private router:Router,private route:ActivatedRoute) { 
    this.categories = categoryService.categoryObservable;
    this.id = this.route.snapshot.paramMap.get("id");

    if(this.id)
      this.productService.lookup(this.id).subscribe(p => this.product = p);
  }

  ngOnInit() {
  }

  save(product:Product)
  {
    if(this.id)
      this.productService.update(this.id,product);
    else
      this.productService.create(product);
    
    this.router.navigateByUrl("/admin/products");
  }

  delete()
  {
    if(confirm('Are you sure you want to delete this product'))
    {
      this.productService.delete(this.id);
      this.router.navigateByUrl("/admin/products");
    }
  }
}
