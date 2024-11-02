const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  const isPassWordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
      password
    );

  if (!isEmailValid) {
    return `Email is not valid`;
  }

  if (!isPassWordValid) {
    return `Passowrd is not valid`;
  }
  return null;
};

export default checkValidData;
