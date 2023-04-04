import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import MainButton from '../MainButton';

const GameOverScreen = props => {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.screen}>
        <Text style={styles.resultText}>The Game is over!!</Text>
        <View style={styles.imageContainer}>
          <Image
            //source={require('../../assets/avatar.png')} THIS IS FOR LOCAL IMG
            source={{
              uri: 'https://madisonmountaineering.com/wp-content/uploads/2018/01/GM-on-Mount-Vinson-summit-scaled.jpg',
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.resultText}>
          Number of rounds {props.roundsNumber}
        </Text>
        <Text style={styles.resultText}>Number was {props.userNumber}</Text>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingVertical: 10,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    height: '41.5%',
    width: Dimensions.get('window').width > 380 ? '80%' : '65%',
    maxWidth: '90%',
    borderRadius: 200,
    borderColor: 'black',
    borderWidth: 3,
    overflow: 'hidden',
    marginVertical: 30,
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default GameOverScreen;
