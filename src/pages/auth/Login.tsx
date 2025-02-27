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

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (submitted) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!formData.email || !formData.password) {
      setValidationErrors({
        email: !formData.email ? "Email is required" : "",
        password: !formData.password ? "Password is required" : "",
      });
      return;
    }

    const resultAction = await dispatch(loginUser(formData));

    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/home");
    } else {
      const errorMessage = resultAction.payload || "Login failed";
      setValidationErrors((prev) => ({
        ...prev,
        email: errorMessage === "Email not found" ? "Email not found" : prev.email,
        password: errorMessage === "Incorrect password" ? "Incorrect password" : prev.password,
      }));
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2 style={{ fontFamily: "Helvetica" }}>Login</h2>
        <p style={{ fontFamily: "Helvetica", color: "grey" }}>
          Welcome back! Please login to your account.
        </p>
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
            helper={
              submitted && validationErrors.email
                ? { message: validationErrors.email, status: "error" }
                : undefined
            }
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
            helper={
              submitted && validationErrors.password
                ? { message: validationErrors.password, status: "error" }
                : undefined
            }
          />
          <Button
            color="blue"
            onClick={handleLogin}
            size="large"
            text={loading ? "Logging in..." : "Login"}
            type="primary"
          />
        </form>
        {error && <p className="error-message">{error}</p>}
        <p style={{ fontFamily: "Helvetica", color: "grey", marginBottom: "10px" }}>
          New User?{" "}
          <Link to="/register" style={{ color: "#3a9ad9", textDecoration: "none" }}>
            Register
          </Link>
        </p>
      </div>
      <div className="login-right">
        <img
          src="https://img.freepik.com/premium-vector/young-man-working-computer-semi-flat-color-vector-character-sitting-figure-full-body-person-white-remote-job-simple-cartoon-style-illustration-web-graphic-design-animation_151150-8893.jpg"
          alt="Login Illustration"
        />
      </div>
    </div>
  );
};

export default Login;
