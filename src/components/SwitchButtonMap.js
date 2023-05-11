import React, { useState } from 'react';
import { Switch, Box } from 'native-base';

function SwitchButton() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <Box>
      <Switch
        onToggle={toggleSwitch}
        isChecked={isEnabled}
        trackColor={{ true: '#024959' }}
        thumbColor='#024959'
      />
    </Box>
  );
}

export default SwitchButton;
