## Alli Connors' Contact Screen
### target & result
![Target](https://raw.githubusercontent.com/rotoxl/react-native-samples/master/aliconnors/screenshots/aliconnors-target.jpg "Target") ![Result](https://raw.githubusercontent.com/rotoxl/react-native-samples/master/aliconnors/screenshots/aliconnors-result.gif?raw=true "Result")

### create project & add stuff

1. Create project

```shell
react-native init AwesomeProject
cd AwesomeProject

npm i react-native-action-button --save
npm install react-native-vector-icons --save
npm install react-native-animatable --save
npm install react-native-image-header-scroll-view --save
```
2. Complete ```react-native-vector-icons``` installation. Edit ```android/app/build.gradle``` (NOT ```android/build.gradle```) and add the following (more info at https://github.com/oblador/react-native-vector-icons#installation):

```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

3. Copy ```aliconnors.js``` && ```res``` folder

4. Edit ```index.android.js``` as follows:

```javascript
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Contacto from "./aliconnors"

export default class AwesomeProject extends Component {
  render() {
    return (
      <Contacto />
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
```

5. Run

```shell
react-native run-android

```
### problems you may face
* Weird icons? Double check the extra step required by react-native-vector-icons (https://github.com/oblador/react-native-vector-icons#installation)

### todo
* Migrate existing icon-images to react-native-vector-icons
* FAB position (react-native-action-button does not seem to support inline buttons)
* Check metrics & ratio
  *	https://material.io/guidelines/layout/metrics-keylines.html#metrics-keylines-keylines-spacing
  * https://material.io/guidelines/layout/metrics-keylines.html#metrics-keylines-ratio-keylines
