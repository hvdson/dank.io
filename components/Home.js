import React from 'react';
import { Button, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import KICK from '../assets/Kick.wav'
import CLAP from '../assets/Clap.wav'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currSample: 'KICK'
    }
  }

  _playKick = async () => {
    const soundObject = new Expo.Audio.Sound();
    try {
      await soundObject.loadAsync(KICK);
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  }

  _playClap = async () => {
    const soundObject = new Expo.Audio.Sound();
    try {
      await soundObject.loadAsync(CLAP);
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    return ( 
      <View style={styles.container}>

        <View style={styles.row}>
          <TouchableOpacity style={styles.kick} onPress={this._playKick}>
            <Text>KICK</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.clap} onPress={this._playClap}>
            <Text>CLAP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.clap} onPress={this._playClap}>
            <Text>CLAP</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.kick} onPress={this._playKick}>
            <Text>KICK</Text>
          </TouchableOpacity>
          
        </View>
      
      </View>
    )
  }

  componentDidMount() {
    Expo.Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Expo.Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Expo.Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  kick: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  },
  clap: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

