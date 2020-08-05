import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { white, gray, red } from '../utils/colors';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'; 

const QuizQuestions = ({ questions, answeredCorrectly, finishedQuiz }) => {
  const [showAnswer, setShowAnswer] = useState(0);
  const [qArray, setQArray] = useState([...questions]);

  const answerQuestion = correct => {
    const stillRemainingQuestions = qArray.length > 1;
    if (correct) answeredCorrectly();
    if (!stillRemainingQuestions) {
      finishedQuiz();
      return;
    }
    qArray.shift();
    setQArray([...qArray]);
    setShowAnswer(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.remainingText}>{qArray.length - 1} remaining questions</Text>

      {showAnswer
        ? (
          <View style={styles.flexContainer}>
            <Text style={styles.questionText}>{qArray[0].answer}</Text>

            <View style={styles.btnGroup}>
              <View style={styles.btnContainer}>
                <Button
                  onPress={() => answerQuestion(true)}
                  buttonStyle={{
                    height: 50,
                    backgroundColor: "#080"
                  }}
                  icon={ <FontAwesome name="check" size={24} color={white} style={{marginRight: 10}} /> }
                  title="Correct"
                  type="solid"
                  raised
                />
              </View>

              <View style={styles.btnContainer}>
                <Button
                  onPress={answerQuestion}
                  buttonStyle={{
                    height: 50,
                    backgroundColor: red
                  }}
                  icon={ <FontAwesome name="close" size={24} color={white} style={{marginRight: 10}} /> }
                  title="Incorrect"
                  raised
                />
              </View>
            </View>

          </View>
        )
        : (
          <View>
            <Text style={styles.questionText}>{qArray[0].question}</Text>
            <Button
              onPress={() => setShowAnswer(true)}
              buttonStyle={{
                height: 50,
                backgroundColor: "#000"
              }}
              title="Show answer"
              type="solid"
              raised
            />
          </View>
        )
      }

    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: white,
    minHeight: Dimensions.get("window").height,
    maxHeight: Dimensions.get("window").height
  },
  remainingText: {
    fontSize: 20,
    color: gray,
    marginBottom: 100,
    alignSelf: "center",
  },
  questionText: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 32,
    lineHeight: 45,
    marginBottom: 100
  },
  btnContainer: {
    marginBottom: 20
  },
  btnGroup: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "flex-end",
    marginVertical: 40,
  }
})

export default QuizQuestions;