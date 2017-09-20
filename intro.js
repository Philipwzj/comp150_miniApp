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
    TouchableOpacity
} from 'react-native';

import Orientation from 'react-native-orientation-locker';


export default class Intro extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props: any) {
        super(props);
        Orientation.lockToPortrait();
    }

    selectionPressed = (className) => {
        this.props.navigation.navigate('Memes', {
            className: className,
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.introTextContainer}>
                    <Text style={styles.introText}>After you take...</Text>
                </View>
                <ScrollView style={styles.optionContainer}>
                    <View style={styles.littleMenuContainer}>
                        <TouchableOpacity onPress={() => {
                            this.selectionPressed('11')
                        }}>
                            <Text style={styles.menuText}>Comp 11</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.littleMenuContainer}>
                        <TouchableOpacity onPress={() => {
                            this.selectionPressed('15')
                        }}>
                            <Text style={styles.menuText}>Comp 15</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.littleMenuContainer}>
                        <TouchableOpacity onPress={() => {
                            this.selectionPressed('20')
                        }}>
                            <Text style={styles.menuText}>Comp 20</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.littleMenuContainer}>
                        <TouchableOpacity onPress={() => {
                            this.selectionPressed('40')
                        }}>
                            <Text style={styles.menuText}>Comp 40</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.littleMenuContainer}>
                        <TouchableOpacity onPress={() => {
                            this.selectionPressed('105')
                        }}>
                            <Text style={styles.menuText}>Comp 105</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.littleMenuContainer}>
                        <TouchableOpacity onPress={() => {
                            this.selectionPressed('160')
                        }}>
                            <Text style={styles.menuText}>Comp 160</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.littleMenuContainer}>
                        <TouchableOpacity onPress={() => {
                            this.selectionPressed('170')
                        }}>
                            <Text style={styles.menuText}>Comp 170</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    introTextContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    introText: {
        fontSize: 20,
    },
    optionContainer: {
        flex: 0.85
    },
    menuText: {
        textAlign: 'center',
        fontSize: 20,
    },
    littleMenuContainer: {
        margin: 10,
        backgroundColor: 'rgb(244, 176, 66)'
    },
});


