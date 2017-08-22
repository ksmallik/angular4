import { Component, OnInit } from '@angular/core';
import { AuthorserviceService } from '../authorservice.service';
import { AutoGrowDirective } from '../auto-grow.directive';

@Component({
  selector: 'app-authors',
  template: `
    <h1>Authors</h1>
    <p>Title for the Authors Page</p>
    <input appAutoGrow />
    <ul>
      <li *ngFor="let author of authors">{{ author }}</li>
    </ul>
  `,
  styleUrls: ['./authors.component.css'],
  providers: [AuthorserviceService]
})
export class AuthorsComponent implements OnInit {

  constructor(private authorService: AuthorserviceService) {}

  authors = [];

  ngOnInit() {

    this.authors = this.authorService.authors;

  }

}
