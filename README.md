## tram-blueprints
📘 templates for use with blueprint-templates plugin

## installation and usage
_These instructions are for visual studio code, and depend on a specific vs code plugin_

To use these templates, install this dependency in your project (it is included in all projects generated with `tram-one-express`).

```
npm i tram-blueprints
```

Then install Blueprint from the vs code marketplace
https://marketplace.visualstudio.com/items?itemName=teamchilla.blueprint

Finally, include the tram-blueprints in your settings.json as a path to find blueprints.

```
"blueprint.templatesPath": [
  "./node_modules/tram-blueprints/templates"
]
```

Now you should see `tram-component` as an option in vscode when opening the context menu and selecting `New File from Template`.
