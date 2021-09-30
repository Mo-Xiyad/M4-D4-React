import { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

class SingleBook extends Component {

    state = {
        selected: false
    }

    selectCard = () => {
        this.setState({
            selected: !this.state.selected
        })
    }

    render() {
        return (
            <Card

                key={this.props.books.asin}
                style={{ width: "24%", marginTop: "10px" }}
                onClick={this.selectCard}
                className={this.state.selected ? 'selected' : null}

            >
                <Card.Img variant="top" src={this.props.books.img} />
                {/* <Card.Img variant="top" src={this.props.image} />  this line works only if the book is passed as "image=books.img"  */}
                <Card.Body>
                    <Card.Title>{this.props.books.title}</Card.Title>

                </Card.Body>


                {/* <Form.Group onClick={this.selectCard}  className={this.state.selected ? 'd-block mb-3' : "d-none"} controlId="formBasicCheckbox">
          <Form.Check checked={this.state.selected ? this.state.selected : false} type="checkbox" label="" />
        </Form.Group> */}


            </Card>

        );
    }
}

export default SingleBook;

