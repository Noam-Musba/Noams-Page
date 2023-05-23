import React, { useEffect, useRef, useState } from "react";

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

function SignIn() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!success) {
      inputRef.current.focus();
    }
  }, []);

  const [register, setRegister] = useState("Register here!");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);

  const handlerSubmit = (event) => {
    event.preventDefault();
    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setSuccess(false);
    if (!username) {
      setUsernameError("Username not valid!");
    } else if (!validateEmail(email)) {
      setEmailError("Email not valid!");
    } else if (password.length < 6) {
      setPasswordError("Passwords must have at least 6 characters!");
    } else {
      setSuccess(true);
      setRegister("Registered!");
    }
    /** ~~~ Maybe in the future: save the contact info: ~~~
    * 
    * const [input1Value, input2Value] = event.target.elements;

      fetch('/write-to-file', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input1Value: input1Value.value,
          input2Value: input2Value.value,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
     */
  };

  return (
    <React.Fragment>
      <form onSubmit={handlerSubmit}>
        <p>
          <strong>{register}</strong>
        </p>
        <p>Don't worry, I will not spam you ;)</p>

        {success ? (
          success && <h2>Submitted successfully! Hello {username}!</h2>
        ) : (
          <div>
            <div>
              <label>Username: </label>
              <input
                type="text"
                value={username}
                ref={inputRef}
                onChange={(event) => setUsername(event.target.value)}
              />
              {usernameError && (
                <div style={{ color: "red" }}>{usernameError}</div>
              )}
            </div>
            <div>
              <label style={{ marginRight: "33px" }}>Email: </label>
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            </div>
            <div>
              <label style={{ marginRight: "5px" }}>Password: </label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {passwordError && (
                <div style={{ color: "red" }}>{passwordError}</div>
              )}
            </div>
            <button
              type="submit"
              style={{
                margin: "20px",
                backgroundColor: "#1877f2",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "20px",
                padding: "10px 16px",
                cursor: "pointer"
              }}
            >
              submit
            </button>
          </div>
        )}
      </form>
    </React.Fragment>
  );
}

export default SignIn;
