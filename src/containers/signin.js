// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

// import { signIn } from "../reducks/users/operations";
// import SignInLink from "../components/default/signinlink";

// const SignIn = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
// dispatch(signIn(email, password, () => {
//   history.push("/homepage");
// }));
//   };

//   return (
//     <SignInLink
//       email={email}
//       password={password}
//       setEmail={setEmail}
//       setPassword={setPassword}
//       onSubmit={handleSubmit}
//     />
//   );
// };

// export default SignIn;



import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { signIn } from "../reducks/users/operations";
import SignInLink from "../components/default/signinlink";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    console.log("✅ BUTTON CLICKED");
    console.log("📧 Email:", email);
    console.log("🔒 Password:", password);

    // 🔥 Prevent empty submit
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    dispatch(
      signIn(email, password, () => {
        console.log("✅ LOGIN SUCCESS");
        history.push("/homepage");
      })
    );
  };

  return (
    <SignInLink
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleSubmit}
    />
  );
};

export default SignIn;