import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";
import { Link } from "react-router-dom";

class RestaurantCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: {
        id: "",
        image: "",
        title: "",
        imageType: "",
        isSelected: false,
      },
    };
  }

  // recipeClick(selectedRecipe) {
  //   const { allRecipes } = this.state;
  //   console.log("recipeclick:", selectedRecipe.target.id);
  //   this.setState({
  //     recipes: this.props.recipes.map((recipe) => ({
  //       isSelected: recipe.id === selectedRecipe ? !recipe.isSelected : recipe.isSelected,
  //     })),
  //   });
  // }

  render() {
    console.log("cardmap", this.props.recipes.results);
    if (this.props.recipes.results == null) {
      console.log("recipes null");
    } else {
      return (
        <div className="recipeCard">
          <Row xs={1} md={2} lg={3} xl={4} xll={5} className="g-4">
            {this.props.recipes.results.map((results) => {
              console.log(results.id);
              console.log(results);
              return (
                <Col>
                  <Card>
                    {/* <Link to={'/recipe/' + results.id}>
                        <Card.Img variant="top" src={results.image} />
                    </Link> */}
                    <a href={"/recipe/" + results.id}>
                      <Card.Img variant="top" src={results.image} onClick={this.recipeClick} />
                    </a>
                    <Card.Body>
                      <Card.Title style={{ height: "88px" }}>{results.title}</Card.Title>
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      );
    }
  }
}

export default RestaurantCard;
