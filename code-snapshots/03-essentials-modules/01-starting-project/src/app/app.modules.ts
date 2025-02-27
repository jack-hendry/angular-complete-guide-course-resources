import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent], // can not be used for standalone components
  bootstrap: [AppComponent], // root component
  imports: [BrowserModule, SharedModule, TasksModule], // can be used for standalone components
})
export class AppModule {}
