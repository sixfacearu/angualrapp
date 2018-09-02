import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes}from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TokenbasketComponent } from './components/tokenbasket/tokenbasket.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
const route:Routes=[
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'tokenbasket',component:TokenbasketComponent},
  {path:'exchange',component:ExchangeComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TokenbasketComponent,
    ExchangeComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
