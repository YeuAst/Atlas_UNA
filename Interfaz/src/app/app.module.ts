import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PersonaComponent],
  imports: [BrowserModule, FormsModule,AppRoutingModule,HttpClientModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
