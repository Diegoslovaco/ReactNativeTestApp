
import * as React from 'react';
import { Button, View, Text } from 'react-native';


function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>El mecho</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }

  export default NotificationsScreen;