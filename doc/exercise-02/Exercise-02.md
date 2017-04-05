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


## Accelerators and Global Shortcuts

### Accelerators

Accelerators are strings which are used to define keyboard shortcuts. They consist of a combination of *modifiers* and *key codes*. See [electron API](https://electron.atom.io/docs/api/accelerator/) for a full list of *modifiers* and *key codes*.

*Modifiers*:

- `Command`/`Cmd`
- `Control`/`Ctrl`
- `CommandOrControl`/`CmdOrCtrl`
- `Alt`
- `Option`
- `AltGr`
- `Shift`
- `Super`

*Key Codes*:

- `0` to `9`
- `A` to `Z`
- `F1` to `F24`
- Punctuations like `~`, `!`, `@`, `#`, `$`, ...
- `Plus`
- `Space`
- `Tab`
- `Backspace`
- `Delete`
- `Insert`
- `Return`/`Enter`
- `Up`, `Down`, ...
- ...

### Global Shortcuts

To define a global shortcut first import the `globalShortcut`-module: `const {globalShortcut} = require('electron')`

Then register the shortcut after the `ready` event of the application:
```JavaScript
app.on('ready', () => {
  // register a shortcut defined by an accelerator.
  globalShortcut.register('accelerator', () => {
    // do something
  })
})
```
