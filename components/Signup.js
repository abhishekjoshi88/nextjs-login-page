import { useState } from "react";
import Lineseperator from "./LineSeprator";
import MainContent from "./MainContent";
import TermsConditions from "./TermsCondi";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";
import Authenticate from "./ApiAuth";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const res = await Authenticate(data);
    if (!res) {
      alert("🙄User not found");
    } else {
      alert("😃Signup Successful");
    }
    setIsLoading(false);
  };

  return (
    <div className="container px-5 mx-auto">
      <main className="form-signin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <MainContent title="Create your account" />
          <div className="d-flex flex-wrap  justify-content-evenly">
            <GoogleButton />
            <FacebookButton />
          </div>
          <Lineseperator />
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInputN"
              placeholder="fname"
              {...register("fname", { required: true })}
            />

            <label htmlFor="floatingInput">First Name</label>
            {errors.fname && (
              <p className="text-danger">First Name is required</p>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInputN"
              placeholder="lname"
              {...register("lname", { required: true })}
            />
            <label htmlFor="floatingInput">Last Name</label>
            {errors.lname && (
              <p className="text-danger"> Last Name is required</p>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput E"
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
              id="floatingPassword P"
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
              className="w-30 btn btn-lg btn-primary fs-6 mb-5"
              type="submit"
              disabled={isLoading ? disable : null}
              onClick={() => setDisable(true)}
            >
              {isLoading ? <Spinner animation="border" /> : `SIGN UP`}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Signup;
