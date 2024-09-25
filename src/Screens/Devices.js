import React from 'react';
import { View, Text, Image, Switch, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DeviceCard = ({ deviceName, status, iconUrl, gaugeUrl, isEnabled, toggleSwitch }) => (
  <View style={styles.deviceCard}>
    <View style={styles.deviceInfo}>
      <Image source={{ uri: iconUrl }} style={styles.deviceImage} />
      <View style={styles.deviceText}>
        <Text style={styles.deviceTitle}>{deviceName}</Text>
        <Text style={styles.deviceStatus}>{status}</Text>
      </View>
    </View>
    <View style={styles.deviceStatusContainer}>
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        trackColor={{ false: '#ccc', true: '#4caf50' }}
        thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
      />
      <Image source={{ uri: gaugeUrl }} style={styles.gaugeImage} />
    </View>
  </View>
);

const App = () => {
  const [isBinSmartEnabled, setBinSmartEnabled] = React.useState(true);
  const [isAquaNurtureEnabled, setAquaNurtureEnabled] = React.useState(true);
  const [isAutoSortBinEnabled, setAutoSortBinEnabled] = React.useState(true);
  const [isFloodAlertEnabled, setFloodAlertEnabled] = React.useState(true);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Image source={{ uri: 'https://placehold.co/100x50?text=Device+Alert+Icon' }} style={styles.headerImage} />
          <Text style={styles.headerTitle}>Device Alert</Text>
        </View>

        {/* Devices List */}
        <View style={styles.deviceList}>
          <View style={styles.deviceListHeader}>
            <Text style={styles.deviceListTitle}>My Devices</Text>
            <TouchableOpacity style={styles.addDeviceButton}>
              {/* <Icon name="plus-circle" size={16} color="green" /> */}
              <Image
              source={require('../Images/Addp.png')}
              style={styles.icon}/>
              <Text style={styles.addDeviceText}>Add new Device</Text>
            </TouchableOpacity>
          </View>

          {/* Device Cards */}
          <Image source ={require('../Images/BinS.jpeg')}
style ={{
width:50,
height :60,
resizeMode : 'contain',
position:'center',
top:5,
bottom:0,
marginBottom:-60,
}}
/>
<View>
          <DeviceCard
            deviceName="BinSmart"
            status="Filled"
            iconUrl="https://placehold.co/50x50?text=BinSmart"
            gaugeUrl="https://placehold.co/50x50?text=Gauge"
            isEnabled={isBinSmartEnabled}
            toggleSwitch={() => setBinSmartEnabled(!isBinSmartEnabled)}
          />
        <Image source ={require('../Images/AquaN.jpeg')}
style ={{
width:50,
height :60,
resizeMode : 'contain',
position:'center',
top:5,
bottom:0,
marginBottom:-60,
}}
/>
</View>
          <DeviceCard
            deviceName="AquaNurture"
            status="Moisture"
            iconUrl="https://placehold.co/50x50?text=AquaNurture"
            gaugeUrl="https://placehold.co/50x50?text=Meter"
            isEnabled={isAquaNurtureEnabled}
            toggleSwitch={() => setAquaNurtureEnabled(!isAquaNurtureEnabled)}
          />
          <Image source ={require('../Images/AutoS.jpeg')}
style ={{
width:50,
height :60,
resizeMode : 'contain',
position:'center',
top:5,
bottom:0,
marginBottom:-60,
}}
/>
          <DeviceCard
            deviceName="AutoSort Bin"
            status="Segregation"
            iconUrl="https://placehold.co/50x50?text=AutoSort+Bin"
            gaugeUrl="https://placehold.co/50x50?text=Gauge"
            isEnabled={isAutoSortBinEnabled}
            toggleSwitch={() => setAutoSortBinEnabled(!isAutoSortBinEnabled)}
          />
          <Image source ={require('../Images/FA.jpeg')}
style ={{
width:50,
height :60,
resizeMode : 'contain',
position:'center',
top:5,
bottom:0,
marginBottom:-60,
}}
/>
          <DeviceCard
            deviceName="FloodAlert"
            status="Water Level"
            iconUrl="https://placehold.co/50x50?text=FloodAlert"
            gaugeUrl="https://placehold.co/50x50?text=Gauge"
            isEnabled={isFloodAlertEnabled}
            toggleSwitch={() => setFloodAlertEnabled(!isFloodAlertEnabled)}
          />
        </View>
      </ScrollView>

      
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerImage: {
    width: 100,
    height: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    color: 'black'
  },
  icon: {
    height: 16,
    width: 16,
    borderRadius: 50,
  },
  deviceList: {
    backgroundColor: '#d9d9d9',
    margin: 20,
    borderRadius: 10,
    padding: 10,
  },
  deviceListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  deviceListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  addDeviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addDeviceText: {
    color: 'green',
    marginLeft: 5,
  },
  deviceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deviceImage: {
    width: 50,
    height: 50,
  },
  deviceText: {
    marginLeft: 10,
  },
  deviceTitle: {
    fontWeight: 'bold',
  },
  deviceStatus: {
    fontSize: 12,
  },
  deviceStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gaugeImage: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  footer: {
    backgroundColor: '#004d00',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 12,
    marginTop: 2,
  },
});

export default App;