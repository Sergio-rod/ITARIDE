import React, { useState } from "react";
import { FormControl, Select, Center, CheckIcon, WarningOutlineIcon, NativeBaseProvider } from "native-base";

const SelectTECNM = ({ onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleValueChange = (value) => {
    setSelectedValue(value);
    onValueChange(value); // Pasar el valor seleccionado al componente padre
  };

  return (
    <>
      <FormControl isRequired>
        <Select
          accessibilityLabel="TEC"
          placeholder="TEC"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={3} />,
          }}
          onValueChange={handleValueChange} // Actualizar el valor seleccionado
          selectedValue={selectedValue} // Establecer el valor seleccionado
        >
          <Select.Item label="ITA" value="Aguascalientes" />
          <Select.Item label="ITC" value="Colima" />
          <Select.Item label="ITM" value="Monterrey" />
          <Select.Item label="ITR" value="Reynosa" />
          <Select.Item label="ITP" value="Puebla" />
        </Select>
      </FormControl>
    </>
  );
};

export default SelectTECNM;
