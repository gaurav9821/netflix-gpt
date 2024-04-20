export const checkValidate = (email, password, fullName) => {
  //if this REGEX is valid for Email it will return true
  const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  //if this REGEX is valid for Password it will return true
  const passwordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/.test(
      password
    );
  //if this REGEX is valid for Password it will return true
  const nameValid =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      fullName
    );
  if (!nameValid) return "Please enter a valid Name.";
  if (!emailValid) return "Please enter a valid email address.";
  if (!passwordValid) return "Please enter a valid Password.";

  return null;
};
