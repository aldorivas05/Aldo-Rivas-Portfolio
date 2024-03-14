// store.js
import { configureStore } from '@reduxjs/toolkit'; // Importamos configureStore de Redux Toolkit
import translationReducer from '../reducers/translationReducer'; // Importamos nuestro reducer de traducción

// Importamos otros reductores si los tenemos
const store = configureStore({
    reducer: {
      language: translationReducer, // Registramos nuestro reducer de traducción
      // Registramos otros reductores si los tenemos
    },
    devTools: true, // Habilitamos las herramientas de desarrollo
  });
  
  export default store;
  
