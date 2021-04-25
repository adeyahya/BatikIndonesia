import React from 'react';
import {Div, DivProps} from 'react-native-magnus';

interface HeaderProps extends DivProps {}

const Header: React.FC<HeaderProps> = props => {
  return <Div {...props} />;
};

export default Header;
