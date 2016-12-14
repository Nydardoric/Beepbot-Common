import * as util from "util";
import { langFiles } from "beepbot-lang";

/**
 * Get the translation for the key given and the locale.
 * If the locale given does not have the key the default of en_US is used.
 */
function getTranslation(locale: string, key: string): string {
  if (langFiles[locale] == null || langFiles[locale][key] == null) {
    return langFiles["en_US"][key];
  }
  return langFiles[locale][key];
}

/**
 * Translate a string using the locale & key along with the arguments.
 */
function translate(locale: string, key: string, ...optArgs: any[]): string {
  let localised = getTranslation(locale, key);
  if (/(%s|%d)/gi.test(localised)) {
    let args: any[] = Array.prototype.slice.call(arguments).slice(2);
    args.unshift(localised);
    return util.format.apply(null, args);
  }
  return localised;
}

/**
 * Format a string message replacing the util args with the ones supplied in the arguments.
 */
function format(str: string, ...optArgs: any[]): string {
  if (/(%s|%d)/gi.test(str)) {
    let args = Array.prototype.slice.call(arguments);
    return util.format.apply(null, args);
  }
  return str;
}

export const Locale = {
  get: getTranslation,
  translate: translate,
  format: format
};