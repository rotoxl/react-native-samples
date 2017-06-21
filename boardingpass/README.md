## Alli Connors' Contact Screen
### target & result
![Target](https://raw.githubusercontent.com/rotoxl/react-native-samples/master/boardingpass/screenshots/boardingPass-target.jpg "Target") ![Result](https://raw.githubusercontent.com/rotoxl/react-native-samples/master/boardingpass/screenshots/boardingPass-result.png "Result")

### create project & add stuff

1. Create project

```shell
react-native init AwesomeProject
cd AwesomeProject
```

3. Copy ```boardingpass.js``` && ```res``` folder

4. Edit ```index.ios.js``` as follows:

```javascript
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Card from './boardingpass'
export default class AwesomeProject extends Component {
  render() {
    return (
		<Card />
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
```

5. Run

```shell
react-native run-ios

```
### problems you may face

### todo
