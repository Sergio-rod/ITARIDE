import { useState } from 'react';
import { Select, Box, HStack } from 'native-base';

function SelectTime() {
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');

  const hours = Array.from(Array(24).keys());
  const minutes = Array.from(Array(2).keys()).map((value) => value * 30);

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setMinute(event.target.value);
  };

  return (
    <HStack flex={1}>
      <Select
        flex={1}
        defaultValue={hour}
        onChange={handleHourChange}
        maxWidth="100px"
        value={hour}
      >
        {hours.map((value) => (
          <option key={value} value={value.toString().padStart(2, '0')}>
            {value.toString().padStart(2, '0')}
          </option>
        ))}
      </Select>
      <span>:</span>
      <Select
        flex={1}
        defaultValue={minute}
        onChange={handleMinuteChange}
        maxWidth="100px"
        value={minute}
      >
        {minutes.map((value) => (
          <option key={value} value={value.toString().padStart(2, '0')}>
            {value.toString().padStart(2, '0')}
          </option>
        ))}
      </Select>
    </HStack>
  );
}

export default SelectTime;
