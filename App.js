/*
* File: App.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-17
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
        <Header />
        <Body />
        <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
