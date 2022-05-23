const Authenticate = async (data) => {
  const { email, password } = data;
  const login = {
    email,
    password,
  };
  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(login),
  });
  return response.ok;
};

export default Authenticate;
