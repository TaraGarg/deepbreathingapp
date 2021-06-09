import React from 'react';
import SineWaves from 'sine-waves';
import{ 
    style,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
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
    text:{
        top: 250,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
