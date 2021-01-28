import { StatusBar } from 'expo-status-bar';
import React from 'react';
import getStyleSheet  from './public/css/styles';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native' ; 
import { TextInput, useState  } from 'react-native';



export default function App() {
  const [value, onChangeText] = React.useState('');
  const [UNvalue, onChangeUserName] = React.useState('');

  return (
    <View style={styles.container}>
    <StatusBar style="auto" />

      {/* Top Right and Top Left Background Images*/}
      <Image style={[styles.blue, {}]} source={require('./public/images/blue.png')} />
      <Image style={[styles.pink, {}]} source={require('./public/images/pink.png')} />

      {/*Login Banner*/}
      <Text style={styles.login_baner}>ログイン</Text>
      <Image style={[styles.login_banner_image, {}]} source={require('./public/images/logo.png')} />

      {/*Email and Password Inputs*/}
      <TextInput  placeholder="Ｅメイル"
      style={{ height: 40, borderColor: 'white', textAlign: 'left',   left: -68
      , top: 390}}
      onChangeText={username => onChangeUserName(username)}
      value={UNvalue}
    />
      <View style={[styles.line, {top: 425}]}></View>

      <TextInput placeholder="パスワード"
      style={{ height: 40, borderColor: 'white', left: -60
      , top: 390}}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
      <View style={[styles.line, {top: 463,}]}></View>

      {/*Submit*/}

      <View style={[styles.login, {}]}>
        <View style={styles.login_back}></View>
        <Text style={styles.login_text}>ログイン</Text>
      </View>

   


    </View>
  );
}

const styles = getStyleSheet();
//const styles2 =getStyleSheet

