import { Component } from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

class AddComment extends Component {
    render() {
        return (
            <Container className="d-flex justify-content-center">
                <Form.Group className="mb-3">
                    <Form.Label>Comment on the book here</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                {/* <Button>
                    Add comment
                </Button> */}

            </Container>
        )
    }
}
export default AddComment
