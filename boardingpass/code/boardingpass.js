import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#2e2e2e" barStyle="light-content"/>
                <View style={styles.card}>
                    <View style={[styles.section, styles.brown]}>
                        <Image style={styles.brownImage} source={require('./res/bg.png')}>
                            <Text style={styles.labelOnBrownCell}>Where do you like to go?</Text>
                        </Image>
                    </View>
                    <View style={[styles.section, styles.white]}>
                        <View style={styles.row}>
                            <View style={[styles.cell, {backgroundColor:'#fbfbf9'}]}>
                                <Text style={styles.label}>From</Text>
                                <Text style={styles.data}>EGYPT</Text>
                                <Text style={styles.label}>NAG</Text>
                            </View>
                            <View style={[styles.cell, {backgroundColor:'#f3f4f0'}]}>
                                <Text style={styles.label}>To</Text>
                                <Text style={styles.data}>INDIA</Text>
                                <Text style={styles.label}>ATZ</Text>
                            </View>
                        </View>

                        <View style={[styles.row, {backgroundColor:'#f7f7f5'}]}>
                            <View style={styles.cell}>
                                <Text style={styles.label}>Traveller</Text>
                                <Text style={styles.data2}>1 Adult</Text>
                            </View>
                            <View style={styles.cell}>
                                <Text style={styles.label}>Class</Text>
                                <Text style={styles.data2}>Economy</Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={[styles.cell, {borderBottomLeftRadius:20, borderBottomRightRadius:20,} ]}>
                                <Text style={styles.labelSmall}>Connecting 2 or more stops</Text>
                                <Text style={styles.labelOrange}>AIR INDIA, EMIRATES, EGYPT AIR</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.roundButton}>
                        <Image source={require('./res/plane.png')} style={{width:28, height:28}}/>
                    </TouchableOpacity>
                </View>
            </View>
            )
        }
    }

var w=Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2e2e2e',
        flex: 1,

        paddingTop:26,
        paddingLeft:10, paddingRight:10,
        paddingBottom:56,
        },
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,

        flex: 1,
        flexDirection: 'column',
        },
    section:{
        flex:1,
        flexDirection: 'column',
        width:'100%',
        },
    roundButton:{
        backgroundColor:'#e35918',

        alignItems:'center', justifyContent:'center',
        width:55, height:55,
        position:'absolute',
        borderRadius:100,

        right:30,

        shadowColor:'#63403F',
        shadowOffset: {width: 1, height:1},
        shadowRadius:1,
        shadowOpacity: .6,
        },
    brown:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        overflow: 'hidden',
        },
    brownImage:{
        resizeMode:'cover',
        backgroundColor:'transparent',
        flex:1,
        width:w.width-20,
        },
    white:{
        backgroundColor:'#f7f7f5',
        borderBottomLeftRadius:20, borderBottomRightRadius:20,
        },
    labelOnBrownCell:{
        fontSize:20, width:200, lineHeight:25,
        color:'white', fontWeight:'600',
        backgroundColor:'transparent',
        marginLeft:20, marginTop:35,
        position: 'absolute',

        letterSpacing:1,
        textShadowColor:'#2c2c2c',
        textShadowOffset: {width: 1, height:2},
        textShadowRadius:1,
        },
    row:{
        flex: 1,
        flexDirection: 'row',
        },
    cell:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#f7f7f5',
        padding:20,
        },
    label: {
        fontSize: 12,
        textAlign: 'left',
        color:'#a0a09e',

        },

    data: {
        fontSize: 24,
        textAlign: 'left',
        },
    data2: {
        fontSize: 20,
        textAlign: 'left',
        },

    labelSmall:{
        fontSize: 12,
        color:'gray',
        paddingTop:5,
        },
    labelOrange: {
        fontSize: 12,
        fontWeight:'bold',
        textAlign: 'left',
        color:'#fb5d22',
        },
    })

AppRegistry.registerComponent('BoardingPass', () => BoardingPass)
