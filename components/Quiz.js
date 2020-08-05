import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { white, gray } from '../utils/colors';
import { Button } from 'react-native-elements';
import QuizQuestions from './QuizQeustions';
import QuizScore from './QuizScore';
import { clearLocalNotification, setLocalNotification } from '../utils/_decks';

const Quiz = ({ decks, route, navigation }) => {
  const deckId = route.params ? route.params.id : null;
  const deck = deckId ? decks[deckId] : null;
  const deckTitle = deck.title.length <= 10 ? deck.title : deck.title.slice(0, 10) + "...";

  navigation.setOptions({ headerBackTitleVisible: true });
  navigation.setOptions({ headerBackTitle: deckTitle });
  navigation.setOptions({ title: "Quiz" });

  const goBack = () => {
    navigation.goBack();
  }

  if (!deck.questions.length) return (
    <View style={styles.noContentContainer}>
      <Text style={styles.noContentText}>
        Sorry, you cannot take a quiz because there are no cards in the deck.
      </Text>
      <Button
        onPress={goBack}
        buttonStyle={{
          height: 50,
          backgroundColor: "#000"
        }}
        title="Go back"
        type="solid"
        raised />
    </View>
  )

  const [finishedQuiz, setFinishedQuiz] = useState(false);
  const [score, setScore] = useState(0);
  
  const calcScore = () => {
    const calculatedScore = (score / deck.questions.length) * 100;
    return calculatedScore.toString().length >= 3 ? parseFloat(calculatedScore).toPrecision(3) : calculatedScore
  }

  const retakeQuiz = () => {
    setFinishedQuiz(false);
    setScore(0);
  }

  const HandleFinishedQuiz = () => {
    setFinishedQuiz(true);
    clearLocalNotification().then(setLocalNotification)
  }

  return (
    <View>
      {finishedQuiz 
        ? <QuizScore 
            score={calcScore()}
            retakeQuiz={retakeQuiz}
            goBack={goBack} />
        : <QuizQuestions 
            questions={deck.questions}
            answeredCorrectly={() => setScore(score + 1)}
            finishedQuiz={HandleFinishedQuiz} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  noContentContainer: {
    backgroundColor: white,
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: "center"
  },
  noContentText: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
  },
  container: {
    backgroundColor: white,
    flex: 1,
    padding: 40,
  },
  header: {
    fontSize: 36,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 10,
  },
  header: {
    fontSize: 36,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 10,
  },
  cardsText: {
    fontSize: 20,
    alignSelf: "center",
    color: gray
  },
  deckDetailsBtn: {
    marginBottom: 20
  },
})
 
const mapStateToProps = decks => ({ decks })
export default connect(mapStateToProps)(Quiz);