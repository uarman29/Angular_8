import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/category';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  @Input('category') category:string;
  categories$:Observable<Category[]>;

  constructor(private categoryService:CategoryService) { 
    this.categories$ = categoryService.categoryObservable;
  }

  ngOnInit() {
  }

}
