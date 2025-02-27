import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [AppComponent], // can not be used for standalone components
  bootstrap: [AppComponent], // root component
  imports: [HeaderComponent, TasksComponent, UserComponent, BrowserModule], // can be used for standalone components
})
export class AppModule {}
