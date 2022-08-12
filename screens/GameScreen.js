import { Text, View, StyleSheet, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';
function randomNumber(max, min, value) {
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === value) {
    return randomNumber(max, min, random);
  } else {
    return random;
  }
}
let Max = 100;
let Min = 1;
function Game({ userNumber, onGameOver }) {
  const initailGuess = randomNumber(100, 1, userNumber);
  const [currentGuess, setCurruntGuess] = useState(initailGuess);
  const [guessRounds, setGuessRounds] = useState([initailGuess]);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    Max = 100;
    Min = 1;
  }, []);

  function nextGuessHndeler(value) {
    if (
      (value === 'lower' && currentGuess < userNumber) ||
      (value === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (value === 'lower') {
      Max = currentGuess;
    } else {
      Min = currentGuess;
    }
    const newRandom = randomNumber(Max, Min, currentGuess);
    setCurruntGuess(newRandom);
    setGuessRounds((prevGuessRoundes) => [...prevGuessRoundes, newRandom]);
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.textInput}> Guess The Number ? </Text>

      <View style={styles.container}>
        <Text style={styles.number}>{currentGuess}</Text>
      </View>
      <View>
        <PrimaryButton onPress={nextGuessHndeler.bind(this, 'greater')}>
          <Ionicons name="md-add" size={24} color="white" />
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHndeler.bind(this, 'lower')}>
          <Ionicons name="md-remove" size={24} color="white" />
        </PrimaryButton>
      </View>
    </View>
  );
}

export default Game;
const styles = StyleSheet.create({
  screen: {
    flex: 1,

    padding: 12,
  },
  textInput: {
    borderColor: 'white',
    borderWidth: 2,
    padding: 8,
    margin: 8,
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    borderWidth: 4,
    borderColor: 'yellow',
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 35,
    color: 'yellow',
    fontWeight: 'bold',
  },
});
