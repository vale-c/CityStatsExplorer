import React, { Component } from 'react';
import { Row, Grid, Panel, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

class Scores extends Component {
  render() {
    let scoreItems;
    if (this.props.scores) {
      scoreItems = this.props.scores.map(score => {

        let color = score.color;

        let categories = score.name;

        let out_of_10 = score.score_out_of_10;

        return (
          <Panel accordion="true" key={color} eventKey={color}>
            <Panel.Heading>
              <Panel.Title toggle>{categories}</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
            <Grid>
                <Row>
                  <Col xs={8} md={8} lg={8}>
                    <ListGroup>
                      <ListGroupItem style={{ color: "EEEEEE", textAlign: 'center' }}><strong>Color: </strong>{color}</ListGroupItem>
                      <ListGroupItem style={{ color: "EEEEEE", textAlign: 'center' }}><strong>Categories: </strong>{categories}</ListGroupItem>
                      <ListGroupItem style={{ color: "EEEEEE", textAlign: 'center' }}><strong>Score (out of 10): </strong>{out_of_10}</ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </Grid>
            </Panel.Body>
          </Panel>
          )
      });
    }

    return (
      <div className="categoryItems">
        {scoreItems}
      </div>
    );
  }
}

export default Scores;
