import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
declare var $: any;

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  products: Product[];
  date: number;
  totalPrice = 0;
  tax = 6.4;

  constructor(private productService: ProductService) {
    document.getElementById('productsTab').style.display = 'none';
    document.getElementById('shippingTab').style.display = 'none';
    document.getElementById('billingTab').style.display = 'none';
    document.getElementById('resulttab').style.display = 'block';

    this.products = productService.getLocalCartProducts();

    this.products.forEach((product)  => {
      this.totalPrice += product.productPrice;

    });
    this.date = Date.now();

   }

  ngOnInit() {
  }

  downloadReceipt(){
    const data = document.getElementById('receipt');


    html2canvas(data).then((canvas)  => {
      			// Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf ('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('drehendz.pdf'); //Generated PDF


    });
  }

}
