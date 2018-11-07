import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { CollectionPageComponent } from './containers/collection-page.component';
import { FindBookPageComponent } from './containers/find-book-page.component';
import { ViewBookPageComponent } from './containers/view-book-page.component';
import { SelectedBookPageComponent } from './containers/selected-book-page.component';
import { ComponentsModule } from './components';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [CommonModule, BooksRoutingModule, ComponentsModule, HttpModule],
  declarations: [
    CollectionPageComponent,
    FindBookPageComponent,
    ViewBookPageComponent,
    SelectedBookPageComponent
  ]
})
export class BooksModule {}
