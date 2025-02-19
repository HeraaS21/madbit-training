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

  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const userData = {
      email: formData.email,
      password: formData.password,
      first_name: formData.firstName,  
      last_name: formData.lastName,
    };
  
    const resultAction = await dispatch(registerUser(userData));
  
    if (registerUser.fulfilled.match(resultAction)) {
      navigate("/");
    }
  };
  

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="register-form">
        <InputText
          inputSize="large"
          inputType="text"
          name="firstName"
          placeholder="First Name"
          required
          onChange={handleChange}
          status="normal"
          value={formData.firstName}
        />
        <InputText
          inputSize="large"
          inputType="text"
          name="lastName"
          placeholder="Last Name"
          required
          onChange={handleChange}
          status="normal"
          value={formData.lastName}
        />
        <InputText
          inputSize="large"
          inputType="text"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          status="normal"
          value={formData.email}
        />
        <InputText
          inputSize="large"
          inputType="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          status="normal"
          value={formData.password}
        />

        <Button
          color="blue"
          onClick={handleRegister}
          size="large"
          text={loading ? "Registering..." : "Register"}
          type="primary"
          isDisabled={loading || !isFormValid}
        />
      </form>

      {error && <p className="error-message">{error}</p>}

      <h5>
        Already have an account? <Link to="/" className="register-link">Login</Link>
      </h5>
    </div>
  );
};

export default Register;
