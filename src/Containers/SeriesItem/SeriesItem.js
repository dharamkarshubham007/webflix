import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import styles from './SeriesItem.module.css';
const SeriesItem = (props) => {
  return (
    <div
      className="col-sm-4 col-md-4 col-lg-4 mt-2 mb-3"
      key={props.series.title}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.series.images["Poster Art"].url}
          className={styles.seriesImg}
        />
        <Card.Body>
          <Card.Title>{props.series.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            {props.series.programType.toUpperCase()}
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default SeriesItem;
