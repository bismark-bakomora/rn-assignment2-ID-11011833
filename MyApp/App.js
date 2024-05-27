import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style={styles.boldText}>Bakomora Bismark Zebill</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AD45',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  text: {
    fontSize: 24,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
