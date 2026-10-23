export const checkValidData = (email, password) => {
  const isEmailValid =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      email,
    );
  const isPasswordValid = password.length >= 8;

  if (!isEmailValid) return "Invalid email format.";

  if (!isPasswordValid) return "Invalid password format.";

  return null;
};
