import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import News from '../source/News';
import WebView from '../source/WebView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="News"
          component={News}
          options={{title: null, headerShown: false}}
        />
        <Stack.Screen
          name="WebView"
          component={WebView}
          //   options={{ title: null , gestureEnabled:true, headerShown:false}}
          // options={{
          //     title: 'My home',
          //     headerStyle: {
          //       backgroundColor: '#0c084c',
          //     },
          //     headerTintColor: '#fff',
          //     headerTitleStyle: {
          //       fontWeight: 'bold',
          //     },
          //   }}
          // options={({route}) => ({
          //   title: route.params.name,
          //   headerStyle: {
          //     backgroundColor: '#0c084c',
          //   },
          //   headerTintColor: '#fff',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //   },
          // })}
          options={{title: null, headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
