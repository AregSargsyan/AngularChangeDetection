import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './default/first/first.component';
import { SecondComponent } from './default/second/second.component';
import { ThirdComponent } from './default/third/third.component';
import { AComponent } from './onPush/a/a.component';
import { BComponent } from './onPush/b/b.component';
import { CComponent } from './onPush/c/c.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    AComponent,
    BComponent,
    CComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
