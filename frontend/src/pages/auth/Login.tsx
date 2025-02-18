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

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser(formData));

    if (loginUser.fulfilled.match(resultAction)) {
     
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
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
        <Button
          color="blue"
          onClick={handleLogin}
          size="large"
          text={loading ? "Logging in..." : "Login"}
          type="primary"
          isDisabled={loading}
        />
      </form>
      {error && <p className="error-message">{error}</p>}
   

      <h5>Don't have an account? <Link to="/register" className="register-link">Register now!</Link></h5>
    </div>
  );
};

export default Login;
