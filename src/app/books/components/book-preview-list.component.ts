import { Component, Input } from '@angular/core';
import { Book } from '../state/book.model';

@Component({
  selector: 'bc-book-preview-list',
  template: `
    <div class="container">
          <table class="table table-dark table-hover table-striped">
            <thead class="thead-light">
              <tr>
                <th colspan='2'>Titols</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <bc-book-preview *ngFor="let book of books" [book]="book"></bc-book-preview>
              </tr>
            </tbody>
          </table>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `
  ]
})
// Millores
export class BookPreviewListComponent {
  @Input()
  books: Book[];
}
