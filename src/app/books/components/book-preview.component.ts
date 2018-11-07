import { Component, Input } from '@angular/core';
import { Book } from '../state/book.model';

@Component({
  selector: 'bc-book-preview',
  template: `
  <div class="container-fluid">
    <a [routerLink]="['/books', id]">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <img *ngIf="thumbnail" class="img-thumbnail rounded" [src]="thumbnail">
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8">
              {{ title | bcEllipsis:35 }}
            </div>
          </div>
          <div class="row">
            <div class="col">
               <div *ngIf="subtitle">{{ subtitle | bcEllipsis:40 }}</div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p *ngIf="description">{{ description | bcEllipsis }}</p>
              </div>
          </div>
          <div class="row">
            <div class="col">
              <bc-book-authors [book]="book"></bc-book-authors>
            </div>
          </div>
    </a>
  </div>
  `,
  styles: [
    `
      :host {
        display: flex;
      }
      :host a {
        display: flex;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      img {
        width: 80px;
        min-width: 60px;
        margin-left: 5px;
      }
    `
  ]
})
export class BookPreviewComponent {
  @Input()
  book: Book;

  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get subtitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail(): string | boolean {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail.replace(
        'http:',
        ''
      );
    }

    return false;
  }
}
