import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-4f1ca","appId":"1:656347873280:web:9458390dbdf7b86a3298e5","storageBucket":"ring-of-fire-4f1ca.appspot.com","apiKey":"AIzaSyBYWFXFo1N8j9Wz8MuSHYsS36a_OpcElvc","authDomain":"ring-of-fire-4f1ca.firebaseapp.com","messagingSenderId":"656347873280"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
