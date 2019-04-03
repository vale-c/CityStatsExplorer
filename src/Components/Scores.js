import React, { Component } from 'react';
import { Row, Grid, Panel, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

let scoreItemsStyle = {
  backgroundColor: 'red'
}

class Scores extends Component {
  render() {
    let scoreItems;
    if (this.props.scores) {
      scoreItems = this.props.scores.map(score => {

        let color = score.categories.color;
        //console.log(color);
        let categories = score.categories.name;
        //console.log(categories);
        let out_of_10 = score.categories.score_out_of_10;
       // console.log(out_of_10);

        return (
          <Panel accordion="true">
            <Panel.Heading>
              <Panel.Title toggle>CITY QUALITY</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
            <Grid>
                <Row>
                  <Col xs={8} md={8} lg={8}>
                    <ListGroup>
                      <ListGroupItem style={{ color: "EEEEEE" }}><strong>Color: </strong>{color}</ListGroupItem>
                      <ListGroupItem style={{ color: "EEEEEE" }}><strong>Categories: </strong>{categories}</ListGroupItem>
                      <ListGroupItem style={{ color: "EEEEEE" }}><strong>Score (out of 10): </strong>{out_of_10}</ListGroupItem>
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
      <div className="scoreItems" style={scoreItemsStyle}>
        {scoreItems}
      </div>
    );
  }
}

export default Scores;
