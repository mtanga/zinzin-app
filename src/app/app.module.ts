import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
//import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';
// other imports here...
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { HTTP } from '@ionic-native/http/ngx';
//import { HTTP } from '@awesome-cordova-plugins/http/ngx';
//import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

// imports...
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    IonicModule.forRoot(),
    AppRoutingModule,
    PdfViewerModule, // <- Add PdfViewerModule to imports
    HttpClientModule, // <--- add this
    TranslateModule.forRoot({ // <--- add this
      loader: { // <--- add this 
        provide: TranslateLoader, // <--- add this
        useFactory: (createTranslateLoader),  // <--- add this
        deps: [HttpClient] // <--- add this
      } // <--- add this
    }), // <--- add this
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar,
    SocialSharing,
    DocumentViewer,
   // PhotoViewer,
    VideoPlayer,
    HttpClient,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
