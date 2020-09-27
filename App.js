

import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/components/homeScreen';
import Notifications from './src/components/notification';

import { createMyNavigator} from './src/components/customDrawer';


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    
  },

  text:{
    textAlign: 'center',
    textAlignVertical: 'center',   
    fontSize: 20,

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const Drawer = createDrawerNavigator();

const My = createMyNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
        screenOptions={() =>({
          drawerIcon: () =>(
            <Image
              source = {require('./src/images/logo.png')}
              style={{width:30, height:30}}
            />
          )
        })}
      > 
        
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
    </NavigationContainer>
  
    // <NavigationContainer>
    //   <My.Navigator>
    //     <My.Screen name = "Home" component={HomeScreen}/>
    //     <My.Screen name = "Notifications" component={Notifications}/>
    //   </My.Navigator>
    // </NavigationContainer>
    
  
  )
}
