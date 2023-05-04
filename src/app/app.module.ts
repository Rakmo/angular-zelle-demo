import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { RecipientsComponent } from './components/recipients/recipients.component';
import { RecipientItemComponent } from './components/recipient-item/recipient-item.component';
import { AddRecipientComponent } from './components/add-recipient/add-recipient.component';
import { HomeComponent } from './pages/home/home.component';
import { ZelleRecipientComponent } from './pages/zelle-recipient/zelle-recipient.component';
import { AnimationDemoComponent } from './pages/animation-demo/animation-demo.component';
import { AppTabComponent } from './components/app-tab/app-tab.component';
import { LoadingDemoComponent } from './components/loading-demo/loading-demo.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'recipients',
    component: RecipientsComponent,
  },
  {
    path: 'animation',
    component: AnimationDemoComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    RecipientsComponent,
    RecipientItemComponent,
    AddRecipientComponent,
    HomeComponent,
    ZelleRecipientComponent,
    AnimationDemoComponent,
    AppTabComponent,
    LoadingDemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
