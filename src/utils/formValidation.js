const formValidation = (email, password, name) => {
  const isEmailValid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/.test(
      password
    );
  const isNameValid = /^[a-zA-Z]{3,}$/.test(name);
  if(!isEmailValid) {
    return 'Invalid email';
  }
  if(!isPasswordValid) {
    return 'Invalid password';
  }
  if(!isNameValid) {
    return 'Invalid name';
  }

  return null;
};
export default formValidation;
