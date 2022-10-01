import { Fragment, useState } from "react";

const HookForm = () => {
  const [name, setName] = useState({ firstName: "", lastNane: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`name:${name.firstName + "  " + name.lastName}
    email:${email}
    password:${password}`);
  };

  return (
    <Fragment>
      <h1>Function Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          value={name.firstName}
          type="text"
          placeholder="Enter Your First Name"
        />
        <br />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
          type="text"
          placeholder="Enter Your Last Name"
        />
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter Your Email"
        />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter Your Password"
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </Fragment>
  );
};

export default HookForm;
