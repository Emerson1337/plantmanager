import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import wateringImg from '../assets/watering.png';
import { Button } from '../components/ButtonComponent';
import colors from '../styles/colors';

export function Welcome() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil!
      </Text>
      <Image source={wateringImg} style={styles.image} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      <Button title={'>'} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 17,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  image: {
    width: 292,
    height: 284,
  },
  buttonText: {
    color: colors.white,
  }
})
