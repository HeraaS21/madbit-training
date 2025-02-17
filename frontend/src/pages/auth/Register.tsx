import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { registerUser } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom"; 
import "./style.css";
import { InputText } from "@fattureincloud/fic-design-system";


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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultAction = await dispatch(registerUser(formData));
  
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
      label="First name"
      name="firstName"
      placeholder="First Name"
      required
      setValue={(value) => setFormData({ ...formData, firstName: value })}
      status="normal"
      value={formData.firstName}
       />
      <InputText
      inputSize="large"
      inputType="text"
      label="Last name"
      name="lastName"
      placeholder="Last Name"
      required
      setValue={(value) => setFormData({ ...formData, lastName: value })}
      status="normal"
      value={formData.lastName}
/>
      <InputText
      inputSize="large"
      inputType="text"
      label="Email"
      name="email"
      placeholder="Email"
      required
      setValue={(value) => setFormData({ ...formData, email: value })}
      status="normal"
      value={formData.email}
        />
     <InputText
     inputSize="large"
     inputType="password"
     label="Password"
     name="password"
     placeholder="Password"
     required
     setValue={(value) => setFormData({ ...formData, password: value })}
     status="normal"
     value={formData.password}
    />

        <button type="submit" disabled={loading} className="register-button">
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>} 
      <h5>
        Already have an account? <Link to="/" className="register-link">Login</Link>
      </h5>
    </div>
  );
};

export default Register;
