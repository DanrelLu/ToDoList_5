import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainLayout = ({ children }) => {
  const footer = () =>{
    return(
      <Text>Hi</Text>
    );
  };
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;