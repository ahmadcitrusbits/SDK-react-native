/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
} from 'react-native';
import Qualtrics from 'react-native-qualtrics';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

function initMe() {
  console.log('Initializing...');
  Qualtrics.initializeProjectWithExtRefId(
    "BRAND ID",
    "PROJECT ID",
    "",
    initializationResults => {
    console.log(initializationResults);
    console.log("Initialization Done");
    },
  );
 }

 function evalMe() {
  console.log("Evaluating...");
  Qualtrics.evaluateProject(targetingResults => {
    console.log(targetingResults);
    for (var intercept in targetingResults) {
      let result = targetingResults[intercept];
      if (result.passed) {
        Qualtrics.display();
      }
    }
    console.log("Evaluation Done");
  });
 }
 
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
        <SafeAreaView style={backgroundStyle}>
        </SafeAreaView>
        <View><Button title="Initialize Me" onPress={() => initMe()} /></View>
        <View><Button title="Evaluate and Display Me" onPress={() => evalMe()} /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default App;
