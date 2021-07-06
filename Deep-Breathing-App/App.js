import 'react-native-gesture-handler'
import 'react-navigation'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    ScrollView,
    AppRegistry,
    Animated,
    Linking,
} from 'react-native';
import { Slider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

function MainScreen({ navigation }) {
    return (
        <View style={styles.mainStyle} >
            <View style={styles.topSelections}>
                <View style={styles.resourcesStyle}>
                    <Text onPress={() => navigation.navigate('ResourcesScreen')}>Resources</Text>
                </View>
                <View style={styles.informationStyle} >
                    <Text onPress={() => navigation.navigate('InformationScreen')}>Information</Text>
                </View>
            </View>
            <View style={styles.titleText}>
                <Text style={styles.textStyle}>Main Page</Text>
                <Text style={styles.sinWavesStyle} onPress={() => navigation.navigate('TestingWaves', { value: 2 })}>Sin Waves</Text>
            </View>
            <View style={styles.buttonsBack}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('PanicScreen')}>
                    <View style={styles.buttonPanic}>
                        <Text style={styles.buttonText}>Panic Button</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.bottomButtons}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('FocusScreen')}>
                        <View style={styles.buttonFocus}>
                            <Text style={styles.buttonText}>Focus Button</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('StressScreen')}>
                        <View style={styles.buttonStress}>
                            <Text style={styles.buttonText}>Stress Button</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    );
}

function FocusScreen({ navigation }) {
    return (
        <View style={styles.main} >
            <Text style={styles.text}>Focus Screen</Text>
            <Text style={styles.text} onPress={() => navigation.navigate('MainScreen')}>Return to main</Text>
        </View>
    );
}

function InformationScreen({ navigation }) {
    return (
        <View style={styles.main}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleBox}>
                    <Text style={styles.hiddenText}>Return to main</Text>
                    <Text style={styles.title}>Information</Text>
                    <Text style={styles.return} onPress={() => navigation.navigate('MainScreen')}>Return to main</Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={styles.paragraphText}> </Text>
                    <Text style={styles.paragraphText}>Thank you for your interest in Waterloo Deep Breathing! This application was developed in partnership with the University of Waterloo Faculty of Engineering IDEAs Clinic, SHEN Spiritual Heritage Education Network, and the University of Waterloo Engineering Wellness (ENGWellness) Program.  </Text>
                    <Text style={styles.paragraphText}> </Text>
                    <Text style={styles.paragraphText}>The purpose of this application is to aid individuals with reducing their stress response (deactivating the Sympathetic Nervous System (SNS)) through various deep breathing exercises in an effort to elicit a relaxation response (activating the Parasympathetic Nervous System (PSNS)). Research has readily proven that breathing exercises can effectively help individuals reduce their physiological response to stress and stressful stimuli. </Text>
                    <Text style={styles.paragraphText}> </Text>
                    <Text style={styles.paragraphText}>Users can choose from three main options, each with different functionality and preferences: </Text>
                    <Text style={styles.paragraphText}> </Text>
                    <Text style={styles.subtitle}>Focus:</Text>
                    <Text style={styles.paragraphText}>The Focus Mode allows users to select from preset breathing techniques or customize their breathing rate as they see fit. This option is great for those testing out the app, practicing deep breathing techniques, or want to establish a base-line for their preferred breathing rate. We recommend this option for those experiencing a mild stress response.  </Text>
                    <Text style={styles.paragraphText}> </Text>
                    <Text style={styles.subtitle}>Stress:</Text>
                    <Text style={styles.paragraphText}>The Stress Mode provides less options for the user to specify and instead asks the user to determine their level of stress (correlated with ‘breaths per minute’) using a scroll bar. Once the level of stress has been identified, the app will begin a preloaded breathing regimen to aid the user with reducing their breathing rate and enacting a relaxation response. We recommend this option for those experiencing a mild to moderate stress response.  </Text>
                    <Text style={styles.paragraphText}> </Text>
                    <Text style={styles.subtitle}>Panic:</Text>
                    <Text style={styles.paragraphText}>The Panic Mode immediately jumps into a preloaded deep breathing regimen to reduce a user’s acute stress response. After a series of intervals, the app will ask the user if they would like to reduce their breathing rate (breaths per minute) or keep at the current level. We recommend this option for those experiencing a moderate to severe stress response. *  </Text>
                    <Text style={styles.paragraphText}> </Text>
                    <Text style={styles.paragraphText} onPress={() => navigation.navigate('ResourcesScreen')}>* Please note, this application is not a diagnostic tool and is not intended to substitute advice/support from a medical or mental health professional. Users experiencing frequent severe and acute stress responses should seek support from a medical professional.  To be taken to a list of resources, click here.</Text>
                </View>
            </ScrollView>
        </View>
    );
}

function PanicScreen({ navigation }) {
    return (
        <View style={styles.main} >
            <Text style={styles.title}>Panic Screen</Text>
            <Text style={styles.title} onPress={() => navigation.navigate('MainScreen')}>Return to main</Text>
            <Text style={styles.text}>Insert Text Here</Text>
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
        <View style={styles.main}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleBox}>
                    <Text style={styles.hiddenText}>Return to main</Text>
                    <Text style={styles.title}>Resources</Text>
                    <Text style={styles.return} onPress={() => navigation.navigate('MainScreen')}>Return to main</Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={styles.paragraphText}> </Text>
                    <Text style={styles.titleText}>Helpful Resources</Text>
                    <Text style={styles.paragraphText}> </Text>
                    <Text style={styles.paragraphText}>UW Counselling Services: 519-888-4567, ext. 32655 (Mon 8:30am - 7:30pm, Tues - Fri 8:30am - 4:30pm)  </Text>
                    <Text style={styles.paragraphText}> </Text>
                    <Text style={styles.subtitle}>After Hours:</Text>
                    <Text style={styles.paragraphText}> </Text>
                    <Text style={styles.paragraphText}>Empower Me, Mental Health Resources (for UG and Grad students): 1-844-741-6389 </Text>
                    <Text style={styles.paragraphText}>Good2Talk (confidential help line for post-secondary students): 1-866-5454 </Text>
                    <Text style={styles.paragraphText}>Here24/7 (Waterloo Region mental health and crisis services team): 1-844-437-3247 </Text>
                    <Text style={styles.paragraphText}> </Text>
                    <Text style={styles.subtitle}>On-Campus Emergencies:</Text>
                    <Text style={styles.paragraphText}>UW Police: 519-888-4567, ext. 22222  </Text>
                    <Text style={styles.paragraphText}> </Text>
                    //<Text style={styles.paragraphText} onPress={() => navigation.navigate('ResourcesScreen')}>* Please note, this application is not a diagnostic tool and is not intended to substitute advice/support from a medical or mental health professional. Users experiencing frequent severe and acute stress responses should seek support from a medical professional.  To be taken to a list of resources, click here.</Text>
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
            <View style={styles.main} >
                <View style={styles.title}>
                    <Text style={styles.titleText} >How Stressed Are You Feeling Today?</Text>
                </View>
                <View style={styles.container}>
                    <Slider
                        value={this.state.value}
                        onValueChange={(value) => this.setState({ value })}
                        maximumValue={10}
                        minimumValue={1}
                        thumbStyle={styles.thumbStyle}
                        thumbTintColor='#Dc6ee5'
                    />
                    <Text style={styles.decisionStyle} >Stress Level: {Math.round(this.state.value)}</Text>
                </View>
                <View style={styles.continueButton}>
                    <Text style={styles.continueText} onPress={() => this.props.navigation.navigate('TestingWaves', { value: Math.round(this.state.value) })}>Continue</Text>
                </View>
            </View>
        );
    }
}

function TestingWaves({ route, navigation }) {

    const { value } = route.params;

    return (
        <View style={styles.main} >
            <Text style={styles.text} onPress={() => navigation.navigate('MainScreen')}>Return to main</Text>
            <Text style={styles.text}>Stress Level: {value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
        top: '25%',
    },
    buttonPanic: {
        backgroundColor: '#FF7575',
        width: 200,
        height: 200,
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
    buttonFocus: {
        backgroundColor: '#049A64',
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStress: {
        backgroundColor: '#53D396',
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "500",
    },
    textStyle: {
        color: 'dodgerblue',
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
        top: 25,
    },
    informationStyle: {
        top: 25,
    },
    topSelections: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
    }
})

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="FocusScreen" component={FocusScreen} />
                <Stack.Screen name="InformationScreen" component={InformationScreen} />
                <Stack.Screen name="PanicScreen" component={PanicScreen} />
                <Stack.Screen name="ResourcesScreen" component={ResourcesScreen} />
                <Stack.Screen name="StressScreen" component={StressScreen} initialParams={{ value: 2 }} />
                <Stack.Screen name="TestingWaves" component={TestingWaves} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

// For understanding containers and navigators check out https://www.youtube.com/watch?v=ufvDlmDg2L4

