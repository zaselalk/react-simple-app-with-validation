import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModel.module.css";

export default function ErrorModel(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onHidemodel}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div>
            <p className={classes.content}>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onHidemodel}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
}
