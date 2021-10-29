import React from 'react';
import {
  style,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ScrollView
} from 'react-native';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Information'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.main}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.titleBox}>
            <Text style={styles.hiddenText}>Back</Text>
            <Text style={styles.title}>Information</Text>
            <Text style={styles.return} onPress={() => navigate('MainScreen')}>
              Return to main
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.paragraphText}> </Text>
            {/* <Text style={styles.paragraphText}>
              Thank you for your interest in Waterloo Deep Breathing! This
              application was developed in partnership with the University of
              Waterloo Faculty of Engineering IDEAs Clinic, SHEN Spiritual
              Heritage Education Network, and the University of Waterloo
              Engineering Wellness (ENGWellness) Program.{' '}
            </Text> */}
            <Text style={styles.paragraphText}> </Text>
            {/* <Text style = {styles.paragraphText}>The purpose of this application is to aid individuals with reducing their stress response (deactivating the Sympathetic Nervous System (SNS)) through various deep breathing exercises in an effort to elicit a relaxation response (activating the Parasympathetic Nervous System (PSNS)). Research has readily proven that breathing exercises can effectively help individuals reduce their physiological response to stress and stressful stimuli. </Text> */}
            {/* <Text style={styles.paragraphText}> </Text> */}
            {/* <Text style={styles.paragraphText}>
              Users can choose from three main options, each with different
              functionality and preferences:{' '}
            </Text> */}
            {/* <Text style={styles.paragraphText}> </Text> */}
            <Text style={styles.subtitle}>Focus:</Text>
            <Text style={styles.paragraphText}>
              The Focus Mode allows users to select from preset breathing
              techniques or customize their breathing rate as they see fit. This
              option is great for those testing out the app, practicing deep
              breathing techniques, or want to establish a base-line for their
              preferred breathing rate. We recommend this option for those
              experiencing a mild stress response.{' '}
            </Text>
            <Text style={styles.paragraphText}> </Text>
            <Text style={styles.subtitle}>Stress:</Text>
            <Text style={styles.paragraphText}>
              The Stress Mode provides less options for the user to specify and
              instead asks the user to determine their level of stress
              (correlated with ‘breaths per minute’) using a scroll bar. Once
              the level of stress has been identified, the app will begin a
              preloaded breathing regimen to aid the user with reducing their
              breathing rate and enacting a relaxation response. We recommend
              this option for those experiencing a mild to moderate stress
              response.{' '}
            </Text>
            <Text style={styles.paragraphText}> </Text>
            <Text style={styles.subtitle}>Panic:</Text>
            {/* <Text style={styles.paragraphText}>
              The Panic Mode immediately jumps into a preloaded deep breathing
              regimen to reduce a user’s acute stress response. After a series
              of intervals, the app will ask the user if they would like to
              reduce their breathing rate (breaths per minute) or keep at the
              current level. We recommend this option for those experiencing a
              moderate to severe stress response. *{' '}
            </Text> */}
            <Text style={styles.paragraphText}> </Text>
            {/* <Text
              style={styles.paragraphText}
              onPress={() => navigate('ResourcesScreen')}
            >
              * Please note, this application is not a diagnostic tool and is
              not intended to substitute advice/support from a medical or mental
              health professional. Users experiencing frequent severe and acute
              stress responses should seek support from a medical professional.
              To be taken to a list of resources, click here.
            </Text> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    width: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  return: {
    fontSize: 14
  },
  hiddenText: {
    fontSize: 14,
    color: 'white'
  },
  paragraph: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  paragraphText: {
    alignSelf: 'center',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20
  }
});
