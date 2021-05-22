import React from 'react';
import { TextInput } from 'react-native';

export default function TextField() {
  const [value, onChangeText] = React.useState('Name Your Adventure');

  return (
    <TextInput
      style={{ height: 60, borderColor: 'gray', borderWidth: 1 }}
      value={value}
    />
  );
}
