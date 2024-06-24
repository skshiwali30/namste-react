import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h3>Count: {count}</h3>
      <h2>Name: {props.name}</h2>
      <h3>Location: Gurugram</h3>
      <h3>Contact: @skshiwali</h3>
    </div>
  );
};

export default User;
