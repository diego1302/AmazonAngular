import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { UserCardsComponent, UsersModule } from "./users";
import { HttpClientModule } from "@angular/common/http";
import { ProductsModule } from "./products/products.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Users2Module } from "./users2/users2.module";





@NgModule({
    declarations: [
      AppComponent,  
      HeaderComponent,
          
    ],
    imports: [
      BrowserModule,
      UsersModule,
      ProductsModule,
      Users2Module,
      HttpClientModule
      
           
    ], 
    providers: [
      provideClientHydration(),
      provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }