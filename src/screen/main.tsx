import React from 'react';
import {Div} from 'react-native-magnus';
import {FlatList, ListRenderItem} from 'react-native';
import {BatikListItemDTO, useBatiksQuery} from '../services/batik';
import BatikListItem from '../components/BatikListItem';

const itemSeparator = () => <Div h={0} />;

const MainScreen: React.FC = () => {
  const {data} = useBatiksQuery();

  const itemRenderer: ListRenderItem<BatikListItemDTO> = ({item}) => {
    return <BatikListItem item={item} />;
  };

  return (
    <Div>
      <FlatList
        renderItem={itemRenderer}
        ItemSeparatorComponent={itemSeparator}
        keyExtractor={item => '' + item.id}
        data={data?.data.hasil ?? []}
      />
    </Div>
  );
};

export default MainScreen;
