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
        title: 'FocusScreen',
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
        backgroundColor: '#049A64',
        flex: 1,
    }
})

