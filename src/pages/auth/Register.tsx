import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { registerUser } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { Button, InputText } from "@fattureincloud/fic-design-system";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (submitted) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setValidationErrors({
        firstName: !formData.firstName ? "First name is required" : "",
        lastName: !formData.lastName ? "Last name is required" : "",
        email: !formData.email ? "Email is required" : "",
        password: !formData.password ? "Password is required" : "",
      });
      return;
    }

    const resultAction = await dispatch(registerUser(formData));

    if (registerUser.fulfilled.match(resultAction)) {
      navigate("/");
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img
          src="https://static.vecteezy.com/system/resources/previews/013/166/912/non_2x/people-working-at-home-office-and-typing-laptop-online-free-png.png"
          alt="Register Illustration"
        />
      </div>
      <div className="register-right">
        <h2 style={{ fontFamily: "Helvetica" }}>Register</h2>
        <p style={{ fontFamily: "Helvetica" }}>Welcome! Please register to your account.</p>
        <form onSubmit={handleRegister} className="register-form">
          <InputText
            inputSize="large"
            inputType="text"
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleChange}
            status={validationErrors.firstName ? "error" : "normal"}
            value={formData.firstName}
            helper={
              submitted && validationErrors.firstName
                ? { message: validationErrors.firstName, status: "error" }
                : undefined
            }
          />
          <InputText
            inputSize="large"
            inputType="text"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={handleChange}
            status={validationErrors.lastName ? "error" : "normal"}
            value={formData.lastName}
            helper={
              submitted && validationErrors.lastName
                ? { message: validationErrors.lastName, status: "error" }
                : undefined
            }
          />
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
            onClick={handleRegister}
            size="large"
            text={loading ? "Registering..." : "Register"}
            type="primary"
          />
        </form>

        {error && <p className="error-message">{error}</p>}

        <p style={{ fontFamily: "Helvetica" }}>
          Already have an account?{" "}
          <Link to="/" style={{ color: "#3a9ad9", textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
