import React from 'react';
import {Div, Input} from 'react-native-magnus';
import {FlatList, ListRenderItem} from 'react-native';
import {BatikListItemDTO, useBatiksQuery} from '../services/batik';
import BatikListItem from '../components/BatikListItem';

const itemSeparator = () => (
  <Div w="100%" px={25} alignItems="center">
    <Div h={1} w="100%" bg="gray300" />
  </Div>
);

const MainScreen: React.FC = () => {
  const {data} = useBatiksQuery();
  const [isFocusSearch, setIsFocusSearch] = React.useState(false);

  const itemRenderer: ListRenderItem<BatikListItemDTO> = ({item}) => {
    return <BatikListItem item={item} />;
  };

  return (
    <Div flex={1} position="relative">
      <Div
        w="100%"
        zIndex={1}
        shadow={isFocusSearch ? 'md' : undefined}
        position="absolute"
        px={25}
        py={10}>
        <Input
          onFocus={() => setIsFocusSearch(true)}
          onBlur={() => setIsFocusSearch(false)}
          rounded="circle"
          placeholder="Temukan Batik"
        />
      </Div>
      <Div flex={1}>
        <FlatList
          ListHeaderComponent={() => <Div h={70} />}
          renderItem={itemRenderer}
          ItemSeparatorComponent={itemSeparator}
          keyExtractor={item => '' + item.id}
          data={data?.data.hasil ?? []}
        />
      </Div>
    </Div>
  );
};

export default MainScreen;
