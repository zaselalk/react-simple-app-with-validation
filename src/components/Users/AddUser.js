import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import React, { useState } from "react";
import ErrorModel from "../UI/ErrorModel";

export default function AddUser(props) {
  const [Enterdusername, setEnterdusername] = useState("");
  const [EnterdAge, setEnterdAge] = useState("");
  const [error, setError] = useState();

  function onFormSubmit(event) {
    event.preventDefault();
    if (Enterdusername.trim().length === 0 || EnterdAge.trim().length === 0) {
      setError({
        title: "Some Empty Values",
        message: "Username or Age can't be empty",
      });
      return;
    }
    if (+EnterdAge < 1) {
      setError({
        title: "Age Validation Faild",
        message: "Age must be greater than 1 ",
      });
      return;
    }

    props.onNewUser([
      {
        id: Math.random() * 10,
        username: Enterdusername,
        age: EnterdAge,
      },
    ]);

    setEnterdAge("");
    setEnterdusername("");
  }

  function usernameHandler(event) {
    setEnterdusername(event.target.value);
  }

  function ageHandler(event) {
    setEnterdAge(event.target.value);
  }
  function hideModel() {
    setError(null)
  }

  return (
    <div>
      {error && (
        <ErrorModel title={error.title} message={error.message} onHidemodel={hideModel} />
      )}
      <Card className={classes.input}>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameHandler}
            value={Enterdusername}
          />

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={ageHandler}
            value={EnterdAge}
          />

          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </div>
  );
}
