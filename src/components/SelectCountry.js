import React from "react";
import { FormControl, Select, Center, CheckIcon, WarningOutlineIcon, NativeBaseProvider } from "native-base";

const SelectCountry = () => {
  return <>
      <FormControl isRequired >
        <Select accessibilityLabel="Country" placeholder="Country" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={3} />
      }}>
          <Select.Item label="Flag Mexico" value="+52 1" />
          <Select.Item label="Flag USA" value="+001" />
          <Select.Item label="Flag Argentina" value="+54" />
          <Select.Item label="Flag" value="ui" />
          <Select.Item label="FLAG" value="backend" />
        </Select>
        {/*
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
        */}
      </FormControl>
      </>
};

    export default SelectCountry
    