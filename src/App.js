import logo from "./logo.svg";
import "./App.css";
import FormikContainer from "./component/FormikContainer";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import EnrollmentForm from "./EnrollmentForm";
import Toast from "./Toast";

function App() {
  return (
    <div className="App">
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      <EnrollmentForm />
      {/* <Toast /> */}
    </div>
  );
}

export default App;
