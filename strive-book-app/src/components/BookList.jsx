import SingleBook from "./SingleBook";
import { Component } from "react";
import Form from "react-bootstrap/Form";


class BookList extends Component {
    state = {
        query: "",
    };

    search = (e) => {
        this.setState({
            query: e.target.value,
        });
    };


    filterBookList = (list) => {
        const isFound = list.filter((book) =>
            book.title.toLowerCase().includes(this.state.query.toLowerCase())
        );

        console.log(isFound);
        return isFound;
    };


    render() {
        return (
            <div>
                <div>
                    <Form.Group className="m-3">
                        <Form.Control
                            type="text"
                            placeholder="Search here"
                            value={this.state.query}
                            onChange={(e) => this.search(e)}
                        />
                    </Form.Group>
                </div>

                <div className="d-flex flex-wrap justify-content-around">
                    {
                        !this.state.query
                            ? this.props.list.map((books) => (
                                <SingleBook books={books} />
                            ))
                            : this.filterBookList(this.props.list).map((books) => (
                                <SingleBook books={books} id={books.asin} />
                                // <SingleBook image={books.img} title={books.title} /> // this is same as the line above   
                            ))

                    }
                    {/* : this.props.list.filter(b => b.title.toLowerCase().includes(this.state.query)).map((b) => (
                  <SingleBook books={b} />
                  ))} */}


                </div>
            </div>
        );
    }
}

export default BookList;
