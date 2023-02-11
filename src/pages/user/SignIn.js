import { useState } from "react";
import { useSignInEmailPassword } from "@nhost/react";
import { Link, Navigate } from "react-router-dom";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    signInEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignInEmailPassword();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    signInEmailPassword(email, password);
  };

  if (isSuccess) {
    return <Navigate to="/" replace={true} />;
  }

  const disableForm = isLoading || needsEmailVerification;

  return (
    <div >
      <div >
        <div >
          <img alt="logo" />
        </div>

        {needsEmailVerification ? (
          <p >
            Please check your mailbox and follow the verification link to verify
            your email.
          </p>
        ) : (
          <form onSubmit={handleOnSubmit} >
            <input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disableForm}
              required
            />
            <input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={disableForm}
              required
            />

            <button
              type="submit"
              disabled={disableForm}
              
            >
              {isLoading ? "loading" : "Sign in"}
            </button>

            {isError ? (
              <p >{error?.message}</p>
            ) : null}
          </form>
        )}
      </div>

      <p >
        No account yet?{" "}
        <Link to="/sign-up" >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
