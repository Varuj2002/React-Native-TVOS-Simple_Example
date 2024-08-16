import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabs from './src/navigation/BottomTabs';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

export default App;
