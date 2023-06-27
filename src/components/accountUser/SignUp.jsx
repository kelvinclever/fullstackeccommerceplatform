import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";

const SignUp = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleTermsAcceptedChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const schema = yup.object().shape({
    first_name: yup.string().required("Firstname is required"),
    last_name: yup.string().required("Lastname is required"),
    phone_number: yup.string().required("Phone is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    termsAccepted: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    Axios.post("http://localhost:3000/customers/new", data)
      .then((response) => {
        response.data.message && alert(response.data.message);
        navigate("/");
      })
      .catch(({ response }) => {
        alert(response.data.error);
      });
  };

  return (
    <div className="signup">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <p className="title">
          <button data-text="Awesome" className="button">
            <span className="actual-text">&nbsp;Register&nbsp;</span>
            <span className="hover-text" aria-hidden="true">
              &nbsp;Register&nbsp;
            </span>
          </button>
        </p>
        <p className="message">Signup now and get full access to our app.</p>

        <label>
          <input
            required=""
            placeholder=""
            type="text"
            className="input"
            {...register("first_name")}
          />
          <span>Firstname</span>
        </label>

        <p>{errors.first_name?.message}</p>

        <label>
          <input
            required=""
            placeholder=""
            type="text"
            className="input"
            {...register("last_name")}
          />
          <span>Lastname</span>
        </label>

        <p>{errors.last_name?.message}</p>

        <label>
          <input
            required=""
            placeholder="0794937897"
            type="text"
            className="input"
            {...register("phone_number")}
          />
          <span>Phone</span>
        </label>

        <p>{errors.phone_number?.message}</p>

        <label>
          <input
            required=""
            placeholder=""
            type="email"
            className="input"
            {...register("email")}
          />
          <span>Email</span>
        </label>

        <p>{errors.email?.message}</p>

        <label>
          <input
            required=""
            placeholder=""
            type="password"
            className="input"
            {...register("password")}
          />
          <span>Password</span>
        </label>

        <p>{errors.password?.message}</p>

        <label>
          <input
            required=""
            placeholder=""
            type="password"
            className="input"
            {...register("confirmPassword")}
          />
          <span>Confirm password</span>
        </label>

        <p>{errors.confirmPassword?.message}</p>

        <div className="terms-container">
          <label>
            <input
              type="checkbox"
              required=""
              checked={termsAccepted}
              onChange={handleTermsAcceptedChange}
            />
            I accept the terms and conditions
          </label>
        </div>

        <p>{errors.termsAccepted?.message}</p>

        <button type="submit" className="buttonsignup">
          Sign up
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
        <p className="signin">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
