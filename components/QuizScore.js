import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { white, red } from '../utils/colors';
import { Button } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

const QuizScore = ({ score, retakeQuiz, goBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>You score is</Text>

      <Text style={[styles.score, { color: score > 50 ? "#080" : red }]}>{score}%</Text>

      <View style={styles.btnGroup}>
        <View style={styles.btnContainer}>
          <Button
            onPress={retakeQuiz}
            buttonStyle={{
              height: 50,
              backgroundColor: "#000"
            }}
            icon={ <FontAwesome5 name="redo-alt" size={24} color={white} style={{marginRight: 10}} /> }
            title="Retake quiz"
            type="solid"
            raised
          />
        </View>

        <View style={styles.btnContainer}>
          <Button
            onPress={goBack}
            buttonStyle={{
              height: 50,
              backgroundColor: "#000"
            }}
            icon={ <Ionicons name="md-arrow-round-back" size={24} color={white} style={{marginRight: 10}} /> }
            title="Go back"
            raised
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    paddingTop: 100,
    backgroundColor: white,
    minHeight: Dimensions.get("window").height,
    maxHeight: Dimensions.get("window").height
  },
  header: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 40,
    marginBottom: 100
  },
  score: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
  },
  btnGroup: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "flex-end",
    marginVertical: 40,
  },
  btnContainer: {
    marginBottom: 20
  },
})
 
export default QuizScore;