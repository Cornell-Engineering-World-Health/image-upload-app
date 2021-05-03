import * as React from 'react';
import { Button } from 'react-native';

/** Custom Component
 *  Requires: Starts with capital letter
 *  Creates a button that navigates to [next] screen with [txt] as its title 
 */
function NextButton({ navigation, txt, next }) {
  return (
    <Button
      title={txt}
      onPress={() => navigation.navigate(next)}
    />
  );
}
export default NextButton