// reducers/translationReducer.js
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';

const initialState = {
    language: 'en',
    translations: {
        en: enTranslations,
        es: esTranslations,
    },
};

const translationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.payload,
            };
        case 'FETCH_TRANSLATIONS':
            return {
                ...state,
                translations: {
                    ...state.translations,
                    en: action.payload.en,
                    es: action.payload.es,
                },
            };
        default:
            return state;
    }
};

export default translationReducer;
