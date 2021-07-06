import React, {Component, useRef} from 'react';
// import Animated, { Easing, withTiming, useSharedValue,} from 'react-native-reanimated';
import{ 
    style,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Button,
    alert,
    Animated,
    Easing,
    timing,
 } from 'react-native';

export default class Profile extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('value'),
        };
    };

    render() {
        const { navigate, state } = this.props.navigation;

        return (
            <View style = {styles.main} >
                <Text style = {styles.text} onPress = { () => navigate('MainScreen') }>Return to main</Text>
                <Text style = {styles.text}>Stress Level: {state.params.value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1,
    },
    text: {
        top: 250,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
})
