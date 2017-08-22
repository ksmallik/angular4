import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { DataService } from './data.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorserviceService } from './authorservice.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { StarComponent } from './star/star.component';
import { HeartComponent } from './heart/heart.component';
import { StackvoteComponent } from './stackvote/stackvote.component';

@NgModule({
  declarations: [
    MyComponent,
    MyComponentComponent,
    AuthorsComponent,
    AutoGrowDirective,
    StarComponent,
    HeartComponent,
    StackvoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService, AuthorserviceService],
  bootstrap: [MyComponent]
})
export class AppModule { }
