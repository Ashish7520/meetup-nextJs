import { Fragment } from "react";

import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={classes.details}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.address}</p>
      <p>{props.descreption}</p>
    </section>
  );
};

export default MeetupDetail;
