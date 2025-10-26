const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[^\s]{8,}$/;

export const validateEmail = (value: string): boolean => {
  return EMAIL_REGEX.test(value);
};

export const validatePassword = (value: string): boolean => {
  return PASSWORD_REGEX.test(value);
};
