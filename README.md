# Expo-React-Native-navigation App

> An Expo app for a react native application, but without expo router.

## To create an app, run these commands to start the app

```sh
npx create-expo-app@latest project-name

npx expo install @react-navigation/native @react-navigation/native-stack

npx expo install react-native-screens react-native-safe-area-context

npm install --save-dev electron

npm install --save-dev cross-env

npx expo export --platform web

npm run electron:build

npm run electron-build-web

npm uninstall expo-router

npm install --save-dev electron electron-builder
npm install --save-dev electron electron-builder concurrently wait-on

npx expo export --platform web
```

You can make sure that your `package.json` looks simular to this:

```json
{
  "name": "my-app",
  "main": "index.js",
  "version": "1.0.0",
  "scripts": {
    "start": "npx expo start",
    "reset-project": "node ./scripts/reset-project.js",
    "android": "npx nexpo start --android",
    "ios": "npx expo start --ios",
    "web": "npx expo start --web",
    "web:build": "npx expo export --platform web",
    "lint": "npx expo lint"
  },
  "dependencies": {
    "@expo/vector-icons": "^15.0.3",
    "@react-navigation/bottom-tabs": "^7.4.0",
    "@react-navigation/elements": "^2.6.3",
    "@react-navigation/native": "^7.1.22",
    "@react-navigation/native-stack": "^7.8.1",
    "expo": "~54.0.25",
    "expo-constants": "~18.0.10",
    "expo-font": "~14.0.9",
    "expo-haptics": "~15.0.7",
    "expo-image": "~3.0.10",
    "expo-linking": "~8.0.9",
    "expo-splash-screen": "~31.0.11",
    "expo-status-bar": "~3.0.8",
    "expo-symbols": "~1.0.7",
    "expo-system-ui": "~6.0.8",
    "expo-web-browser": "~15.0.9",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-native": "0.81.5",
    "react-native-gesture-handler": "~2.28.0",
    "react-native-reanimated": "~4.1.1",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.16.0",
    "react-native-web": "~0.21.0",
    "react-native-worklets": "0.5.1"
  },
  "devDependencies": {
    "@types/react": "~19.1.0",
    "concurrently": "^9.2.1",
    "cross-env": "^10.1.0",
    "electron": "^39.2.4",
    "electron-builder": "^26.0.12",
    "eslint": "^9.25.0",
    "eslint-config-expo": "~10.0.0",
    "typescript": "~5.9.2",
    "wait-on": "^9.0.3"
  },
  "private": true
}
```

# Add a Desktop App

To run the app, add the web dist folder to a seperate folder. Then init npm like this:

```sh
npm init -y
npm install electron --save-dev
```

and you can then start running the app by using `npm start`

Make sure that the `index.html` files are prefixed with a `.`. If not the app will not run in elevtron. In other words.

```js
<link rel="icon" href="/favicon.ico" />

<script
      src="/_expo/static/js/web index-e91cdd898aaf33b2ab467c2560f921e2.js"
    defer
></script>
```

||
\/

```js
<link rel="icon" href="./favicon.ico" />

 <script
      src="./_expo/static/js/web/index-e91cdd898aaf33b2ab467c2560f921e2.js"
    defer
    ></script>
```

Make sure to run `npm install` and to also have a `main.js` as well as a `preload.js` file, even if the preload file is empty.

The `main.js` file should look like this:

```js
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "dist/index.html"));

  // Optional: Open devtools
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
```

Also have this `package.json`:

```json
{
  "name": "my-desktop-app",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "electron .",
    "build": "electron-builder"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "electron": "^39.2.4",
    "electron-builder": "^24.0.0"
  },
  "build": {
    "appId": "com.myapp.desktop",
    "directories": {
      "buildResources": "assets"
    },
    "files": ["dist/**/*", "main.js", "package.json"]
  }
}
```
