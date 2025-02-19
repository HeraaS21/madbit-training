import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { loginUser } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { Button, InputText } from "@fattureincloud/fic-design-system";

interface LoginFormState {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid =
    Object.values(formData).every((value) => value.trim() !== "") &&
    Object.values(validationErrors).every((error) => error === "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setValidationErrors((prev) => ({
      ...prev,
      [name]: "", 
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    let errors = { email: "", password: "" };
  
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email format";
    }
  
    if (!formData.password) {
      errors.password = "Password is required";
    }
  
    setValidationErrors(errors);
  
    if (errors.email || errors.password) return;
  
    const resultAction = await dispatch(loginUser(formData));
  
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/home");
    } else {
      const errorMessage = resultAction.payload || "Login failed";
      if (errorMessage === "Email not found") {
        setValidationErrors((prev) => ({ ...prev, email: "Email not found" }));
      } else if (errorMessage === "Incorrect password") {
        setValidationErrors((prev) => ({
          ...prev,
          password: "Incorrect password",
        }));
      }
    }
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <InputText
          inputSize="large"
          inputType="text"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          status={validationErrors.email ? "error" : "normal"}
          value={formData.email}
          errorMessage={validationErrors.email}
        />

        <InputText
          inputSize="large"
          inputType="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          status={validationErrors.password ? "error" : "normal"}
          value={formData.password}
          errorMessage={validationErrors.password}
        />

        <Button
          color="blue"
          onClick={handleLogin}
          size="large"
          text={loading ? "Logging in..." : "Login"}
          type="primary"
          isDisabled={loading || !isFormValid}
        />
      </form>

      {error && <p className="error-message">{error}</p>}

      <h5>
        Don't have an account?{" "}
        <Link to="/register" className="register-link">
          Register now!
        </Link>
      </h5>
    </div>
  );
};

export default Login;


