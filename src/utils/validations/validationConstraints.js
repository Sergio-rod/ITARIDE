import validate from "validate.js";

const validationConstraints = (formData) => {

   
  const validationRules = {
    
    code: {
      presence: { message: "Code is required" },
    },
    phoneNumber: {
      presence: { message: "Phone number is required" },
    },
    campus: {
      presence: { message: "Campus is required" },
    },
    controlNumber: {
      presence: { message: "Control number is required" },
    },
    pass: {
      presence: { message: "Password is required" },
      length: {
        minimum: 8,
        tooShort: "Password is too short",
      },
      format: {
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$/,
        message: "Must contain a special character",
      },
    },


  };
  return validate(formData, validationRules);
};

export default validationConstraints;