import { useRef } from "react";

const Signin = ({ loginHandler }) => {
  const xxu = "user@example.com";
  const zzz = "1Password";

  const formElement = useRef();
  const usernameInput = useRef();
  const usernameLabel = useRef();
  const usernameError = useRef();

  const passwordInput = useRef();
  const passwordLabel = useRef();
  const passwordError = useRef();

  const validateForm = () => {
    const formEl = document.getElementById("formElement");

    const usernameInput = document.getElementById("username");
    const usernameLabel = document.getElementById("usernameLabel");
    const usernameError = document.getElementById("usernameError");

    const passwordInput = document.getElementById("password");
    const passwordLabel = document.getElementById("passwordLabel");
    const passwordError = document.getElementById("passwordError");

    const validationOptions = [
      {
        attribute: "xxr",
        isValid: (input) => input.value.trim() === xxu,
        errorMsg: (input, label) => `Incorrect ${label.textContent}`,
      },

      {
        attribute: "zzt",
        isValid: (input) => input.value.trim() === zzz,
        errorMsg: (input, label) => `Incorrect ${label.textContent}`,
      },
      {
        attribute: "pattern",
        isValid: (input) => {
          const patternRegex = new RegExp(input.pattern);
          return patternRegex.test(input.value);
        },
        errorMsg: (input, label) => `The email isn\'t correct - ${input.value}`,
      },
      {
        attribute: "customMaxLength",
        isValid: (input) =>
          input.value.length <=
          parseInt(input.getAttribute("customMaxLength"), 10),
        errorMsg: (input, label) =>
          `${label.textContent} should not be more than ${input.getAttribute(
            "customMaxLength"
          )}`,
      },

      {
        attribute: "minlength",
        isValid: (input) =>
          input.value && input.value.length >= parseInt(input.minLength, 10),
        errorMsg: (input, label) =>
          `${label.textContent} need to be at least ${input.minLength}`,
      },
      {
        attribute: "required",
        isValid: (input) => input.value.trim() !== "",
        errorMsg: (input, label) => `${label.textContent} is required`,
      },
    ];

    // create the validation code for our form
    const validateFormInput = () => {
      let errorMsgUserN = false;
      let errorMsgPw = false;

      for (const option of validationOptions) {
        if (
          usernameInput.hasAttribute(option.attribute) &&
          !option.isValid(usernameInput)
        ) {
          usernameError.textContent = option.errorMsg(
            usernameInput,
            usernameLabel
          );
          errorMsgUserN = true;
        } 
        
        if(!errorMsgUserN){
          errorMsgUserN = false;
          usernameError.textContent = " ";
        }

        if (
          passwordInput.hasAttribute(option.attribute) &&
          !option.isValid(passwordInput)
        ) {
          passwordError.textContent = option.errorMsg(
            passwordInput,
            passwordLabel
          );
          errorMsgPw = true;

        } 
        
        if(!errorMsgPw) {
          passwordError.textContent = " ";
          errorMsgPw = false;
        }

        if(!errorMsgPw && !errorMsgUserN) {
            loginHandler(true)
          }
      }
    };

    // const prevent any browser validation so to prevent our validation logic from conflicting
    formEl.setAttribute("novalidate", " ");

    // prevent the default behaviour of the browser
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      validateFormInput();
    });
  };

  return (
    <div className="popup-bg form-container">
      <div className="popup-add-image-content">
        <h3>Login</h3>

        <form ref={formElement} id="formElement">
          <label htmlFor="username" ref={usernameLabel} id="usernameLabel">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="username"
            ref={usernameInput}
            required
            xxr={xxu}
            customMaxLength="18"
            pattern="^(.+)@(.+)$"
            minlength="3"
          />
          <small
            className="error"
            id="usernameError"
            ref={usernameError}
          ></small>

          <label
            htmlFor="username"
            id="passwordLabel"
            className="password"
            ref={passwordLabel}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordInput}
            required
            customMaxLength="20"
            zzt={zzz}
            minlength="4"
          />
          <small
            className="error"
            id="passwordError"
            ref={passwordError}
          ></small>

          <button className="login-btn" onClick={validateForm}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
