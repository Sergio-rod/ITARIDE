import React, { useState } from "react";
import { FormControl, Select, Center, CheckIcon, WarningOutlineIcon, NativeBaseProvider } from "native-base";

const SelectCountry = ({ onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleValueChange = (value) => {
    setSelectedValue(value);
    onValueChange(value); // Pasar el valor seleccionado al componente padre
  };

  return (
    <>
      <FormControl isRequired>
        <Select
          accessibilityLabel="Country"
          placeholder="Country"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={3} />,
          }}
          onValueChange={handleValueChange} // Actualizar el valor seleccionado
          selectedValue={selectedValue} // Establecer el valor seleccionado
        >
          <Select.Item label="Flag Mexico" value="+52 1" />
          <Select.Item label="Flag USA" value="+001" />
          <Select.Item label="Flag Argentina" value="+54" />
          <Select.Item label="Flag" value="ui" />
          <Select.Item label="FLAG" value="backend" />
        </Select>
      </FormControl>
    </>
  );
};

export default SelectCountry;
