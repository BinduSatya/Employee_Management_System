import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted file");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            handleLogin(email, password);
            setEmail("");
            setPassword("");
            return submitHandler(e);
          }}
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-600 text-xl text-center py-3 px-4 rounded-full"
            type="email"
            name="email"
            value={email}
            id=""
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="text-white outline-none mt-3 bg-transparent border-2 border-emerald-600 text-xl text-center py-3 px-4 rounded-full"
            type="password"
            name=""
            value={password}
            id=""
            placeholder="Enter Password"
          />
          <button className="w-full text-white mt-5 outline-none bg-emerald-600 text-xl text-center py-3 px-4 rounded-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
