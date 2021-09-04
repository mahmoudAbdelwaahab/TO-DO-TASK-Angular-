import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoLostComponent } from './Components/todo-lost/todo-lost.component';
import { TodoListItemComponent } from './Components/todo-list-item/todo-list-item.component';
import { TodoFormComponent } from './Components/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoLostComponent,
    TodoListItemComponent,
    TodoFormComponent,
    FooterComponent,
    

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
