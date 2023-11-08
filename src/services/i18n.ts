import { dictionary, locale, _ } from 'svelte-i18n';

import en from '../i18n/en.json';
import es from '../i18n/es.json';

function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
  dictionary.set({
    en,
    es
  });
  locale.set(_locale);
}
export { _ as translate, setupI18n };
