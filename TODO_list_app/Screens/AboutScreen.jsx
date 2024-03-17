import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  const currentDate = new Date().toDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.appName}>To Do List V.5.0</Text>
        <Text style={styles.authorName}>Danrel Lu</Text>
        <Text style={styles.currentDate}>Current Date: {currentDate}</Text>
      </View>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  authorName: {
    fontSize: 18,
    marginBottom: 10,
  },
  currentDate: {
    fontSize: 16,
  },
});

export default AboutScreen;
