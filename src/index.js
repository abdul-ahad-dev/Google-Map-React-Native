import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function GoogleMap() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GoogleMap</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dadada',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });