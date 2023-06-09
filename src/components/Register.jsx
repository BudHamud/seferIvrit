import AuthForm from "./AuthForm";

const Register = () => {
    return (
      <AuthForm
        endpoint="http://your-backend-url/register"
        title="Registro"
        submitText="Registrarse"
      />
    );
  };
  
  export default Register;