import React from 'react';
import { 
  Image, 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  TouchableOpacity, 
  TouchableHighlight, 
  Dimensions, 
  ScrollView
} from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
});
