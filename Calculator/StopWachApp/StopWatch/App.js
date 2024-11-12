import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function App() {
  const [time, setTime] = useState('00:00:00');
  const [lapList, setLapList] = useState([]);
  const [timerIsRun, setTimerIsRun] = useState(false);
  const [status, setStatus] = useState(null);
  
  let seconds = useRef(0);
  let minutes = useRef(0);
  let hours = useRef(0);
  let intervalRef = useRef(null);

  const formatNumber = (number) => {
    return number < 10 ? '0' + number : number;
  };

  const counter = () => {
    seconds.current += 1;
    if (seconds.current >= 60) {
      seconds.current = 0;
      minutes.current += 1;
      if (minutes.current >= 60) {
        minutes.current = 0;
        hours.current += 1;
      }
    }
    
    setTime(`${formatNumber(hours.current)}:${formatNumber(minutes.current)}:${formatNumber(seconds.current)}`);
  };

  const start = () => {
    if (!timerIsRun) {
      if (status === "reset") {
        seconds.current = minutes.current = hours.current = 0;
      }
      intervalRef.current = setInterval(counter, 1000);
      setStatus("start");
      setTimerIsRun(true);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setStatus("stop");
    setTimerIsRun(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime('00:00:00');
    setLapList([]);
    setStatus("reset");
    setTimerIsRun(false);
    seconds.current = minutes.current = hours.current = 0;
  };

  const lap = () => {
    if (timerIsRun) {
      setLapList(prevLaps => [...prevLaps, 
        { id: prevLaps.length + 1, time: time }
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.screen}>{time}</Text>
        
        <View style={styles.buttons}>
          <TouchableOpacity 
            style={[styles.button, styles.startButton]} 
            onPress={start}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.stopButton]} 
            onPress={stop}>
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.resetButton]} 
            onPress={reset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.lapButton]} 
            onPress={lap}>
            <Text style={styles.buttonText}>Lap</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.lapListContainer}>
        <ScrollView style={styles.lapList}>
          {lapList.map((lap) => (
            <View key={lap.id} style={styles.lapItem}>
              <Text style={styles.lapText}>
                Lap {lap.id}: {lap.time}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  topSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  screen: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    width: '48%',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: '#4CAF50',
  },
  stopButton: {
    backgroundColor: '#f44336',
  },
  resetButton: {
    backgroundColor: '#2196F3',
  },
  lapButton: {
    backgroundColor: '#FF9800',
  },
  lapListContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  lapList: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  lapItem: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  lapText: {
    fontSize: 16,
    color: '#333',
  }
});