import React from 'react';
import { StyleSheet, ScrollView, Text, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const width = Dimensions.get('window').width;

export default class DashboardScreen extends React.Component {
  static navigationOptions = {
      title: 'Statistics'
  }

  render() {
      const pieData = [
          {
            name: 'PPBM',
            population: 21,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'DAP',
            population: 21,
            color: '#f1c40f',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'UMNO',
            population: 21,
            color: '#c0392b',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          }
      ]

      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      };

    return (
      <ScrollView style={styles.container}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey'}}>Dewan Rakyat</Text>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
              Pecahan Mengikut Parti
            </Text>
        <PieChart 
        data={pieData}
        width={width}
        height={220}
        accessor={'population'}
        backgroundColor={'transparent'}
        chartConfig={chartConfig}
        style={{ marginTop: 20, marginBottom: 40 }}
        absolute
        />

<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey'}}>Dewan Rakyat</Text>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
              Pecahan Mengikut Gabungan
            </Text>
            <PieChart 
        data={pieData}
        width={width}
        height={220}
        accessor={'population'}
        backgroundColor={'transparent'}
        chartConfig={chartConfig}
        style={{ marginTop: 20, marginBottom: 40 }}
        absolute
        />

            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey'}}>Dewan Rakyat</Text>
<Text style={{ fontSize: 35, fontWeight: 'bold' }}>
    Pecahan Mengikut Negeri
  </Text>
  <PieChart 
        data={pieData}
        width={width}
        height={220}
        accessor={'population'}
        backgroundColor={'transparent'}
        chartConfig={chartConfig}
        style={{ marginTop: 20, marginBottom: 40 }}
        absolute
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 20,
  }
})
