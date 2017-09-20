/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';

import Orientation from 'react-native-orientation-locker';

export default class Memes extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Memes',
            headerTintColor: "#000000",
        };
    };

    constructor(props: any) {
        super(props);
        Orientation.lockToPortrait();
    }

    render() {
        let newPicView;
        switch (this.props.navigation.state.params.className) {
            case "11":
                newPicView = (
                    <View style={styles.logoContainer}>
                        <Image resizeMode='contain' style={styles.pic} source={require('./pics/Comp11.jpg')}/>
                    </View>
                );
                break;
            case "15":
                newPicView = (<View style={styles.logoContainer}>
                    <Image resizeMode='contain' style={styles.pic} source={require('./pics/Comp15.jpg')}/>
                </View>);
                break;
            case "40":
                newPicView = (<View style={styles.logoContainer}>
                    <Image resizeMode='contain' style={styles.pic} source={require('./pics/Comp40.jpg')}/>
                </View>);
                break;
            case "105":
                newPicView = (<View style={styles.logoContainer}>
                    <Image resizeMode='contain' style={styles.pic} source={require('./pics/Comp105.jpg')}/>
                </View>);
                break;
            case "160":
                newPicView = (<View style={styles.logoContainer}>
                    <Image resizeMode='contain' style={styles.pic} source={require('./pics/Comp160.jpg')}/>
                </View>);
                break;
            case "170":
                newPicView = (<View style={styles.logoContainer}>
                    <Image resizeMode='contain' style={styles.pic} source={require('./pics/Comp170.jpg')}/>
                </View>);
                break;
            case "20":
                newPicView = (
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder={"Input Here"}
                            placeholderTextColor={'rgba(0,0,0,0.8)'}
                            returnKeyType='go'
                        />
                        <View style={styles.littleMenuContainer}>
                            <TouchableOpacity onPress={() => {
                                alert("Never Ever Trust User's input!")
                            }}>
                                <Text style={styles.menuText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
                break;
            default:
                break;
        }

        return (
            <View style={styles.container}>
                <StatusBar hidden={false} />
                <View>{newPicView}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pic: {
        width: 300,
        height:300,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 15
    },
    inputContainer: {
        flex: 1,
    },
    littleMenuContainer: {
        margin: 10,
        backgroundColor: 'rgb(244, 176, 66)'
    },
    menuText: {
        textAlign: 'center',
        fontSize: 20,
    },
});


