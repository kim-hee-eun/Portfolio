import "../CSS/Login.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onClickLogin = () => {
    if (id === "heeeun711" && password === "123456") {
      return navigate("/");
    } else {
      return alert("다시 입력해주세요!");
    }
  };
  return (
    <div className="login">
      <div id="login-box">
        <h1 id="welcomeMsg">Welcome to Hee Eun's Portfolio!</h1>
        <form>
          <div className="id">
            <input
              type="text"
              value={id}
              onChange={onIdHandler}
              placeholder="아이디를 입력해주세요"
            ></input>
          </div>
          <div className="password">
            <input
              type="password"
              value={password}
              onChange={onPasswordHandler}
              placeholder="비밀번호를 입력해주세요"
            ></input>
          </div>

          <button onClick={onClickLogin} className="loginBtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
