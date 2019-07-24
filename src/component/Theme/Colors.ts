import { StyleSheet } from 'react-native';

export type ColorsType = {
  primary: string;
  infoColor: string;
  deleteColor: string;
  cancelColor: string;
  divider: string;
};

export const Colors = {
  // primary: '#1273e4',
  primary: '#4598f2',
  infoColor: '#eca961',
  deleteColor: '#d75452',
  cancelColor: '#c8c7cd',
  divider: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
};