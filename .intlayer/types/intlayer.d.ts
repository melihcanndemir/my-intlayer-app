/* eslint-disable */
import { Locales } from 'intlayer';
import _WKrBxBtnBOVK5uLPAFSl from './app.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "app": typeof _WKrBxBtnBOVK5uLPAFSl;
  }

  type DeclaredLocales = Locales.ENGLISH | Locales.TURKISH;
  type RequiredLocales = Locales.ENGLISH | Locales.TURKISH;
  type ExtractedLocales = Extract<Locales, RequiredLocales>;
  type ExcludedLocales = Exclude<Locales, RequiredLocales>;
  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}