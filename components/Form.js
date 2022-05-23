import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Signin from "./SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Signup from "./Signup";

const Form = () => {
  return (
    <>
      <p className="text-center fs-6">Test Email - eve.holt@reqres.in</p>
      <div className="form_div container mx-auto">
        <div className="container-sm shadow-lg mt-5 mb-5 p-0">
          <Tabs
            defaultActiveKey="first"
            className="mx-auto d-flex justify-content-center w-100 border-bottom"
          >
            <Tab eventKey="first" title="SIGN IN">
              <Signin />
            </Tab>
            <Tab eventKey="second" title="SIGN UP">
              <Signup />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Form;
