import { View, Image, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function GameOverScreen({ userNumber, onRestart, roundesNumber }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.screen}> Game is over! </Text>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/gameOver.jpg')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundesNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#ddb52f',
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    color: '#ddb52f',
  },
  highlight: {
    color: 'red',
  },
});
