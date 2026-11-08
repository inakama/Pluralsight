import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  errorMessage: string = '';
  loading: boolean = true;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe({
      next: product => {
        this.product = product;
        this.loading = false;
      },
      error: error => {
        this.errorMessage = error;
        this.loading = false;
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
