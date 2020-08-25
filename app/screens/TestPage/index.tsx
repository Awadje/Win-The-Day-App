import React from 'react';
import { View, Vibration } from 'react-native';
import {
  Title,
  Button,
  Card,
  Checkbox,
  List,
  Text,
  Divider,
} from 'react-native-paper';

import NavigationService from 'app/navigation/NavigationService';

import styles from './styles';
const Home: React.FC = () => {
  const goBack = () => NavigationService.goBack();
  const DURATION = 10000;
  const LeftContentChecked = (props) => <List.Icon {...props} icon="trophy" />;
  const LeftContentUnChecked = (props) => <List.Icon {...props} />;
  const LeftItemChecked = (props) => <List.Icon {...props} icon="hexagram" />;
  const LeftItemUnChecked = (props) => (
    <List.Icon {...props} icon="hexagram-outline" />
  );
  const RightCardUnChecked = (props) => (
    <List.Icon {...props} icon="circle-outline" />
  );
  const RightCardChecked = (props) => (
    <List.Icon {...props} icon="circle-slice-1" />
  );
  const Right = (props) => (
    <Checkbox
      label="Check for completion"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
        Vibration.vibrate(DURATION);
      }}
    />
  );
  const [checked, setChecked] = React.useState(false);
  return (
    <View>
      <Card>
        <Card.Title
          title="Today"
          left={checked ? LeftContentChecked : LeftContentUnChecked}
          right={checked ? RightCardChecked : RightCardUnChecked}
        />
        <Card.Content>
          <Title>You can do it!</Title>
        </Card.Content>
      </Card>
      <List.Item
        title="First Item"
        description="Item description"
        onPress={() => {
          setChecked(!checked);
        }}
        left={checked ? LeftItemChecked : LeftItemUnChecked}
        right={Right}
      />
      <List.Item
        title="Second Item"
        description="Item description"
        onPress={() => {
          setChecked(!checked);
        }}
        left={checked ? LeftItemChecked : LeftItemUnChecked}
        right={Right}
      />
      <List.Item
        title="Third Item"
        description="Item description"
        onPress={() => {
          setChecked(!checked);
        }}
        left={checked ? LeftItemChecked : LeftItemUnChecked}
        right={Right}
      />
      <List.Item
        title="Fourth Item"
        description="Item description"
        onPress={() => {
          setChecked(!checked);
        }}
        left={checked ? LeftItemChecked : LeftItemUnChecked}
        right={Right}
      />
      <List.Item
        title="Fifth Item"
        description="Item description"
        onPress={() => {
          setChecked(!checked);
        }}
        left={checked ? LeftItemChecked : LeftItemUnChecked}
        right={Right}
      />
      <Button
        icon="keyboard-backspace"
        mode="outlined"
        onPress={goBack}
        accessibilityStates="">
        Go Back
      </Button>
    </View>
  );
};

export default Home;
