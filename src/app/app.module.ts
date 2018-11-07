// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { CoreModule } from './core/core.module';
// import { AppComponent } from './core/containers/app.component';
// import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
// import { AppRoutingModule } from './app-routing.module';
// @NgModule({
//   imports: [
//     BrowserModule,
//     AkitaNgDevtools.forRoot(),
//     AppRoutingModule,
//     CoreModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
//import { AuthModule } from './auth/auth.module';
import { AppComponent } from './core/containers/app.component';
import { AppRoutingModule } from './app-routing.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    AkitaNgDevtools.forRoot(),
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //AuthModule.forRoot(),
    AppRoutingModule,
    CoreModule.forRoot(),
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
