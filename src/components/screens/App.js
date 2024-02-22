import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Home from '../../../Home';
import PlanningScreen from '../../../PlanningScreen';
import LoginScreen from '../../../LoginScreen'; // Assurez-vous que le chemin est correct
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLogged: false
    };
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <NavigationContainer>
          <Stack.Navigator>
            {/* Ajoutez la condition de vérification de l'état de connexion ici pour afficher soit l'écran de connexion soit l'écran d'accueil */}
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlanningScreen"
              component={PlanningScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

export default App;
