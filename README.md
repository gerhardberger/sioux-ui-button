# Sioux UIButton

``` batch
npm install sioux-ui-button
```

## Overview

The `UIButton` class lets you create buttons with some styling and with touch events.

#### Inheriths from:
- sioux-ui

html:
``` html
<button class="foo">Click me!</button>
```

javascript:
``` js
var UIButton = require('sioux-ui-button');
var button = new UIButton(document.querySelector('.foo'));

button
.on('tap', function (event) {
  console.log('Tapped!');
});
```