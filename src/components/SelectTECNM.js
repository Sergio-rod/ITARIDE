import React from "react";
import { FormControl, Select, Center, CheckIcon, WarningOutlineIcon, NativeBaseProvider } from "native-base";

const SelectTECNM = () => {
  return <>
      <FormControl isRequired >
        <Select accessibilityLabel="TEC" placeholder="TEC" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={3} />
      }}>
          <Select.Item label="ITA" value="Aguascalientes" />
          <Select.Item label="ITC" value="Colima" />
          <Select.Item label="ITM" value="Monterrey" />
          <Select.Item label="ITR" value="Reynosa" />
          <Select.Item label="ITP" value="Puebla" />
        </Select>
        {/*
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
        */}
      </FormControl>
      </>
};

    export default SelectTECNM
    