import React from 'react';
import{ 
    AppRegistry,
    style,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Animated
 } from 'react-native';
 import{ Slider } from 'react-native-elements';

 export default class Profile extends React.Component {

    static navigationOptions = {
        title: 'StressScreen',
    };

    state = {
        value: 1
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style = {styles.main} >
                <View style = {styles.title}>
                    <Text style = {styles.titleText} >How Stressed Are You Feeling Today?</Text>
                </View>
                <View style={ styles.container}>
                    <Slider
                        value={this.state.value}
                        onValueChange={(value) => this.setState({ value })}
                        maximumValue = {10}
                        minimumValue = {1}
                        thumbStyle ={styles.thumbStyle}
                        thumbTintColor = '#Dc6ee5'
                    />
                    <Text style = {styles.decisionStyle} >Stress Level: {Math.round(this.state.value)}</Text>
                </View>
                <View style = {styles.continueButton}>
                    <Text style = { styles.continueText } onPress = { () => navigate('TestingWaves') }>Continue</Text>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    main: {
        backgroundColor: '#53D396',
        flex: 1,
    },
    title:{
        top: '25%',
        alignSelf: 'center'
    },
    titleText:{
        fontSize: 25,
        fontStyle: 'arial',
        fontWeight: 'bold',
        letterSpacing: 0,
    },
    container: {
        flex: 1,
        width: '90%',
        left: '5%',
        alignItems: "stretch",
        justifyContent: "center"
    },
    thumbStyle:{
        color: 'white'
    },
    decisionStyle:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    continueButton:{
        height: 75,
        width: 150,
        bottom: '5%',
        justifyContent: 'center',
        backgroundColor: '#Dc6ee5',
        alignSelf: 'center',
        paddingTop:20,
        paddingBottom:20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#53D396'
    },
    continueText:{
        fontSize: 20,
        alignSelf: 'center',
    },
});

AppRegistry.registerComponent("SliderExample", () => SliderExample);
