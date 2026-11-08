import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  const productService = jasmine.createSpyObj('ProductService', ['getProduct']);

  beforeEach(async () => {
    productService.getProduct.and.returnValue(of({
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png'
    }));

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '2' } } }
        },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        { provide: ProductService, useValue: productService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load and display the product matching the route id', () => {
    expect(productService.getProduct).toHaveBeenCalledWith(2);
    expect(component.product?.productName).toBe('Garden Cart');
    expect(fixture.nativeElement.textContent).toContain('Garden Cart');
    expect(fixture.nativeElement.textContent).toContain('15 gallon capacity rolling garden cart');
  });
});
