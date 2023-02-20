import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem, CartService } from '@grafficocreation/orders';
import { Subject, takeUntil } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styles: [],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  product!: Product;
  endSubs$: Subject<any> = new Subject();
  quantity = 1;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['productid']) {
        this._getProduct(params['productid']);
      }
    });
  }

  ngOnDestroy(): void {
    this.endSubs$.next(void 0);
    this.endSubs$.complete();
  }

  private _getProduct(id: string) {
    this.productService
      .getProduct(id)
      .pipe(takeUntil(this.endSubs$))
      .subscribe((product) => {
        this.product = product;
      });
  }

  addProductToCart() { 
    const cartItem : CartItem = {
      productId : this.product.id,
      quantity : this.quantity
    }

    this.cartService.setCartItem(cartItem)
  }
}
