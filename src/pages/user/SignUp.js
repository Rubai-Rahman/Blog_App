import { useState } from "react";
import { useSignUpEmailPassword } from "@nhost/react";
import { Link, Navigate } from "react-router-dom";


const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    signUpEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignUpEmailPassword();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    signUpEmailPassword(email, password, {
      displayName: `${firstName} ${lastName}`.trim(),
      metadata: {
        firstName,
        lastName,
      },
    });
  };

  if (isSuccess) {
    return <Navigate to="/" replace={true} />;
  }

  const disableForm = isLoading || needsEmailVerification;

  return (
    <div className=" bg-teal-400 p-12  ">
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col justify-between gap-6 bg-teal-800 w-96 align-middle ml-96 p-10 rounded-sm shadow-md shadow-black  items-center     ">
          <div>
            <input
              className="px-2 w-72 h-10 rounded-sm  outline-teal-200 outline-offset-0 "
              placeholder="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={disableForm}
              required
            />
          </div>
          <div>
            <input
              className="px-2 w-72 h-10 rounded-sm  outline-teal-200 outline-offset-0 "
              placeholder="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={disableForm}
              required
            />
          </div>
          <div>
            <input
              className="px-2 w-72 h-10 rounded-sm  outline-teal-200 outline-offset-0 "
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disableForm}
              required
            />
          </div>
          <div>
            <input
              className="px-2 w-72 h-10 rounded-sm  outline-teal-200 outline-offset-0 "
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={disableForm}
              required
            />
          </div>
          <div>
            <button
              className="mb-4 outline outline-teal-300 w-36 rounded-sm shadow-sm h-8 text-xl outline-offset-2 bg-teal-700 mt-2   "
              type="submit"
              disabled={disableForm}
            >
              {isLoading ? "Loading" : "Create account"}
            </button>

            {isError ? <p>{error?.message}</p> : null}
            <p>
              Already have an account?{" "}
              <Link className="text-cyan-100 " to="/sign-in">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
