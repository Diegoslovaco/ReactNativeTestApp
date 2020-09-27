import * as React from 'react';
import { Button, View, Text } from 'react-native'

function HomeScreen({ navigation }) {
   
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <Button
        onPress={() => navigation.openDrawer()}
        title="open menu"
    />
    <Text>Hello</Text>
      
    </View>
  );
}

export default HomeScreen;