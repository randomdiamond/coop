import { StyleSheet, Text, View,SafeAreaView,TextInput,Image } from 'react-native';
import { Slot, Link, usePathname, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import logo from '../assets/koop_logo.png'
export default function AppLayout() {
    return (
      
        
          
          <View style={styles.navContainer}>
            <View style={styles.navContainerTop}>
             
              
              <Image source={logo} style={styles.logo} />
              <FontAwesome name="gear" size={35} color="#000" />
            </View>
            <View style={styles.navContainerBottom}>
              <TextInput 
                placeholder="Search here..."
                style={styles.input}
              />
            </View>
          
          
        </View>
        
      )
    
  }
  const styles = StyleSheet.create({
    
    navContainer: {
      backgroundColor: '#FFA500', // Light orange background
      paddingHorizontal: 10,
      paddingTop: 50,
      paddingBottom: 10,
    },
    navContainerTop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal:10,
    },
    logo: {
      flex:0.5,
      
      aspectRatio:3.51
    },
    navContainerBottom: {
      marginTop: 10,
      
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 15,
      padding: 10,
      fontSize: 16,
      backgroundColor: '#fff',
    },
  });