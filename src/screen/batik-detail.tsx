import {useRoute} from '@react-navigation/core';
import React from 'react';
import {StatusBar} from 'react-native';
import {Text, Image, Div, ScrollDiv} from 'react-native-magnus';
import {BatikListItemDTO} from '../services';

const BatikDetailScreen: React.FC = () => {
  const route = useRoute();
  const _data: BatikListItemDTO = route.params as any;
  return (
    <ScrollDiv flex={1} bg="white">
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#61dafb"
      />
      <Image h={300} source={{uri: _data.link_batik}} />
      <Div px={20} py={15}>
        <Text
          textTransform="capitalize"
          fontSize={20}
          fontFamily="Livvic-Medium"
          mb={5}>
          Batik {_data.nama_batik}
        </Text>
        {!!_data.daerah_batik && (
          <Text fontSize={15} mb={10}>
            {_data.daerah_batik}
          </Text>
        )}
        <Text>{_data.makna_batik}</Text>
      </Div>
    </ScrollDiv>
  );
};

export default BatikDetailScreen;
