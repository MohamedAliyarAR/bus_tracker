import MapView, {Marker} from 'react-native-maps';
import { View } from 'react-native-web';
import { StyleSheet,Dimensions } from 'react-native';


const Mapcomponent =({coordinates})=>{

    if (!coordinates){
      return 0
    }
  
   
  
    return(
      <View>
              <View style={styles.container}>
              <View style={styles.mapContainer}>
                  <MapView style={styles.map} region={ {latitude:coordinates.f_latitude,
       longitude: coordinates.f_longitude} }>
                  <Marker coordinate={{latitude:coordinates.f_latitude,
       longitude: coordinates.f_longitude}} title="marker"/>
                  </MapView>
              </View>
              </View>
      </View>
    )
  }

  export default Mapcomponent


  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: windowWidth,
    height: windowHeight,
  },
});