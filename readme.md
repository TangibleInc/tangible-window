# Tangible Window

This is a collection of modules exported under the global variable `window.Tangible`.

It's for convenience of client-side JavaScript, so they can import from `@tangible/window` for shared dependencies.

It can also be used for alias a module, for example, from React to Preact.

## Enqueue

To use a JavaScript library registered by a Tangible module, pass its name as a dependency when enqueuing your script.

The following are currently availble:

- `tangible-codemirror`
- `tangible-preact`

For example:

```php
wp_enqueue_script('script-name', $url, [ 'tangible-codemirror' ], $version);
```

This ensures that the library is loaded before the script that uses it.

## Alias

Optionally, the module can be aliased when building.

In `tangible.config.js`, add the property `alias` to a task configuration. It's a key-value pair of the aliased module name and source.

```js
module.exports = {
  build: [
    {
      task: 'js',
      src: 'assets/src/example.js',
      dest: 'assets/build/example.min.js',
      watch: 'assets/src/**/*.js',
      alias: {
        '@tangible/codemirror': '@tangible/window/codemirror'
      }
    },
  ]
}
```

In the above example, the script can import `@tangible/codemirror` to access `window.Tangible.CodeMirror`.

## Preact

To use the Preact module, add an alias for `react`.

In `tangible.config.js`, define the property `alias` to a task configuration. It's a key-value pair of the aliased module name and source.

```js
module.exports = {
  build: [
    {
      task: 'js',
      src: 'assets/src/example.js',
      dest: 'assets/build/example.min.js',
      watch: 'assets/src/**/*.js',
      alias: {
        'react': '@tangible/window/preact',
        'react-dom': '@tangible/window/preact',
      }
    },
  ]
}
```

When the script imports `react` or `react-dom`, it will use the shared instance of `window.Tangible.Preact`.
