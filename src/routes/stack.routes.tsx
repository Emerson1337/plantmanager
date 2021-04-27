import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';

const stackRoutes = createStackNavigator();

import colors from '../styles/colors'
import { PlantSelect } from '../pages/PlantSelect';
import AuthRoutes from './tab.routes';

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      },
    }}
  >
    <stackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />
    <stackRoutes.Screen
      name="User"
      component={UserIdentification}
    />
    <stackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    />
    <stackRoutes.Screen
      name="SelectPlant"
      component={AuthRoutes}
    />
    <stackRoutes.Screen
      name="PlantSave"
      component={PlantSave}
    />
    <stackRoutes.Screen
      name="MyPlants"
      component={AuthRoutes}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes;
