import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/Telas/Principal';
import Tela01 from './src/Telas/Tela01'; // Aang
import Tela02 from './src/Telas/Tela02'; // Katara
import Tela03 from './src/Telas/Tela03'; // Zuko
import Tela04 from './src/Telas/Tela04'; // Toph
import Tela05 from './src/Telas/Tela05'; // Sokka
import Tela06 from './src/Telas/Tela06'; // Azula

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Tela01" component={Tela01} />
        <Stack.Screen name="Tela02" component={Tela02} />
        <Stack.Screen name="Tela03" component={Tela03} />
        <Stack.Screen name="Tela04" component={Tela04} />
        <Stack.Screen name="Tela05" component={Tela05} />
        <Stack.Screen name="Tela06" component={Tela06} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
