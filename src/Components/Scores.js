import React, { Component } from 'react';
import { Row, Grid, Panel, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

class Scores extends Component {
  render() {
    let categoryItems;
    if (this.props.categs) {
      categoryItems = this.props.categs.map(cat => {

        let color = cat.scores.categories.color;
        //console.log(color);
        let categories = cat.scores.categories.name;
        //console.log(categories);
        let out_of_10 = cat.scores.categories.score_out_of_10;
       // console.log(out_of_10);

        return (
          <Panel accordion="true">
            <Panel.Heading>
              <Panel.Title toggle>CITY CATEGORIES</Panel.Title>
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
      <div className="categoryItems">
        {categoryItems}
      </div>
    );
  }
}

export default Scores;
