import AuthForm from "./AuthForm";

const Login = () => {
    return (
      <AuthForm
        endpoint="http://your-backend-url/login"
        title="Iniciar sesión"
        submitText="Iniciar sesión"
      />
    );
  };
  
  export default Login;