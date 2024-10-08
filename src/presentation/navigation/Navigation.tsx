import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';

export type RootstackParams={
    Home: undefined;
    Details: {movieId: number}
}

const Stack = createStackNavigator<RootstackParams>();

export const Navigation = ()=> {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreens} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}