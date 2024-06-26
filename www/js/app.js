var $ = Dom7;

const accessToken = 'pk.eyJ1IjoibW9uYWNhLWRlbW8iLCJhIjoiY2x1OWdkdDM4MDl4NzJqbnQ5bWYzNnU0cyJ9.rKHenJAPqHHv9rcGpuGYvw';
mapboxgl.accessToken = accessToken;

var device = Framework7.getDevice();
var app = new Framework7({
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element

  id: 'io.framework7.myapp', // App bundle ID
  // App store
  store: store,
  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});