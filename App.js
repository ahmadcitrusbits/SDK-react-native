/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Button,
  View,
} from 'react-native';
import Qualtrics from 'react-native-qualtrics';

export const INTERCEPT_ID = 'SI_884jdLI12iIidsG';
export const INTERCEPT_ID2 = 'SI_6zBO6jCXLfy02vc';
export const BRAND_ID = 'northwestcompany';
export const PROJECT_ID = 'ZN_1BUTdAdrNbaHMrA';

function initMe() {
  console.log('Initializing...');
  Qualtrics.initializeProjectWithExtRefId(
    BRAND_ID,
    PROJECT_ID,
    "61c2fbeec84946002434d779",
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

const App = () => {

  return (
    <SafeAreaView>
        <View><Button title="Initialize Me" onPress={() => initMe()} /></View>
        <View><Button title="Evaluate and Display Me" onPress={() => evalMe()} /></View>
    </SafeAreaView>
  );
};

export default App;
