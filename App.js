import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import { theme } from './theme/Theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tab1" component={require('./screens/tabs/Tab1').default} />
            <Stack.Screen name="Tab2" component={require('./screens/tabs/Tab2').default} />
            <Stack.Screen name="Tab3" component={require('./screens/tabs/Tab3').default} />
            <Stack.Screen name="Tab4" component={require('./screens/tabs/Tab4').default} />
            <Stack.Screen name="Tab5" component={require('./screens/tabs/Tab5').default} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
