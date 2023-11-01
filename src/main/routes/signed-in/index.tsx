import { BeansDetails, CoffeeDetails, Home, Cart, Favorites, OrderHistory, Payment } from '../../../presentations/pages/signed-in';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export function SignedIn(){

  const Stack = createNativeStackNavigator<StackSignedInRoutes>()

return (
   <Stack.Navigator>
     <Stack.Screen name='home' component={Home} />
     <Stack.Screen name='beanDetails' component={BeansDetails} />
     <Stack.Screen name='coffeeDetails' component={CoffeeDetails} />
     <Stack.Screen name='cart' component={Cart} />
     <Stack.Screen name='favorites' component={Favorites} />
     <Stack.Screen name='orderHistory' component={OrderHistory} />
     <Stack.Screen name='payment' component={Payment} />
   </Stack.Navigator>
  );
}