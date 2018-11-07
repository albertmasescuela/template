import { Component, Input } from '@angular/core';
import { Book } from '../state/book.model';

@Component({
  selector: 'bc-book-authors',
  template: `
    Written By:
    <span>
      {{ authors | bcAddCommas }}
    </span>
  `,
  styles: [``]
})
export class BookAuthorsComponent {
  @Input()
  book: Book;

  get authors() {
    return this.book.volumeInfo.authors;
  }
}
