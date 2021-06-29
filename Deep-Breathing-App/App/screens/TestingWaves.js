import React from 'react';
//import SineWaves from 'sine-waves';
//import Canvas from 'react-native-canvas'
import {
    style,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

// @ts-ignore
import Wave from 'react-native-waveview';

import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

/* Use this if you are using Expo
import * as Svg from 'react-native-svg';
const { Circle, Rect } = Svg;
*/


export default class SvgExample extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('value'),
        };
    };
    render() {
        return (

            <View style={_styles.container} >
                <TouchableHighlight onPress={() => {
                    // Stop Animation
                    this._waveRect && this._waveRect.stopAnim();

                    // set water baseline height
                    this._waveRect && this._waveRect.setWaterHeight(70);

                    // reset wave effect
                    this._waveRect && this._waveRect.setWaveParams([
                        { A: 10, T: 180, fill: '#FF9F2E' },
                        { A: 15, T: 140, fill: '#F08200' },
                        { A: 20, T: 100, fill: '#B36100' },
                    ]);
                }}>
                    <Wave
                        ref={ref => this._waveRect = ref}
                        style={_styles.wave}
                        H={30}
                        waveParams={[
                            { A: 10, T: 180, fill: '#62c2ff' },
                            { A: 15, T: 140, fill: '#0087dc' },
                            { A: 20, T: 100, fill: '#1aa7ff' },
                        ]}
                        animated={true}
                    />
                </TouchableHighlight>
            </View>
            //  <View style={_styles.container} >
            //     <Wave
            //         style={_styles.waveBall}
            //         H={70}
            //         waveParams={[
            //             {A: 10, T: 180, fill: '#62c2ff'},
            //             {A: 15, T: 140, fill: '#0087dc'},
            //             {A: 20, T: 100, fill: '#1aa7ff'},
            //         ]}
            //         animated={true}
            //     />
            // </View> 


        );
    }
}

// export default class Profile extends React.Component {

//     static navigationOptions = ({navigation}) => {
//         return {
//             title: navigation.getParam('value'),
//         };
//     };
//     // handleCanvas = (canvas) => {
//     //     const ctx = canvas.getContext('2d');
//     //     ctx.fillStyle = 'purple';
//     //     ctx.fillRect(0,0,100,100);
//     // }

//     render() {
//         const { navigate, state } = this.props.navigation;

//         return (
//             // <Canvas ref={this.handleCanvas}></Canvas>
//             <View style = {styles.main} >
//                 <Text style = {styles.text} onPress = { () => navigate('MainScreen') }>Return to main</Text>
//                 <Text style = {styles.text}>Stress Level: {state.params.value}</Text>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     main: {
//         backgroundColor: 'white',
//         flex: 1,
//     },
//     text:{
//         top: 250,
//         alignSelf: 'center',
//         fontSize: 20,
//         fontWeight: 'bold'
//     },
// })
const _styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
    },
    wave: {
        width: 100,
        aspectRatio: 1,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    waveBall: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 50,
        overflow: 'hidden',
    }
});