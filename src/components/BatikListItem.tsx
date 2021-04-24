import React from 'react';
import {Button, Image, Text, Div, ButtonProps} from 'react-native-magnus';
import {BatikListItemDTO} from '../services/batik';

export interface BatikListItem extends ButtonProps {
  item: BatikListItemDTO;
}

const BatikListItem: React.FC<BatikListItem> = ({item, ...props}) => {
  return (
    <Button alignItems="flex-start" bg="white" row px={20} {...props}>
      <Image
        bg="gray500"
        rounded={20}
        w={80}
        h={80}
        source={{uri: item.link_batik}}
      />
      <Div flex={1} ml={10} py={5}>
        <Text fontSize={18} textTransform="capitalize">
          Batik {item.nama_batik}
        </Text>
        <Text mt={3} numberOfLines={2}>
          {item.makna_batik}
        </Text>
      </Div>
    </Button>
  );
};

export default React.memo(BatikListItem);
