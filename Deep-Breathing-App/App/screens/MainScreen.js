import React, { Component } from 'react';
import{ 
    style,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Button,
} from 'react-native';


export default class MainScreen extends React.Component {

    static naviagtionOptions = {
        title: 'Home',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style = {styles.mainStyle} >
                <View style = {styles.text }>
                    <Text>Main Page</Text>
                </View>
                <View style = {styles.buttonsBack }>
                    <TouchableHighlight onPress = { () => navigate('PanicScreen') }>
                        <View style = {styles.buttonPanic}>
                            <Text style = {styles.buttonText}>Panic Button</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigate('FocusScreen')}>
                        <View style = {styles.buttonFocus}>
                            <Text style = {styles.buttonText}>Focus Button</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigate('StressScreen')}>
                        <View style = {styles.buttonStress}>
                            <Text style = {styles.buttonText}>Stress Button</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }   
}


const styles = StyleSheet.create({
    mainStyle: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
    },
    text: {
        top: 100,
    },
    buttonsBack: {
        width: '100%',
        height: '75%',
        backgroundColor: 'black',
        top: '25%',
        alignItems: 'center',
        justifyContent: "space-evenly",
    },
    buttonPanic: {
        backgroundColor: 'red',
        width: 300,
        height: 100,
        alignItems: 'center',
    },
    buttonFocus: {
        backgroundColor: 'yellow',
        width: 300,
        height: 100,
        alignItems: 'center',
    },
    buttonStress: {
        backgroundColor: 'blue',
        width: 300,
        height: 100,
        alignItems: 'center',
    },
    buttonText: {
        top: '50%',
    },
})
