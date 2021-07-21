import 'react-native-gesture-handler'
import 'react-navigation'
import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    ScrollView,
    AppRegistry,
    Animated,
    Linking,
    Image,
    ImageBackground,
    Picker,
    Button,
    Dimensions
} from 'react-native';
import { Slider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Abel_400Regular } from '@expo-google-fonts/abel';
import { Easing, useAnimatedStyle, withSequence, withTiming } from 'react-native-reanimated';
// import{ createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import MainScreen from './App/screens/MainScreen'
// import PanicScreen from './App/screens/PanicScreen'
// import FocusScreen from './App/screens/FocusScreen'
// import StressScreen from './App/screens/StressScreen'
// import TestingWaves from './App/screens/TestingWaves'
// import InformationScreen from './App/screens/InformationScreen'
// import ResourcesScreen from './App/screens/ResourcesScreen'

// const Navigator = createStackNavigator({
//   MainScreen: {screen: MainScreen},
//   PanicScreen: {screen: PanicScreen},
//   FocusScreen: {screen: FocusScreen},
//   StressScreen: {screen: StressScreen},
//   TestingWaves: {screen: TestingWaves},
//   InformationScreen: {screen: InformationScreen},
//   ResourcesScreen: {screen: ResourcesScreen},
// });

// const App = createAppContainer(Navigator);

const { width } = Dimensions.get('screen');
const SIZE = width * 0.9;

function MainScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        Abel_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <View style={MainScreenStyles.mainStyle} >
                <View style={MainScreenStyles.topSelections}>
                    <View style={MainScreenStyles.resourcesStyle}>
                        <Text onPress={() => navigation.navigate('ResourcesScreen')} style={{ fontFamily: 'Abel_400Regular' }}>Resources</Text>
                    </View>
                    <View style={MainScreenStyles.informationStyle} >
                        <Text onPress={() => navigation.navigate('InformationScreen')} style={{ fontFamily: 'Abel_400Regular' }}>Information</Text>
                    </View>
                </View>


                <View style={MainScreenStyles.buttonsBack}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('TestingWaves', { inhaleTime: 1, topHoldTime: 1, exhaleTime: 1, bottomHoldTime: 1 })}>
                        <View style={MainScreenStyles.buttonPanic}>
                            <ImageBackground source={require('./App/assets/Images/panicb.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }} >
                                <Text style={MainScreenStyles.buttonText}>PANIC</Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={MainScreenStyles.bottomButtons}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('FocusScreen')}>
                            <View style={MainScreenStyles.buttonFocus}>
                                <ImageBackground source={require('./App/assets/Images/focusb.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }} >
                                    <Text style={MainScreenStyles.buttonText}>FOCUS</Text>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('StressScreen')}>
                            <View style={MainScreenStyles.buttonStress}>
                                <ImageBackground source={require('./App/assets/Images/stressb.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }} >
                                    <Text style={MainScreenStyles.buttonText}>STRESS</Text>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                </View>

                <View style={MainScreenStyles.WaterlooLogo}>
                    <Image source={require('./App/assets/WatLogo.png')} style={{ resizeMode: 'contain', width: '50%', height: '50%' }} />
                </View>
            </View>
        );
    }
}

function FocusScreen({ navigation }) {
    return (
        <View style={FocusScreenStyles.main} >
            <Text style={FocusScreenStyles.text}>Focus Screen</Text>
            <Text style={FocusScreenStyles.text} onPress={() => navigation.navigate('MainScreen')}>Return to main</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('BeginnerScreen')}>
                <View style={FocusScreenStyles.selections}>
                    <Text style={FocusScreenStyles.smallText}>Beginner</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('TestingWaves', { inhaleTime: 4, topHoldTime: 4, exhaleTime: 4, bottomHoldTime: 4 })}>
                <View style={FocusScreenStyles.selections}>
                    <Text style={FocusScreenStyles.smallText}>Square Technique</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('TestingWaves', { inhaleTime: 4, topHoldTime: 7, exhaleTime: 8, bottomHoldTime: 0 })}>
                <View style={FocusScreenStyles.selections}>
                    <Text style={FocusScreenStyles.smallText} >4-7-8 Technique</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('CustomRegiment')}>
                <View style={FocusScreenStyles.selections}>
                    <Text style={FocusScreenStyles.smallText}>Custom</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export class BeginnerScreen extends React.Component {

    static navigationOptions = {
        title: 'BeginnerScreen',
    };

    state = {
        value: 1
    }

    render() {

        return (
            <View style={BeginnerScreenStyles.main} >
                <View style={BeginnerScreenStyles.title}>
                    <Text style={BeginnerScreenStyles.titleText} > Please Select Your Preferred Inhale/Exhale Time</Text>
                </View>
                <View style={BeginnerScreenStyles.container}>
                    <Slider
                        value={this.state.value}
                        onValueChange={(value) => Math.round(this.setState({ value }))}
                        maximumValue={10}
                        minimumValue={1}
                        thumbStyle={BeginnerScreenStyles.thumbStyle}
                        thumbTintColor='#66ff99'
                    />
                    <Text style={BeginnerScreenStyles.decisionStyle} >{Math.round(this.state.value)} Seconds </Text>
                </View>
                <View style={BeginnerScreenStyles.continueButton}>
                    <Text style={BeginnerScreenStyles.continueText} onPress={() => this.props.navigation.navigate('TestingWaves', { inhaleTime: Math.round(this.state.value), topHoldTime: 0, exhaleTime: Math.round(this.state.value), bottomHoldTime: 0 })}>Continue</Text>
                </View>
            </View>
        );
    }
}

export class CustomRegiment extends React.Component {

    static navigationOptions = {
        title: 'CustomInhale',
    };

    state = { inhale: '0', topHold: '0', exhale: '0', bottomHold: '0' }
    updateInhale = (inhale) => {
        this.setState({ inhale: inhale })
    }
    updateTopHold = (topHold) => {
        this.setState({ topHold: topHold })
    }
    updateExhale = (exhale) => {
        this.setState({ exhale: exhale })
    }
    updateBottomHold = (bottomHold) => {
        this.setState({ bottomHold: bottomHold })
    }

    render() {
        return (
            <View>
                <Picker selectedValue={this.state.inhale} onValueChange={this.updateInhale}>
                    <Picker.Item label="Inhale: 0" value='0' />
                    <Picker.Item label="Inhale: 1" value="1" />
                    <Picker.Item label="Inhale: 2" value="2" />
                    <Picker.Item label="Inhale: 3" value="3" />
                    <Picker.Item label="Inhale: 4" value="4" />
                    <Picker.Item label="Inhale: 5" value="5" />
                    <Picker.Item label="Inhale: 6" value="6" />
                    <Picker.Item label="Inhale: 7" value="7" />
                    <Picker.Item label="Inhale: 8" value="8" />
                    <Picker.Item label="Inhale: 9" value="9" />
                    <Picker.Item label="Inhale: 10" value="10" />
                </Picker>
                <Text style={styles.text}>{this.state.inhale}</Text>
                <Picker selectedValue={this.state.topHold} onValueChange={this.updateTopHold}>
                    <Picker.Item label="Top Hold: 0" value='0' />
                    <Picker.Item label="Top Hold: 1" value="1" />
                    <Picker.Item label="Top Hold: 2" value="2" />
                    <Picker.Item label="Top Hold: 3" value="3" />
                    <Picker.Item label="Top Hold: 4" value="4" />
                    <Picker.Item label="Top Hold: 5" value="5" />
                    <Picker.Item label="Top Hold: 6" value="6" />
                    <Picker.Item label="Top Hold: 7" value="7" />
                    <Picker.Item label="Top Hold: 8" value="8" />
                    <Picker.Item label="Top Hold: 9" value="9" />
                    <Picker.Item label="Top Hold: 10" value="10" />
                </Picker>
                <Text style={styles.text}>{this.state.topHold}</Text>
                <Picker selectedValue={this.state.exhale} onValueChange={this.updateExhale}>
                    <Picker.Item label="Exhale: 0" value='0' />
                    <Picker.Item label="Exhale: 1" value="1" />
                    <Picker.Item label="Exhale: 2" value="2" />
                    <Picker.Item label="Exhale: 3" value="3" />
                    <Picker.Item label="Exhale: 4" value="4" />
                    <Picker.Item label="Exhale: 5" value="5" />
                    <Picker.Item label="Exhale: 6" value="6" />
                    <Picker.Item label="Exhale: 7" value="7" />
                    <Picker.Item label="Exhale: 8" value="8" />
                    <Picker.Item label="Exhale: 9" value="9" />
                    <Picker.Item label="Exhale: 10" value="10" />
                </Picker>
                <Text style={styles.text}>{this.state.exhale}</Text>
                <Picker selectedValue={this.state.bottomHold} onValueChange={this.updateBottomHold}>
                    <Picker.Item label="Bottom Hold: 0" value='0' />
                    <Picker.Item label="Bottom Hold: 1" value="1" />
                    <Picker.Item label="Bottom Hold: 2" value="2" />
                    <Picker.Item label="Bottom Hold: 3" value="3" />
                    <Picker.Item label="Bottom Hold: 4" value="4" />
                    <Picker.Item label="Bottom Hold: 5" value="5" />
                    <Picker.Item label="Bottom Hold: 6" value="6" />
                    <Picker.Item label="Bottom Hold: 7" value="7" />
                    <Picker.Item label="Bottom Hold: 8" value="8" />
                    <Picker.Item label="Bottom Hold: 9" value="9" />
                    <Picker.Item label="Bottom Hold: 10" value="10" />
                </Picker>
                <Text style={styles.text}>{this.state.bottomHold}</Text>
                <View style={BeginnerScreenStyles.continueButton}>
                    <Text style={BeginnerScreenStyles.continueText} onPress={() => this.props.navigation.navigate('TestingWaves', { inhaleTime: parseInt(this.state.inhale), topHoldTime: parseInt(this.state.topHold), exhaleTime: parseInt(this.state.exhale), bottomHoldTime: parseInt(this.state.bottomHold) })}>Continue</Text>
                </View>
            </View>
        )
    }
}

function InformationScreen({ navigation }) {
    return (
        <View style={InformationScreenStyles.main}>
            <ScrollView style={InformationScreenStyles.scrollView}>
                <View style={InformationScreenStyles.titleBox}>
                    <Text style={InformationScreenStyles.hiddenText}>Return to main</Text>
                    <Text style={InformationScreenStyles.title}>Information</Text>
                    <Text style={InformationScreenStyles.return} onPress={() => navigation.navigate('MainScreen')}>Return to main</Text>
                </View>
                <View style={InformationScreenStyles.paragraph}>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.paragraphText}>Thank you for your interest in Waterloo Deep Breathing! This application was developed in partnership with the University of Waterloo Faculty of Engineering IDEAs Clinic, SHEN Spiritual Heritage Education Network, and the University of Waterloo Engineering Wellness (ENGWellness) Program.  </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.paragraphText}>The purpose of this application is to aid individuals with reducing their stress response (deactivating the Sympathetic Nervous System (SNS)) through various deep breathing exercises in an effort to elicit a relaxation response (activating the Parasympathetic Nervous System (PSNS)). Research has readily proven that breathing exercises can effectively help individuals reduce their physiological response to stress and stressful stimuli. </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.paragraphText}>Users can choose from three main options, each with different functionality and preferences: </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.subtitle}>Focus:</Text>
                    <Text style={InformationScreenStyles.paragraphText}>The Focus Mode allows users to select from preset breathing techniques or customize their breathing rate as they see fit. This option is great for those testing out the app, practicing deep breathing techniques, or want to establish a base-line for their preferred breathing rate. We recommend this option for those experiencing a mild stress response.  </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.subtitle}>Stress:</Text>
                    <Text style={InformationScreenStyles.paragraphText}>The Stress Mode provides less options for the user to specify and instead asks the user to determine their level of stress (correlated with ‘breaths per minute’) using a scroll bar. Once the level of stress has been identified, the app will begin a preloaded breathing regimen to aid the user with reducing their breathing rate and enacting a relaxation response. We recommend this option for those experiencing a mild to moderate stress response.  </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.subtitle}>Panic:</Text>
                    <Text style={InformationScreenStyles.paragraphText}>The Panic Mode immediately jumps into a preloaded deep breathing regimen to reduce a user’s acute stress response. After a series of intervals, the app will ask the user if they would like to reduce their breathing rate (breaths per minute) or keep at the current level. We recommend this option for those experiencing a moderate to severe stress response. *  </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.paragraphText} onPress={() => navigation.navigate('ResourcesScreen')}>* Please note, this application is not a diagnostic tool and is not intended to substitute advice/support from a medical or mental health professional. Users experiencing frequent severe and acute stress responses should seek support from a medical professional.  To be taken to a list of resources, click here.</Text>
                </View>
            </ScrollView>
        </View>
    );
}

/* 
 
 
Helpful Resources 
UW Counselling Services: 519-888-4567, ext. 32655 (Mon 8:30am - 7:30pm, Tues - Fri 8:30am - 4:30pm) 
After Hours: Empower Me, Mental Health Resources (for UG and Grad students): 1-844-741-6389 
Good2Talk (confidential help line for post-secondary students): 1-866-5454 
Here24/7 (Waterloo Region mental health and crisis services team): 1-844-437-3247 
On-Campus Emergencies: UW Police: 519-888-4567, ext. 22222 
Back */

function ResourcesScreen({ navigation }) {
    return (
        <View style={ResourcesScreenStyles.main}>
            <ScrollView style={ResourcesScreenStyles.scrollView}>
                <View style={ResourcesScreenStyles.titleBox}>
                    <Text style={ResourcesScreenStyles.hiddenText}>Return to main</Text>
                    <Text style={ResourcesScreenStyles.title}>Resources</Text>
                    <Text style={ResourcesScreenStyles.return} onPress={() => navigation.navigate('MainScreen')}>Return to main</Text>
                </View>
                <View style={ResourcesScreenStyles.paragraph}>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraphtlink} onPress={() => Linking.openURL('https://uwaterloo.ca/campus-wellness/counselling-services')}>UW Counselling Services:</Text>
                    <Text style={ResourcesScreenStyles.paragrapht}> (Mon 8:30am - 7:30pm, Tues - Fri 8:30am - 4:30pm)  </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>519-888-4567, ext. 32655</Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.subtitle}>After Hours:</Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraphtlink} onPress={() => Linking.openURL('https://wusa.ca/services/empower-me')}>Empower Me: </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>Mental Health Resources (for UG and Grad students): </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>1-844-741-6389 </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraphtlink} onPress={() => Linking.openURL('https://good2talk.ca/')}>Good2Talk: </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>(confidential help line for post-secondary students): </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>1-866-5454 </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraphtlink} onPress={() => Linking.openURL('https://here247.ca/')}>Here24/7: </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>(Waterloo Region mental health and crisis services team): </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>1-844-437-3247 </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.subtitle}>On-Campus Emergencies:</Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraphtlink} onPress={() => Linking.openURL('https://uwaterloo.ca/police/')}>UW Police: </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>519-888-4567, ext. 22222  </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    {/* <Text style={ResourcesScreenStyles.paragraph} onPress={() => navigation.navigate('ResourcesScreen')}>* Please note, this application is not a diagnostic tool and is not intended to substitute advice/support from a medical or mental health professional. Users experiencing frequent severe and acute stress responses should seek support from a medical professional.  To be taken to a list of resources, click here.</Text> */}
                </View>
            </ScrollView>
        </View>
    );
}

export class StressScreen extends React.Component {

    static navigationOptions = {
        title: 'StressScreen',
    };

    state = {
        value: 1
    }

    render() {

        return (
            <View style={StressScreenStyles.main} >
                <View style={StressScreenStyles.title}>
                    <Text style={StressScreenStyles.titleText} >How Stressed Are You Feeling Today?</Text>
                </View>
                <View style={StressScreenStyles.container}>
                    <Slider
                        value={this.state.value}
                        onValueChange={(value) => Math.round(this.setState({ value }))}
                        maximumValue={10}
                        minimumValue={1}
                        thumbStyle={StressScreenStyles.thumbStyle}
                        thumbTintColor='#Dc6ee5'
                    />
                    <Text style={StressScreenStyles.decisionStyle} >Stress Level: {Math.round(this.state.value)}</Text>
                    <Text style={StressScreenStyles.decisionStyle}> You are feeling: {Selection(Math.round(this.state.value))} </Text>
                    <Text style={StressScreenStyles.decisionStyle}> Breathing Regiment: {BreathingRate(Math.round(this.state.value))} </Text>
                </View>
                <View style={StressScreenStyles.continueButton}>
                    <Text style={StressScreenStyles.continueText} onPress={() => this.props.navigation.navigate('TestingWaves', { inhaleTime: inhaleSelection(Math.round(this.state.value)), topHoldTime: topHoldSelection(Math.round(this.state.value)), exhaleTime: exhaleSelection(Math.round(this.state.value)), bottomHoldTime: bottomHoldSelection(Math.round(this.state.value)) })}>Continue</Text>
                </View>
            </View>
        );
    }
}

function inhaleSelection(number) {
    if (number == 1) {
        return 7
    }
    else if (number == 2) {
        return 7
    }
    else if (number == 3) {
        return 6
    }
    else if (number == 4) {
        return 6
    }
    else if (number == 5) {
        return 5
    }
    else if (number == 6) {
        return 5
    }
    else if (number == 7) {
        return 5
    }
    else if (number == 8) {
        return 4
    }
    else if (number == 9) {
        return 4
    }
    else if (number == 10) {
        return 4
    }
}

function topHoldSelection(number) {
    if (number == 1) {
        return 7
    }
    else if (number == 2) {
        return 6
    }
    else if (number == 3) {
        return 5
    }
    else if (number == 4) {
        return 4
    }
    else if (number == 5) {
        return 4
    }
    else if (number == 6) {
        return 3
    }
    else if (number == 7) {
        return 2
    }
    else if (number == 8) {
        return 2
    }
    else if (number == 9) {
        return 1
    }
    else if (number == 10) {
        return 0
    }
}

function bottomHoldSelection(number) {
    if (number == 1) {
        return 4
    }
    else if (number == 2) {
        return 3
    }
    else if (number == 3) {
        return 2
    }
    else if (number == 4) {
        return 2
    }
    else if (number == 5) {
        return 1
    }
    else if (number == 6) {
        return 1
    }
    else if (number == 7) {
        return 1
    }
    else if (number == 8) {
        return 0
    }
    else if (number == 9) {
        return 0
    }
    else if (number == 10) {
        return 0
    }
}

function exhaleSelection(number) {
    if (number == 1) {
        return 8
    }
    else if (number == 2) {
        return 7
    }
    else if (number == 3) {
        return 6
    }
    else if (number == 4) {
        return 6
    }
    else if (number == 5) {
        return 6
    }
    else if (number == 6) {
        return 5
    }
    else if (number == 7) {
        return 5
    }
    else if (number == 8) {
        return 5
    }
    else if (number == 9) {
        return 4
    }
    else if (number == 10) {
        return 4
    }
}

function Selection(number) {
    if (number == 1) {
        return ("Not At All Stressed")
    }
    else if (number == 2) {
        return ("Barely Stressed")
    }
    else if (number == 3) {
        return ("Slightly Stressed")
    }
    else if (number == 4) {
        return ("Moderately Stressed")
    }
    else if (number == 5) {
        return ("Slightly More Stressed Than Usual")
    }
    else if (number == 6) {
        return ("More Stressed Than Usual")
    }
    else if (number == 7) {
        return ("Quite Stressed")
    }
    else if (number == 8) {
        return ("Very Stressed")
    }
    else if (number == 9) {
        return ("Severely Stressed")
    }
    else {
        return ("Extremely Stressed")
    }
}

function BreathingRate(number) {
    if (number == 1) {
        return ("In: 7s, Hold: 7s, Out: 8s, Hold: 4s")
    }
    else if (number == 2) {
        return ("In: 7s, Hold: 6s, Out: 7s, Hold: 3s")
    }
    else if (number == 3) {
        return ("In: 6s, Hold: 5s, Out: 6s, Hold: 2s")
    }
    else if (number == 4) {
        return ("In: 6s, Hold: 4s, Out: 6s, Hold: 2s")
    }
    else if (number == 5) {
        return ("In: 5s, Hold: 4s, Out: 6s, Hold: 1s")
    }
    else if (number == 6) {
        return ("In: 5s, Hold: 3s, Out: 5s, Hold: 1s")
    }
    else if (number == 7) {
        return ("In: 5s, Hold: 2s, Out: 5s, Hold: 1s")
    }
    else if (number == 8) {
        return ("In: 4s, Hold: 2s, Out: 5s, Hold: 0s")
    }
    else if (number == 9) {
        return ("In: 4s, Hold: 1s, Out: 4s, Hold: 0s")
    }
    else {
        return ("In: 4s, Hold: 0s, Out: 4s, Hold: 0s")
    }
}

function TestingWaves({ route, navigation }) {

    const { inhaleTime, topHoldTime, exhaleTime, bottomHoldTime } = route.params;

    const [seconds, setSeconds] = React.useState(0);

    // React.useEffect(() => {
    //     setTimeout(() => setSeconds(seconds + 1), 1000);
    // });
    const scaleAnim = useRef(new Animated.Value(0)).current;
    Animated.loop(
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 2,
                duration: inhaleTime * 1000,
                useNativeDriver: true
            }),
            Animated.delay(holdTime*1000),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: exhaleTime * 1000,
                useNativeDriver: true
            }),
            Animated.delay(bottomHoldTime*1000)
        ]),{
            iterations: -1
        }
    ).start()
    return (
        <View>
            <View>
                <Text>Inhale Time: {inhaleTime}</Text>
                <Text>Top Hold Time: {topHoldTime}</Text>
                <Text>Exhale Time: {exhaleTime}</Text>
                <Text>Bottom Hold Time: {bottomHoldTime} </Text>
                <Text>{DisplayText(seconds, inhaleTime, topHoldTime, exhaleTime, bottomHoldTime)}</Text>
                <Text> {seconds} </Text>
                <View style={[TestingWavesStyles.container]}>
                    <Animated.View style={[TestingWavesStyles.breatheBall, {
                        scaleX: scaleAnim,
                        scaleY: scaleAnim,
                        opacity: Animated.subtract(scaleAnim, 0.5),
                    }]} />
                    <Animated.View style={[{
                        opacity: Animated.subtract(scaleAnim, 1)
                    }]}>
                        <Text>Inhale</Text>
                    </Animated.View>
                </View>
            </View>
        </View>
    );
}

function DisplayText(seconds, inhaleTime, topHoldTime, exhaleTime, bottomHoldTime) {
    let totalIntervalTime = inhaleTime + topHoldTime + exhaleTime + bottomHoldTime
    let curTime = seconds % totalIntervalTime
    if (curTime < inhaleTime) {
        return ("Inhale")
    }
    else if (inhaleTime <= curTime && curTime < (inhaleTime + topHoldTime)) {
        return ("Hold")
    }
    else if ((inhaleTime + topHoldTime) <= curTime && curTime < (inhaleTime + topHoldTime + exhaleTime)) {
        return ("Exhale")
    }
    else return ("Hold")
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    square: {
        backgroundColor: '#000000',
        height: 35,
        width: 35,
        position: 'absolute'
    }

});

const MainScreenStyles = StyleSheet.create({
    mainStyle: {
        backgroundColor: 'white',
        flex: 1,
    },
    titleText: {
        top: 100,
    },
    buttonsBack: {
        width: '100%',
        height: '75%',
        backgroundColor: 'white',
        top: '10%',
    },
    buttonPanic: {
        // backgroundColor: '#FF7575',
        width: 200,
        height: 200,
        // top: '10%',
        //flex: 1,
        borderRadius: 200 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    bottomButtons: {
        flex: 0.75,
        top: '10%',
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    WaterlooLogo: {
        //backgroundColor: '#FF7575',
        width: 1050,
        height: 419,
        flex: 1,
        top: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonFocus: {
        //backgroundColor: '#35CD96',
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStress: {
        //backgroundColor: '#EADE71',
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'Abel_400Regular',
        fontSize: 40,
        fontWeight: "500",
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textStyle: {
        //color: 'dodgerblue',
        fontSize: 40,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    sinWavesStyle: {

        alignSelf: 'center',
        fontWeight: "900",
        fontSize: 20,
    },
    resourcesStyle: {
        fontWeight: "100",
        fontFamily: 'Abel_400Regular',
        top: 10,
    },
    informationStyle: {
        fontWeight: "500",
        fontFamily: 'Abel_400Regular',
        top: 10,
    },
    topSelections: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
    }
})

const FocusScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: '#049A64',
        flex: 1,
    },
    text: {
        top: 250,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

const BeginnerScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: '#53D396',
        flex: 1,
    },
    title: {
        top: '25%',
        alignSelf: 'center'
    },
    titleText: {
        fontSize: 25,
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
    thumbStyle: {
        color: 'white'
    },
    decisionStyle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    continueButton: {
        height: 75,
        width: 150,
        bottom: '5%',
        justifyContent: 'center',
        backgroundColor: '#Dc6ee5',
        alignSelf: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#53D396'
    },
    continueText: {
        fontSize: 20,
        alignSelf: 'center',
    },
})

const InformationScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column'
    },
    titleBox: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    return: {
        fontSize: 14,
    },
    hiddenText: {
        fontSize: 14,
        color: 'white',
    },
    paragraph: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    paragraphText: {
        alignSelf: 'center',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
})

const ResourcesScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column'
    },
    titleBox: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    return: {
        fontSize: 14,
    },
    hiddenText: {
        fontSize: 14,
        color: 'white',
    },
    paragraph: {
        flex: 1,
        //display: 'block',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    paragrapht: {
        flex: 1,
        //display: 'inline',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    paragraphtlink: {
        flex: 1,
        //display: 'inline',
        color: '#3e8a79',
        fontWeight: 'bold',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    paragraphText: {
        alignSelf: 'center',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
})

const StressScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: '#53D396',
        flex: 1,
    },
    title: {
        top: '25%',
        alignSelf: 'center'
    },
    titleText: {
        fontSize: 25,
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
    thumbStyle: {
        color: 'white'
    },
    decisionStyle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    continueButton: {
        height: 75,
        width: 150,
        bottom: '5%',
        justifyContent: 'center',
        backgroundColor: '#Dc6ee5',
        alignSelf: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#53D396'
    },
    continueText: {
        fontSize: 20,
        alignSelf: 'center',
    },
});

const TestingWavesStyles = StyleSheet.create({
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
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    breatheBall:  {
        width: SIZE * 0.4,
        height: SIZE * 0.4,
        position: 'absolute',
        backgroundColor: 'purple',
        borderRadius: SIZE * 0.2,
    }
})

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="FocusScreen" component={FocusScreen} />
                <Stack.Screen name="BeginnerScreen" component={BeginnerScreen} />
                <Stack.Screen name="CustomRegiment" component={CustomRegiment} />
                <Stack.Screen name="InformationScreen" component={InformationScreen} />
                <Stack.Screen name="ResourcesScreen" component={ResourcesScreen} />
                <Stack.Screen name="StressScreen" component={StressScreen} />
                <Stack.Screen name="TestingWaves" component={TestingWaves} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

// For understanding containers and navigators check out https://www.youtube.com/watch?v=ufvDlmDg2L4

