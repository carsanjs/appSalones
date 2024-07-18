# Reanimated example
<p>
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

## 🚀 How to use
> `> npx create-expo-app "nombredelaapp" -e with-reanimated `

- Run `npm install`
- Run `npm run android` to try it out.

## 📝 Notes

- [`react-native-reanimated` docs](https://docs.swmansion.com/react-native-reanimated/)

# Step 1: Install the package
> npx expo install react-native-reanimated

# Step 2: Add Reanimated's babel plugin
- plugins: [
      'react-native-reanimated/plugin',
    ],

# Step 3: Clear Metro bundler cache (recommended)
> npx expo start -c

despues de haber hecho la configuracion anteriormente, pasamos a instalar tailwinds en react native
You will need to install both nativewind and tailwindcss
> npm i nativewind [link:](https://www.nativewind.dev/quick-starts/expo)

# setup tailwind csss
> npx tailwindcss init 
// tailwind.config.js
content: ["./App.{js,jsx,ts,tsx}", "./<Screens>/**/*.{js,jsx,ts,tsx}"],

# add the babel plugin
// babel.config.js
plugins: ["nativewind/babel"],

Start writing code! 🎉

cambiamos la version de tailwind
 > npm i tailwindcss@3.3.2

ahora asi, a disfrutar 🎉🎉

Ahora utilizaremos la navegation, para ellos instalamos las siguientes librerias
 React Navigation[link:](https://reactnavigation.org/)
 # Installation
> npm install @react-navigation/native
> 
 # Installing dependencies into an Expo managed project
 > npx expo install react-native-screens react-native-safe-area-context

 # Installing the native stack navigator library
 > npm install @react-navigation/native-stack
 
 para usar los checkbox que normalmente se usa, es deprecable, ahora la mejor manera de utilizarlo es instalar la libreria de react-native-community/checkbox

 > npm install @react-native-community/checkbox --save
  >> npm uninstall @react-native-community/checkbox --save //desistalamos
 si lo anterior no funciona, utilizar directamente checkbox de expo asi.
  > npx expo install expo-checkbox [link:](https://docs.expo.dev/versions/latest/sdk/checkbox/)


utilizaremos una dependencia para scrollbar 
utilizaremos las constantes de expo
npx expo install expo-constants

ahora la anterior es una buena opcion pero en mi caso utilizare
npx expo install react-native-safe-area-context

para el formulario o gancho utilizaremos Validación de formularios simple con React Hook Form.
# react-hook-form [link:](https://react-hook-form.com/)
> npx install react-hook-form

tambien se utilizara Bcrypt es una funcion de hash de contraseña 
> npm i bcrypt[link:](https://www.npmjs.com/package/bcrypt)

para que react native soporte la libreria bycrpt instalamos bcryptjs [link:](tps://www.npmjs.com/package/react-native-bcrypt)

ademas utilizaremos crypto es un modulo criptografico que ayuda a cifrar y descifrar o codificar cualquier datos.

para soporta mas la seguridad utilizaremos la libreria yup, para complementarla con react hook form, 
llevando asi las validaciones mas segura utilizando modelos de schemas.

> npm i yup [linl:](https://www.npmjs.com/package/yup)

si no quieres utilizar yup, tambien existen otras alternativas

- Zod
- Superstruct
- Joi
- Vest
- Class Validator
- io-ts
- Nope
- computed-types
- typanion
- Ajv
-[] TypeBox
  - With ValueCheck
  - With TypeCompiler
- ArkType
- Valibot
- TypeSchema
- effect-ts
- VineJS
- fluentvalidation-ts

pero para añardilo con cualquiera de lo anterior toca utilizat performant y esto lo logramos instalando
> npm i @hookform/resolvers

intalamos axios
> npm i axios

instalamos react-native-dotenv
> npm i react-native-dotenv [link:](https://www.npmjs.com/package/react-native-dotenv)

configuramos en babel.config.js
 ['module:react-native-dotenv']
 
instalamos las constants de expo-constants
> npx expo install expo-constants [link:](https://docs.expo.dev/versions/latest/sdk/constants/)

para utilizar icons instalamos svg
> npx expo install react-native-svg [link:](https://docs.expo.dev/versions/latest/sdk/svg/)

vamos a usar la libreria de tabs que nos permite usar un **drawer** para ello, ejecutar el siguiente comando
> npm install @react-navigation/bottom-tabs [link:](https://reactnavigation.org/docs/bottom-tab-navigator/)

instalamos los gesture handlers
> npx expo install react-native-gesture-handler [link:](https://docs.expo.dev/versions/latest/sdk/gesture-handler/)

instalamos reac-native-vector-icons, para utilizar muchos icons de la comunidad de expo
> npx expo install react-native-vector-icons [link:](https://github.com/oblador/react-native-vector-icons)
si no instalamos lo siguiente > npm i @expo/vector-icons

instalamos la libreria drawer de react native
> npm install @react-navigation/drawer


