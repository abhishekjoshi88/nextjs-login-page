import Lineseperator from "./LineSeprator";
import MainContent from "./MainContent";
import TermsConditions from "./TermsCondi";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";

//-----------------Tostify-----------//
import { toast } from "react-toastify";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";
import { useState } from "react";
import Authenticate from "./ApiAuth";

//-----------------//

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const res = await Authenticate(data);
    if (!res) {
      alert("🙄User not found");
    } else {
      alert("😃Signin Successful");
    }
    setIsLoading(false);
  };

  return (
    <div className="container px-5 mx-auto">
      <main className="form-signin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <MainContent title="Sign in to your account" />
          <div className="d-flex flex-wrap  justify-content-evenly">
            <GoogleButton />
            <FacebookButton />
          </div>
          <Lineseperator />

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInputE"
              placeholder="name@example.com"
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Not a valid Email",
                },
              })}
            />
            <label htmlFor="floatingInput">Email address</label>
            {errors.email && <p className="text-danger">Email is required</p>}
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPasswordP"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <label htmlFor="floatingPassword">Password</label>
            {errors.password && (
              <p className="text-danger">Password is required</p>
            )}
          </div>

          <TermsConditions />
          <div className="d-flex justify-content-center">
            <button
              className="w-30 btn btn-lg btn-primary fs-6"
              type="submit"
              disabled={isLoading ? disable : null}
              onClick={() => setDisable(true)}
            >
              {isLoading ? <Spinner animation="border" /> : `SIGN IN`}
            </button>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <p className="forgot_your_pass">
              <a href="#" className="forgot_your_pass_link">
                Forgot Your Password?
              </a>
            </p>
          </div>
          <Lineseperator />
          <div className="d-flex justify-content-center mt-4">
            <p className="sign_in">
              <a href="#" className="sign_in_link">
                Sign in with your organization
              </a>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Signin;
