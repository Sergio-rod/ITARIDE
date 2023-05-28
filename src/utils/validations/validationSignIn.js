import validate from "validate.js";

const validationSignIn = (formData) => {
  const validationRules = {
    mail: {
        presence: { message: "Email is required" },
        format: {
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Email is not valid",
        },
      },
    pass: {
      presence: { message: "Password is required" },
      length: {
        minimum: 8,
        tooShort: "Password is too short",
      },
      format: {
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/,
        message: "Must contain a special character",
      },
    },
  };

  const validationErrors = validate(formData, validationRules);

  console.log(validationErrors)
  return validationErrors; // Retorna los errores de validación o un objeto vacío si no hay errores
};

export default validationSignIn;
