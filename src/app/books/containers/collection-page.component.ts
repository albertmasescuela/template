import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../state/book.model';
import { BooksQuery } from '../state/books.query';

@Component({
  selector: 'bc-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  /*
    <mat-card>
      <mat-card-title>My Collection</mat-card-title>
    </mat-card>

    <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
    */
  template: `
    <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
  `,
  styles: [
    `
      mat-card-title {
        display: flex;
        justify-content: center;
      }
    `
  ]
})
export class CollectionPageComponent {
  books$: Observable<Book[]>;
  constructor(private bookQuery: BooksQuery) {
    this.books$ = this.bookQuery.selectMany(this.bookQuery.collection);
  }
}
