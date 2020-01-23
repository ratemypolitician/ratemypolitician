import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

import { styles } from './Styles';

const width = Dimensions.get('window').width;

export default function PieChartComponent({ 
    header, 
    subheader, 
    data,
    chartConfig,
    height,
    accessor,
}) {
    return (
      <View>
        <Text style={styles.header}>
            {header}
        </Text>
        <Text style={styles.subheader}>
            {subheader}
        </Text>
        <PieChart 
            data={data}
            width={width}
            height={height}
            accessor={accessor}
            backgroundColor={'transparent'}
            chartConfig={chartConfig}
            style={styles.pieRegion}
            absolute
        />
      </View>
    );
}

