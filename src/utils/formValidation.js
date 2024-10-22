const formValidation = (email, password, name) => {
  const isEmailValid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/.test(
      password
    );

  const isNameValid = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name);

  if (!isNameValid) {
    return "Please provide a valid name";
  }

  if (!isEmailValid) {
    return "Please provide a valid email address";
  }

  if (!isPasswordValid) {
    return "Please provide a valid password";
  }

  return null;
};

export default formValidation;
