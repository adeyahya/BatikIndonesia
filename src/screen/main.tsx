import React from 'react';
import _filter from 'lodash/filter';
import useDebounce from 'react-use/lib/useDebounce';
import {Div, Input} from 'react-native-magnus';
import {FlatList, ListRenderItem, StatusBar} from 'react-native';
import {BatikListItemDTO, useBatiksQuery} from '../services/batik';
import BatikListItem from '../components/BatikListItem';

const itemSeparator = () => (
  <Div w="100%" px={25} alignItems="center">
    <Div h={1} w="100%" bg="gray300" />
  </Div>
);

const MainScreen: React.FC = () => {
  const {data} = useBatiksQuery();
  const [keyword, setKeyword] = React.useState('');
  const [debouncedKeyword, setDebouncedKeyword] = React.useState(keyword);
  const [isFocusSearch, setIsFocusSearch] = React.useState(false);

  useDebounce(
    () => {
      setDebouncedKeyword(keyword);
    },
    200,
    [keyword],
  );

  const filteredData = React.useMemo(() => {
    const _data = data?.data.hasil ?? [];

    if (debouncedKeyword === '') {
      return _data;
    }

    const _keyword = debouncedKeyword.toLowerCase();

    return _filter(_data, item => {
      return (
        item.nama_batik.toLowerCase().includes(_keyword) ||
        item.makna_batik.toLowerCase().includes(_keyword)
      );
    });
  }, [data, debouncedKeyword]);

  const itemRenderer: ListRenderItem<BatikListItemDTO> = ({item}) => {
    return <BatikListItem item={item} />;
  };

  return (
    <Div flex={1} position="relative">
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#61dafb"
      />
      <Div
        w="100%"
        zIndex={1}
        shadow={isFocusSearch ? 'md' : 'xs'}
        position="absolute"
        px={25}
        py={10}>
        <Input
          onFocus={() => setIsFocusSearch(true)}
          onBlur={() => setIsFocusSearch(false)}
          value={keyword}
          onChangeText={setKeyword}
          focusBorderColor="primary400"
          rounded="circle"
          placeholder="Temukan Batik"
          variant="primary"
        />
      </Div>
      <Div flex={1}>
        <FlatList
          ListHeaderComponent={() => <Div h={60} />}
          renderItem={itemRenderer}
          ItemSeparatorComponent={itemSeparator}
          keyExtractor={item => '' + item.id}
          data={filteredData}
        />
      </Div>
    </Div>
  );
};

export default MainScreen;
