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
            <Panel.Heading style={{color: color}}>
              <Panel.Title toggle>{categories}</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
            <Grid>
                <Row>
                  <Col xs={8} md={8} lg={8}>
                    <ListGroup style={{color: color, fontWeight: 'bold', textAlign: 'center' }}>
                      <ListGroupItem style={{ fontWeight: 'bold' }}><strong>Score (out of 10): </strong>{out_of_10}</ListGroupItem>
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
