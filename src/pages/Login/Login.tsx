import React, { useState } from "react";
import { Input } from "../../components/Input";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const useOnUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const sendLogin = () => {
    event?.preventDefault();
    console.log('Hello')
  }

  return (
    <div className="login-container">
      <form>
        <Input placeholder="Username" onChange={ useOnUsernameChange } />
        <Input placeholder="Password" onChange={ onPasswordChange }  />
        <PrimaryButton title="Login" onClick={ sendLogin } />
      </form>
    </div>
  );
}