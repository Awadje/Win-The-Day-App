import React from 'react';
import { View } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Checkbox,
} from 'react-native-paper';

import NavigationService from 'app/navigation/NavigationService';

import styles from './styles';
const Home: React.FC = () => {
  const goBack = () => NavigationService.goBack();
  const LeftContentChecked = (props) => <Avatar.Icon {...props} icon="check" />;
  const LeftContentUnChecked = (props) => <Avatar.Icon {...props} />;
  const Right = (props) => (
    <Checkbox
      label="Check for completion"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
  const [checked, setChecked] = React.useState(false);
  return (
    <View>
      <Button
        icon="keyboard-backspace"
        mode="outlined"
        onPress={goBack}
        accessibilityStates="">
        Go Back
      </Button>
      <Card
        onPress={() => {
          setChecked(!checked);
        }}>
        <Card.Title
          title="Action Item 1"
          subtitle="Start an App"
          left={checked ? LeftContentChecked : LeftContentUnChecked}
          right={Right}
        />
      </Card>
    </View>
  );
};

export default Home;
