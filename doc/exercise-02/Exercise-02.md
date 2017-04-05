# Exercise-02 - Electron modules and ES6 #

## Task assignment
- Cookies, Session -> Sebastian
- Dialog -> Jens
- Locales -> Benjamin
- GlobalShortcut+Accelerator -> Philipp

## Cookies

## Session

## Dialog

## Locales

With `app.getLocale()` you can get the users locale-setting from within the main process. 
Possible values are i.e. `de`, `de-DE`, `en`, `en-US`, ...

For more possible values, have a look at the [official documentation for locales](https://github.com/electron/electron/blob/master/docs/api/locales.md).

These settings do reflect the users preferences for language, number and date formatting and so on.

There is still an open issue [Add API to set locale of current app #5649](https://github.com/electron/electron/issues/5649), which means that setting the locale is not supported by the API yet.


