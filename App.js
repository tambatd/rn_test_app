import { StatusBar } from 'expo-status-bar';
import React from 'react';
import getStyleSheet  from './public/css/styles';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native' ; 
import { TextInput, useState  } from 'react-native';

//const [value, onChangeText] = React.useState('Useless Placeholder');


export default function App() {
  //const [text, setText] = useState('');
  const [value, onChangeText] = React.useState('Login');

  return (
    <View style={styles.container}>
    <StatusBar style="auto" />


      <View style={[styles.blue, {}]}>
        <Image source={require('./public/images/blue.png')} />
      </View>

  

      <View style={[styles.pink, {}]}>
        <Image source={require('./public/images/pink.png')} />
      </View>


      <TextInput underlineColorAndroid={'transparent'}
      style={{ height: 40, border: "None", borderWidth: 1, top: 200}}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
      <View style={[styles.line, {}]}></View>

      <View style={[styles.login, {}]}>
        <View style={styles.login_back}></View>
        <Text style={styles.login_text}>Login</Text>
        
      </View>

   


    </View>
  );
}
//const styles2 =getStyleSheet
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  line:{
    position: "absolute",
    width: 185.01,
    height: 0,
    left: "center",
    top: 463,
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    //border: "1px solid #C4C4C4",
  },
  pink:{
    /* Vector 1 */
    position: "absolute",
    width: 216,
    height: 249.5,
    left: 198.5,
    top: -0.5,
    color: "#FF9DD4"
},
blue:{
    /* Vector 2 */
    position: "absolute",
    width: 216,
    height: 249.5,
    left: 0,
    top: 600,
    color: "#4774D5",
    //transform: [{ rotate: "-180deg" }]
},
login:{
position: "absolute",
width: "174.24",
height: "38",
left: "center",
top: 497,
},
login_text:{
  position: "absolute",
  width: 116.78,
  height: 25.95,
  left: 28.73,
  top: 6.49,
  
  //fontFamily: "Noto Sans Javanese",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: 14.8293,
  lineHeight: 30,
  textAlign: "center",
  
  color: "#000000",
},
login_back:{  
  width: 174,
  height: 38,
  backgroundColor: "#83EFEB",
  borderRadius: 30,
}
});
