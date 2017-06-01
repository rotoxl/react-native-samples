## Alli Connors' Contact Screen
### target && result
![Target](https://raw.githubusercontent.com/rotoxl/react-native-samples/master/screenshots/aliconnors-target.jpg "Target") ![Result](https://github.com/rotoxl/react-native-samples/blob/master/screenshots/aliconnors-target.gif?raw=true "Result")

### create project && add stuff

```shell
react-native init AwesomeProject
cd AwesomeProject

npm i react-native-action-button --save
npm install react-native-vector-icons --save //check required manual step at https://github.com/oblador/react-native-vector-icons#installation
npm install react-native-animatable --save
npm install react-native-image-header-scroll-view --save

react-native run-android
```

### Todo
* FAB position (react-native-action-button does not seem to support inline buttons)
* Check metrics & ratio
 * 	https://material.io/guidelines/layout/metrics-keylines.html#metrics-keylines-keylines-spacing
 *  https://material.io/guidelines/layout/metrics-keylines.html#metrics-keylines-ratio-keylines