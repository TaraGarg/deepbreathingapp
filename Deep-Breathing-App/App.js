// Welcome to the Deep Breathing App.  There are comments spread out to display what each page does and how they work.  For a more in depth descirption of the app and its functionality, please refer to documentatino in MS Teams

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
    Button,
    Dimensions
} from 'react-native';
import { Slider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Abel_400Regular } from '@expo-google-fonts/abel';
import {
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
} from '@expo-google-fonts/quicksand';
import { Easing, useAnimatedStyle, withSequence, withTiming } from 'react-native-reanimated';
import { Picker } from '@react-native-picker/picker';

const { width } = Dimensions.get('screen');
const SIZE = width * 0.9;

// The main screen is what gets loaded when the user opens the app, and allows them to go to the resources, information, panic, stress, and focus screens

function MainScreen({ navigation }) {
    return (
        <View style={MainScreenStyles.mainStyle} >
            <View style={MainScreenStyles.topMenu}>
                <View>
                    <Text onPress={() => navigation.navigate('ResourcesScreen')} style={{ fontFamily: 'Quicksand_500Medium', fontSize: 20 }}>Resources</Text>
                </View>
                <View>
                    <Text onPress={() => navigation.navigate('InformationScreen')} style={{ fontFamily: 'Quicksand_500Medium', fontSize: 20 }}>Information</Text>
                </View>
            </View>

            <View style={MainScreenStyles.selectionArea}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('TestingWaves', { inhaleTime: 3, topHoldTime: 0, exhaleTime: 3, bottomHoldTime: 0 })}>
                    <View style={MainScreenStyles.buttonPanic}>
                        <ImageBackground source={require('./App/assets/Images/panicb.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }} >
                            <Text style={MainScreenStyles.button1Text}>PANIC</Text>
                        </ImageBackground>
                    </View>
                </TouchableWithoutFeedback>
                <View style={MainScreenStyles.bottomButtonArea}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('FocusScreen')}>
                        <View style={MainScreenStyles.Bottombuttons}>
                            <ImageBackground source={require('./App/assets/Images/focusb.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }} >
                                <Text style={MainScreenStyles.button2Text}>FOCUS</Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('StressScreen')}>
                        <View style={MainScreenStyles.Bottombuttons}>
                            <ImageBackground source={require('./App/assets/Images/stressb.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }} >
                                <Text style={MainScreenStyles.button2Text}>STRESS</Text>
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

// The focus screen contains the four options required.  Pressing the text takes the user directly to the animation or to a more specific selection screen.

function FocusScreen({ navigation }) {
    return (
        <View style={FocusScreenStyles.main} >

            <View style={{ top: '5%' }}>
                <Text style={{ fontFamily: 'Abel_400Regular', alignSelf: 'center', textAlign: 'center', fontSize: 27, }}>CHOOSE YOUR</Text>
                <Text style={{ fontFamily: 'Abel_400Regular', alignSelf: 'center', textAlign: 'center', fontSize: 36, }}>BREATHING ROUTINE</Text>

            </View>



            <TouchableWithoutFeedback onPress={() => navigation.navigate('BeginnerScreen')}>

                <Text style={{ fontFamily: 'Quicksand_500Medium', alignSelf: 'center', textAlign: 'center', fontSize: 25, top: '15%', color: '#86B502' }}>Beginner</Text>

            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('TestingWaves', { inhaleTime: 4, topHoldTime: 4, exhaleTime: 4, bottomHoldTime: 4 })}>

                <Text style={{ fontFamily: 'Quicksand_500Medium', alignSelf: 'center', textAlign: 'center', fontSize: 25, top: '25%', color: '#1BB502' }}>Square Technique</Text>

            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('TestingWaves', { inhaleTime: 4, topHoldTime: 7, exhaleTime: 8, bottomHoldTime: 0 })}>

                <Text style={{ fontFamily: 'Quicksand_500Medium', alignSelf: 'center', textAlign: 'center', fontSize: 25, top: '35%', color: '#02B569' }} >4-7-8 Technique</Text>

            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('CustomRegiment')}>

                <Text style={{ fontFamily: 'Quicksand_500Medium', alignSelf: 'center', textAlign: 'center', fontSize: 25, top: '45%', color: '#01A8A8' }}>Custom</Text>

            </TouchableWithoutFeedback>
        </View>
    );
}

// This screen has a slider where the user can pick a value taht will be their inhale and exhale time.  It sets both top and bottom holds to 0.

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
                    <Text style={{
                        fontFamily: 'Abel_400Regular',
                        fontSize: 30,
                        alignSelf: 'center',
                        textAlign: 'center',
                    }} >PLEASE SELECT YOUR</Text>
                    <Text style={{
                        fontFamily: 'Abel_400Regular',
                        fontSize: 30,
                        alignSelf: 'center',
                        textAlign: 'center',
                    }} >INHALE AND EXHALE TIME</Text>
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
                    <Text style={{ fontFamily: "Quicksand_400Regular", alignSelf: 'center', textAlign: 'center', fontSize: 18 }} >{Math.round(this.state.value)} seconds </Text>
                </View>
                <View style={BeginnerScreenStyles.continueButton}>
                    <Text style={{ fontFamily: 'Abel_400Regular', alignSelf: 'center', fontSize: 20 }} onPress={() => this.props.navigation.navigate('TestingWaves', { inhaleTime: Math.round(this.state.value), topHoldTime: 0, exhaleTime: Math.round(this.state.value), bottomHoldTime: 0 })}>CONTINUE</Text>
                </View>
            </View>
        );
    }
}

// This page contains 4 pickers, and it allows the user to get a custom regiment.  They are preloaded to have a general regiment loaded in when the user enters the page.

export class CustomRegiment extends React.Component {

    static navigationOptions = {
        title: 'CustomInhale',
    };

    state = { inhale: '6', topHold: '4', exhale: '6', bottomHold: '2' }
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
            <View style={CustomRStyles.main}>

                <Text style={{ fontFamily: 'Abel_400Regular', fontSize: 20, top: "10%", textAlign: "center" }}>Inhale:</Text>


                <Picker selectedValue={this.state.inhale} onValueChange={this.updateInhale}
                    style={{
                        top: "10%",
                        height: 50, width: 150,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>
                    <Picker.Item label="0" value='0' />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                </Picker>

                <Text></Text>
                <Text style={{ fontFamily: 'Abel_400Regular', fontSize: 20, top: "10%", textAlign: "center" }}>First Hold:</Text>
                <Picker selectedValue={this.state.topHold} onValueChange={this.updateTopHold}
                    style={{
                        top: "10%",
                        height: 50, width: 150, textAlign: "center",
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>
                    <Picker.Item label="0" value='0' />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                </Picker>

                <Text></Text>
                <Text style={{ fontFamily: 'Abel_400Regular', fontSize: 20, top: "10%", textAlign: "center" }}>Exhale:</Text>
                <Picker selectedValue={this.state.exhale} onValueChange={this.updateExhale}
                    style={{
                        top: "10%",
                        height: 50, width: 150, textAlign: "center",
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>
                    <Picker.Item label="0" value='0' />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                </Picker>

                <Text></Text>
                <Text style={{ fontFamily: 'Abel_400Regular', fontSize: 20, top: "10%", textAlign: "center" }}>Second Hold:</Text>
                <Picker selectedValue={this.state.bottomHold} onValueChange={this.updateBottomHold}
                    style={{
                        top: "10%",
                        height: 50, width: 150, textAlign: "center",
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}
                    itemStyle={{ fontFamily: 'Abel_400Regular', }}
                >
                    <Picker.Item label="0" value='0' style={{ fontFamily: 'Abel_400Regular' }} />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                </Picker>

                <View style={{
                    height: 75,
                    width: 150,
                    top: '30%',
                    justifyContent: 'center',
                    backgroundColor: '#25CB99',
                    alignSelf: 'center',
                    paddingTop: 20,
                    paddingBottom: 20,
                    borderRadius: 10,
                }}>
                    <Text style={{ fontFamily: 'Abel_400Regular', alignSelf: 'center', fontSize: 20 }} onPress={() => this.props.navigation.navigate('TestingWaves', { inhaleTime: parseInt(this.state.inhale), topHoldTime: parseInt(this.state.topHold), exhaleTime: parseInt(this.state.exhale), bottomHoldTime: parseInt(this.state.bottomHold) })}>CONTINUE</Text>
                </View>
            </View >
        )
    }
}

// The information screen is ver straightforward, it just displays all infor Engwellness wanted it to display.

function InformationScreen({ navigation }) {
    return (
        <View style={InformationScreenStyles.main}>
            <ScrollView style={InformationScreenStyles.scrollView}>
                <View style={InformationScreenStyles.paragraph}>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.paragraphText}>Thank you for your interest in Waterloo Deep Breathing! This application was developed by Tara Garg, Rhys Cornelious, and Marko Stojakovic in partnership with the University of Waterloo Faculty of Engineering IDEAs Clinic, SHEN Spiritual Heritage Education Network, and the University of Waterloo Engineering Wellness (ENGWellness) Program.  </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.paragraphText}>The purpose of this application is to aid individuals with reducing their stress response (deactivating the Sympathetic Nervous System (SNS)) through various deep breathing exercises in an effort to elicit a relaxation response (activating the Parasympathetic Nervous System (PSNS)). Research has readily proven that breathing exercises can effectively help individuals reduce their physiological response to stress and stressful stimuli. </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.paragraphText}>Users can choose from three main options, each with different functionality and preferences: </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.subtitle}>Focus</Text>
                    <Text style={InformationScreenStyles.paragraphText}>The Focus Mode allows users to select from preset breathing techniques or customize their breathing rate as they see fit. This option is great for those testing out the app, practicing deep breathing techniques, or want to establish a base-line for their preferred breathing rate. We recommend this option for those experiencing a mild stress response.  </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.subtitle}>Stress</Text>
                    <Text style={InformationScreenStyles.paragraphText}>The Stress Mode provides less options for the user to specify and instead asks the user to determine their level of stress (correlated with ‘breaths per minute’) using a scroll bar. Once the level of stress has been identified, the app will begin a preloaded breathing regimen to aid the user with reducing their breathing rate and enacting a relaxation response. We recommend this option for those experiencing a mild to moderate stress response.  </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.subtitle}>Panic</Text>
                    <Text style={InformationScreenStyles.paragraphText}>The Panic Mode immediately jumps into a preloaded deep breathing regimen to reduce a user’s acute stress response. After a series of intervals, the app will ask the user if they would like to reduce their breathing rate (breaths per minute) or keep at the current level. We recommend this option for those experiencing a moderate to severe stress response. *  </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.paragraphText} onPress={() => navigation.navigate('ResourcesScreen')}>* Please note, this application is not a diagnostic tool and is not intended to substitute advice/support from a medical or mental health professional. Users experiencing frequent severe and acute stress responses should seek support from a medical professional.  To be taken to a list of resources, click here.</Text>
                </View>
            </ScrollView>
        </View>
    );
}

// The resources screen includes hyperlinks for important resources as well as other pertinent information to allow users to get help quickly and easily.

function ResourcesScreen({ navigation }) {
    return (
        <View style={ResourcesScreenStyles.main}>
            <ScrollView style={ResourcesScreenStyles.scrollView}>
                <View style={ResourcesScreenStyles.paragraph}>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={{ fontFamily: 'Abel_400Regular', fontSize: 20, color: '#3e8a79' }} onPress={() => Linking.openURL('https://uwaterloo.ca/campus-wellness/counselling-services')}>UW Counselling Services:</Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>(Mon 8:30am - 7:30pm, Tues - Fri 8:30am - 4:30pm)  </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>519-888-4567, ext. 32655</Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.subtitle}>After Hours:</Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={{ fontFamily: 'Abel_400Regular', fontSize: 20, color: '#3e8a79' }} onPress={() => Linking.openURL('https://wusa.ca/services/empower-me')}>Empower Me: </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>Mental Health Resources (for UG and Grad students): </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>1-844-741-6389 </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={{ fontFamily: 'Abel_400Regular', fontSize: 20, color: '#3e8a79' }} onPress={() => Linking.openURL('https://good2talk.ca/')}>Good2Talk: </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>(confidential help line for post-secondary students): </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>1-866-5454 </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={{ fontFamily: 'Abel_400Regular', fontSize: 20, color: '#3e8a79' }} onPress={() => Linking.openURL('https://here247.ca/')}>Here24/7: </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>(Region mental health and crisis services team): </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>1-844-437-3247 </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.subtitle}>On-Campus Emergencies:</Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={{ fontFamily: 'Abel_400Regular', fontSize: 20, color: '#3e8a79' }} onPress={() => Linking.openURL('https://uwaterloo.ca/police/')}>UW Police: </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>519-888-4567, ext. 22222  </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    {/* <Text style={ResourcesScreenStyles.paragraph} onPress={() => navigation.navigate('ResourcesScreen')}>* Please note, this application is not a diagnostic tool and is not intended to substitute advice/support from a medical or mental health professional. Users experiencing frequent severe and acute stress responses should seek support from a medical professional.  To be taken to a list of resources, click here.</Text> */}
                </View>
            </ScrollView>
        </View>
    );
}

// The stress screen features a single slider and displays the stress level correlation to the slide rposition,a nd what the breathing regiment will be.  Once the user clicks continue that regiment is passed on to the animation page

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
                    <Text style={{
                        fontFamily: 'Abel_400Regular',
                        fontSize: 30,
                        alignSelf: 'center',
                        textAlign: 'center',
                    }} >HOW STRESSED</Text>
                    <Text style={{
                        fontFamily: 'Abel_400Regular',
                        fontSize: 30,
                        alignSelf: 'center',
                        textAlign: 'center',
                    }} >ARE YOU FEELING TODAY?</Text>
                </View>
                <View style={StressScreenStyles.container}>
                    <Slider
                        value={this.state.value}
                        onValueChange={(value) => Math.round(this.setState({ value }))}
                        maximumValue={10}
                        minimumValue={1}
                        thumbStyle={StressScreenStyles.thumbStyle}
                        thumbTintColor='#FBD48E'
                    />
                    <Text style={{ fontFamily: 'Abel_400Regular', alignSelf: 'center', textAlign: 'center', fontSize: 20 }} >Stress Level {Math.round(this.state.value)}</Text>
                    <Text />
                    <Text style={{ fontFamily: 'Abel_400Regular', alignSelf: 'center', textAlign: 'center', fontSize: 25 }}> You are feeling</Text>
                    <Text style={{ fontFamily: "Quicksand_400Regular", alignSelf: 'center', textAlign: 'center', fontSize: 18 }} >{Selection(Math.round(this.state.value))}</Text>
                    <Text />
                    <Text style={{ fontFamily: 'Abel_400Regular', alignSelf: 'center', textAlign: 'center', fontSize: 25 }}> Breathing Regiment</Text>
                    <Text style={{ fontFamily: "Quicksand_400Regular", alignSelf: 'center', textAlign: 'center', fontSize: 18 }} >{BreathingRate(Math.round(this.state.value))} </Text>
                </View>
                <View style={StressScreenStyles.continueButton}>
                    <Text style={{ fontFamily: 'Abel_400Regular', alignSelf: 'center', fontSize: 20 }} onPress={() => this.props.navigation.navigate('TestingWaves', { inhaleTime: inhaleSelection(Math.round(this.state.value)), topHoldTime: topHoldSelection(Math.round(this.state.value)), exhaleTime: exhaleSelection(Math.round(this.state.value)), bottomHoldTime: bottomHoldSelection(Math.round(this.state.value)) })}>CONTINUE</Text>
                </View>
            </View>
        );
    }
}

// The functions listed below operate identically, and are called upon from the stress screen.  Essentially they just show what the different values are for each stress level and change their display as the user changes their input on the slider

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

// This is the function for the page that should hold the animation when the page is complete.  Unfortunately we were unable to succesfully get the animation to worki.

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
            Animated.delay(topHoldTime * 1000),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: exhaleTime * 1000,
                useNativeDriver: true
            }),
            Animated.delay(bottomHoldTime * 1000)
        ]), {
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

// This function is to be used to display the action the user should be doing alongside the animation, but both break when we try to run them together

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

// All styles used are listed here, and all are named according to the page they are used on

const MainScreenStyles = StyleSheet.create({
    mainStyle: {
        backgroundColor: 'white',
        flex: 1,
    },
    topMenu: {
        top: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
    },
    selectionArea: {
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
    bottomButtonArea: {
        flex: 0.75,
        top: '10%',
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    Bottombuttons: {
        //backgroundColor: '#35CD96',
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button1Text: {
        fontFamily: "Abel_400Regular",
        fontSize: 55,
        fontWeight: "500",
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    button2Text: {
        fontFamily: "Abel_400Regular",
        fontSize: 40,
        fontWeight: "500",
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    WaterlooLogo: {
        width: 1050,
        height: 419,
        flex: 1,
        // top: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },


})

const FocusScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        // flex: 1,
    },
    selections: {
        // backgroundColor: '#68F5B2',
        // width: 300,
        // height: 50,
        top: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    },

    text: {

        fontSize: 15,
    }
})

const BeginnerScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        top: '10%',
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
        backgroundColor: '#25CB99',
        alignSelf: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,

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
        fontFamily: 'Quicksand_500Medium',
        alignSelf: 'center',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 27,
        fontFamily: 'Abel_400Regular',
        alignSelf: 'center',
        textAlign: 'center',
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
        fontFamily: 'Abel_400Regular',
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
        fontFamily: 'Abel_400Regular',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    paragrapht: {

        fontFamily: 'Quicksand_500Medium',
        flexWrap: 'wrap',
        fontSize: 14,
    },
    paragraphtlink: {
        flex: 1,
        //display: 'inline',
        fontFamily: 'Abel_400Regular',
        color: '#3e8a79',
        fontWeight: 'bold',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    paragraphText: {
        fontFamily: 'Abel_400Regular',
        alignSelf: 'center',
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: 'Abel_400Regular',
        fontSize: 25,
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
})

const StressScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        top: '10%',
        alignSelf: 'center'
    },
    titleText: {
        fontFamily: 'Abel_400Regular',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0,
    },
    container: {
        // top: '10%',
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
        // fontFamily: "Abel_400Regular",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    continueButton: {
        height: 75,
        width: 150,
        bottom: '5%',
        justifyContent: 'center',
        backgroundColor: '#FBD48E',
        alignSelf: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
    },
    continueText: {
        fontSize: 20,
        alignSelf: 'center',
    },
});


const CustomRStyles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        top: '10%',
        alignSelf: 'center'
    },
    titleText: {
        fontFamily: 'Abel_400Regular',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0,
    },
    containerInhale: {
        flexDirection: "row",
        alignSelf: 'center',
        // top: '10%',
        // flex: 1,
        // width: '90%',
        // left: '5%',
        // alignItems: "stretch",
        // justifyContent: "center"
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
    breatheBall: {
        width: SIZE * 0.4,
        height: SIZE * 0.4,
        position: 'absolute',
        backgroundColor: 'purple',
        borderRadius: SIZE * 0.2,
    }
})

const Stack = createStackNavigator();

function App() {
    let [fontsLoaded] = useFonts({
        Abel_400Regular, Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
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
}

export default App;

// For understanding containers and navigators check out https://www.youtube.com/watch?v=ufvDlmDg2L4

