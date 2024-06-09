import { Text, StyleSheet, View } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.call}>
      <Text style={styles.CallerName}>Jcob Beaulieu</Text>
      <Text style={styles.status}>online</Text>
    </View>
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
    call: {
      backgroundColor: "blue",
      width: 350,
      height: 100,
      marginLeft:20,
      marginTop:10,
      borderRadius: 10,
    },
    CallerName:{
      marginLeft: 80,
      marginTop:25,
      fontWeight:500,
      fontSize:20
    },
    status:{
      color: "#00FF40",
      fontWeight:500,
      marginLeft: 80,
    }
});
