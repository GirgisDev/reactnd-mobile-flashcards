import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DeckDetails from './DeckDetails';
import AddNewDeck from './AddNewDeck';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddDeck" component={AddNewDeck} />
      <Stack.Screen name="Details" component={DeckDetails} />
    </Stack.Navigator>
  );
}
 
export default StackNavigator;