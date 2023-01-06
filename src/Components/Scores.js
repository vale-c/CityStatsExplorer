import React, { Component } from "react";
import {
  Row,
  Grid,
  Panel,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

let listGroupItemStyle = {
  border: "none",
};

function darkenColor(color) {
  const colorValues = color.match(/[a-f\d]{2}/gi).map(hex => parseInt(hex, 16));
  const darkenedColorValues = colorValues.map(value => Math.floor(value * 0.8));
  return `#${darkenedColorValues.map(value => value.toString(16)).join('')}`;
}

class Scores extends Component {
  render() {
    let scoreItems;
    if (this.props.scores) {
      scoreItems = this.props.scores.map((score) => {
        let color = score.color;
        let categories = score.name;

        let out_of_10 = score.score_out_of_10;

        return (
          <Panel accordion="true" key={color} eventKey={color}>
            <Panel.Heading style={{ color: darkenColor(color) }}>
              <Panel.Title toggle>{categories}</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              <Grid>
                <Row>
                  <Col xs={8} md={8} lg={8}>
                    <ListGroup>
                      <ListGroupItem style={listGroupItemStyle}>
                        <span className="font-weight-bold">
                          Score (out of 10):{" "}
                        </span>
                        {out_of_10.toFixed(2)}
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </Grid>
            </Panel.Body>
          </Panel>
        );
      });
    }

    return <div className="categoryItems">{scoreItems}</div>;
  }
}

export default Scores;
