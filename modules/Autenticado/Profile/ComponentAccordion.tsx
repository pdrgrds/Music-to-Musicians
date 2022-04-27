import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import Variables from './../../../constants/global';

const ComponentAccordion = (props:any) => {
  const [expanded, setExpanded] = React.useState(false);
  const {
    name,
    items
  } = props;

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="" style={{marginVertical: 0, marginHorizontal: 8}}>

      <List.Accordion
        title={`${name}`}
        theme={{colors: { primary: 'white', background: 'transparent', text: 'white' }}}
        right={props => <List.Icon {...props} style={{height: 5, width: 5}} icon={expanded ? Variables.iconListUp : Variables.iconListDown} />}
        expanded={expanded}
        onPress={handlePress}>
            {
                items?.map((item:any) => 
                    <List.Item theme={{colors: { text: 'white', background: 'transparent' }}} title={`${item}`} />
                )
            }
      </List.Accordion>
    </List.Section>
  );
};

const styles = StyleSheet.create({
})

export default ComponentAccordion;