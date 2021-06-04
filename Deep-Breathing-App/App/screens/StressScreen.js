import React from 'react';
import{ 
    style,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
 } from 'react-native';

 export default class Profile extends React.Component {

    static navigationOptions = {
        title: 'StressScreen',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style = {styles.main} >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'blue',
        flex: 1,
    }
})

