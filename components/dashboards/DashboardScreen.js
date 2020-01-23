import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

import PieChartComponent from './PieChartComponent';
import { pieData } from './../../data/statistics';

import { styles } from './Styles';

export default class DashboardScreen extends React.Component {
  static navigationOptions = {
      title: 'Statistics'
  }

  render() {

    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    };

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <PieChartComponent 
            header={'Dewan Rakyat'}
            subheader={'Pecahan Mengikut Parti'}
            data={pieData}
            chartConfig={chartConfig}
            height={220}
            accessor={'population'}
          />
          <PieChartComponent 
            header={'Dewan Rakyat'}
            subheader={'Pecahan Mengikut Gabungan'}
            data={pieData}
            chartConfig={chartConfig}
            height={220}
            accessor={'population'}
          />
          <PieChartComponent 
            header={'Dewan Rakyat'}
            subheader={'Pecahan Mengikut Negeri'}
            data={pieData}
            chartConfig={chartConfig}
            height={220}
            accessor={'population'}
          />
      </ScrollView>
    );
  }
}
