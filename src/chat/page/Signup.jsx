import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Signup = ({sendEmailToParent}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logError, setLogError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // navigate("/login");
        navigate("/chatHome");
        // ...
        sendEmailToParent(email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setLogError(true);
        // ..
      });
  };
  const ErrorMessage = () => {
    return(
      <p className="error-login">Password must have minimum 6 symbols</p>
    )
  }

  return (
    <main>
      <section>
        <img src="https://i.pinimg.com/originals/a8/d5/ba/a8d5baeb06fc12c77ccefd0121010d20.gif " alt="img" className="signup-img" />
        <div>
          <div  className="login__main">
            <h1  className="title signup__title">Please <span>Sign Up</span> to start chating</h1>
            <form className="login__form">
              <div>
                <label htmlFor="email-address"></label>
                <input  className="login__mail deep signup__input"
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <div>
                <label htmlFor="password"></label>
                <input className="login__mail deep signup__input"
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>

              <button className="login__btn signup__btn" type="submit" onClick={onSubmit}>
                Sign up
              </button>
            </form>

            <p className="text-sm text-white text-center signUp-text login__link">
              <strong>Already have an account?</strong> <NavLink to="/login"><div className="navlink">Sign in</div></NavLink>
            </p>
            {logError && <ErrorMessage/>}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;