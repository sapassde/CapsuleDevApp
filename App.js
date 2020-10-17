import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './screens/Main';

const Stack = createStackNavigator();

const App = (props) => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={ Main } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;