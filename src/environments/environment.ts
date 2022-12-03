// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  wordpress: {
    api_url: 'https://zinzinmag.com/wp-json/wp/v2/',
    auth_url: 'https://zinzinmag.com/wp-json/jwt-auth/v1/token'

  },
  firebase:{
    apiKey: "AIzaSyDhg5NVrJWm1FbtN2NSWvP11uHc8mxPIOk",
    authDomain: "zinzin-magazine.firebaseapp.com",
    projectId: "zinzin-magazine",
    storageBucket: "zinzin-magazine.appspot.com",
    messagingSenderId: "858160845076",
    appId: "1:858160845076:web:6257ae78c3af4bc6c4f201",
    measurementId: "G-VQX5GE3TKH"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
