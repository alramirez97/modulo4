import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './estudiante/footer/footer.component';
import { HeaderComponent } from './estudiante/header/header.component';
import { ListComponent } from './estudiante/list/list.component';
import { NavbarComponent } from './estudiante/navbar/navbar.component';
import { RegistroComponent } from './estudiante/registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    ListComponent,
    RegistroComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
