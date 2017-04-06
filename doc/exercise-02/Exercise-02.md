# Exercise-02 - Electron modules and ES6 #

## Task assignment
- Cookies, Session -> Sebastian
- Dialog -> Jens
- Locales -> Benjamin
- GlobalShortcut+Accelerator -> Philipp

## Cookies and Session

Electron allows the access to browser sessions, cookies, proxy settings etc. via the `session` module. The current session can be accessed by: `window.webContents.session`.
The default session of the application can be accessed by: `Session.defaultSession`.
This session can be used to call methods like `getUserAgent`, `setProxy`, `setDownloadPath`.

Cookies can be accessed by `Session.cookies`

`Cookies.get(filter, callback);`

The `filter` is a JSON object consisting of the following properties: `url`, `name`, `domain`, `path`, `secure`, `session`.

In this case `session` allows the differentiation between session and persistent cookies.
The callback possibly consists of `error`s  and an array of `cookie` objects, which can be used to read a `name` and a `value`.
To set a cookie `Cookies.set(details, callback)` is used.
The `detail` object can consist of the following properties:
`url` (mandatory), `name`, `value`, `domain`, `path`, `secure`, `httpOnly`, `expirationDate`

The `expirationDate` property allows to set the cookie either as a session cookie (by omitting parameters) or as a persistent cookie (the parameter is a UNIX timestamp).
The `Callback` consists of possible `error`s.


## Dialog
With the dialog module it is possible to display native system dialogs for opening files, saving files and several kinds of messageboxes. dialog is opened from electron's main process, to use a dialog object in a renderer process, you have to use it with remote.

### Methods of dialog module:
dialog.showOpenDialog([browserWindow, ]options[, callback])
- three different types: openFile, openDirectory, multiSelections
- with filters it is possible to provide file extension filters in the dialog

dialog.showSaveDialog([browserWindow, ]options[, callback])

dialog.showMessageBox([browserWindow, ]options[, callback])
- with `type` different icons can be choosen or with `icon` an own icon can be used.

dialog.showErrorBox(title, content)
- can be called safely before the ready event the app module emits
- usually used to report errors in early stage of startup

dialog.showCertificateTrustDialog([browserWindow, ]options, callback) macOS


Note: The module name `dialog` is a bit confusing because you can only use the system file open/save dialogs and messageboxes, but cannot create "dialogs" with text fields and other things.
For more information, see [the official module documentation](https://github.com/electron/electron/blob/master/docs/api/dialog.md).

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

Modifiers and accelerators are combined by the `+` sign.

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
