import React, { Component, PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Button, Navigator,
  StatusBar,
  TouchableHighlight,

  FlatList, Image, Dimensions, ToolbarAndroid,
} from 'react-native'

import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
import * as Animatable from 'react-native-animatable'

import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/MaterialIcons'

const MIN_HEIGHT = 80
const MAX_HEIGHT = 240

export default class Contacto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parent:props.parent,
            }
        }
    render() {
        return (
            <View style={{flex: 1, marginTop: 0 }}>
                <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0.3)" barStyle="light-content" />
                <ToolbarAndroid
                    actions={[
                        {title: '', icon: require('./res/edit.png'), show: 'always'},
                        {title: 'Llamar', icon: require('./res/phone.png'), show: 'never'}
                        ]}
                    overflowIcon={require('./res/more.png')}
                    navIcon={require('./res/arrow-left.png')}
                    onActionSelected={this._onActionSelected}
                    onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
                    style={{backgroundColor: 'rgba(0, 0, 0, 0)', height: 56, marginTop:24, elevation:1}} />

                <View style={{flex: 1, marginTop: -80 }}>
                    <HeaderImageScrollView
                          maxHeight={MAX_HEIGHT}
                          minHeight={MIN_HEIGHT}
                          maxOverlayOpacity={1}
                          minOverlayOpacity={0.2}
                          fadeOutForeground
                          overlayColor="#4556b8"
                          renderHeader={() => (
                              <View>
                                <Image source={require('./res/person.png')} style={styles.image} />
                              </View>
                            )}

                          renderForeground={() => (
                              <View style={styles.titleContainer}>
                                <Text style={styles.imageTitle}>Ali Connors rfg</Text>
                              </View>
                            )}
                          >

                          <TriggeringView style={styles.section} >
                                <View style={{paddingLeft: 20, backgroundColor: '#fafafa', flex:1, flexDirection:'column'}}>
                                    <View style={styles.row}>
                                        <Icon name="phone" style={styles.iconLeft}/>
                                        <View style={{flex:1}}>
                                            <Text style={styles.rowTitle}>(650) 555-1234</Text>
                                            <Text>Mobile</Text>
                                        </View>
                                        <Icon name="chat" style={styles.rightIcon}/>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.iconLeft}></View>
                                        <View style={{flex:1}}>
                                            <Text style={styles.rowTitle}>(323) 555-6789</Text>
                                            <Text>Work</Text>
                                        </View>
                                        <Icon name="chat" style={styles.rightIcon}/>
                                    </View>

                                    <View style={styles.row}>
                                        <View style={styles.iconLeft}></View>
                                        <View style={{flex:1, borderTopWidth:1, borderTopColor:'#d2d2d2'}}></View>
                                    </View>

                                    <View style={styles.row}>
                                        <Icon name="email" style={styles.iconLeft}/>
                                        <View style={{flex:1}}>
                                            <Text style={styles.rowTitle}>aliconnors@example.com</Text>
                                            <Text>Personal</Text>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.iconLeft}></View>
                                        <View style={{flex:1}}>
                                            <Text style={styles.rowTitle}>aliconnors@work.com</Text>
                                            <Text>Work</Text>
                                        </View>

                                    </View>

                                    <View style={styles.row}>
                                        <View style={styles.iconLeft}></View>
                                        <View style={{flex:1, borderTopWidth:1, borderTopColor:'#d2d2d2'}}></View>
                                    </View>

                                    <View style={styles.row}>
                                        <Icon name="place" style={styles.iconLeft}/>
                                        <View style={{flex:1}}>
                                            <Text style={styles.rowTitle}>HB, 5, SS A, Lavapies-Madrid</Text>
                                            <Text>Personal</Text>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.iconLeft}></View>
                                        <View style={{flex:1}}>
                                            <Text style={styles.rowTitle}>P, 15, Madrid</Text>
                                            <Text>Work</Text>
                                        </View>

                                    </View>
                                    <View style={{height:100}}>
                                    </View>
                                </View>
                          </TriggeringView>
                    </HeaderImageScrollView>
                </View>
                <ActionButton icon={<Icon name="star" style={{fontSize: 22, height: 22, color: 'white',}}/>} buttonColor="#fd4482" title="All Tasks" onPress={() => { console.log("hi")}} >

                </ActionButton>
            </View>
            )
        }
    // render(){
    //     return (<View> <Text> Contacto</Text> </View> )
    // }
    onActionSelected(position) {
        if (position === 0) { // index of 'Settings'
            showSettings()
            }
        }
    }

const styles = StyleSheet.create({
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',

        },
    title: {
        fontSize: 20,
        },
    name: {
        fontWeight: 'bold',
        },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        },
    sectionContent: {
        fontSize: 16,
        textAlign: 'justify',
        },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft:30,
        paddingTop:150,
        },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 35,
        },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        opacity: 0,
        },
    navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
        },
    rightIcon:{
        fontSize: 26, width:60, color: '#3d55b5', alignSelf:'flex-start',
    },

    sectionLarge: {
        height: 600,
        },
    row:{flex: 1, flexDirection: 'row', marginTop:30},
    rowTitle:{fontSize:20, color:'black'},
    iconLeft:{fontSize: 26, width:50, color: '#3d55b5', alignSelf:'center', }

    })
