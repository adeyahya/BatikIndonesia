import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, ButtonProps, Icon} from 'react-native-magnus';

interface HeaderBackButtonProps extends ButtonProps {}

const HeaderBackButton: React.FC<HeaderBackButtonProps> = props => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <Button bg="white" shadow="lg" onPress={handlePress} {...props}>
      <Icon
        fontFamily="Ionicons"
        fontSize={20}
        color="gray700"
        name="arrow-back-outline"
      />
    </Button>
  );
};

export default HeaderBackButton;
