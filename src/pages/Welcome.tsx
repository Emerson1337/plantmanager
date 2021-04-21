import React, { useState } from 'react';
import {
  SafeAreaView,
  Dimensions,
  Text, View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import wateringImg from '../assets/watering.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {

  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('User')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de{'\n'}
          forma fácil!
        </Text>
        <Image
          source={wateringImg}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Text>
            <Feather
              name="chevron-right"
              style={styles.buttonIcon}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 32,
    //fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 38
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 17,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
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
    height: Dimensions.get('window').width * 0.7,
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white
  }
})