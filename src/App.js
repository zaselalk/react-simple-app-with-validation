import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setusers] = useState([]);

  function Adduser(newUser) {
    setusers((prev) => [...users, newUser]);
  }

  return (
    <div>
      <AddUser onNewUser={Adduser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
