import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
export default function UserList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user[0].id}>
            {user[0].username}
            {user[0].age}
          </li>
        ))}
      </ul>
    </Card>
  );
}
