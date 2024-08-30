import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

const Cartbutton = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      <CardGroup className="text-center">
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header className="text-center">Header</Card.Header>
          <Card.Body className="text-center">
            <Card.Title>Header Code</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button href="/Headercode.js" variant="primary">
              Primary
            </Button>
          </Card.Body>
        </Card>
        <br />

        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>useProps</Card.Header>
          <Card.Body>
            <Card.Title>useProps Code</Card.Title>
            <Card.Text>
              React allows us to pass information to a Component using something
              called props (which stands for properties). Props are objects
              which can be used inside a component.
            </Card.Text>
            <Button href="/useProps.jsx" variant="primary">
              Primary
            </Button>
          </Card.Body>
        </Card>
        <br />

        <Card border="success" style={{ width: "18rem" }}>
          <Card.Header>useStae Hook</Card.Header>
          <Card.Body>
            <Card.Title>useStae Hook Code</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Primary</Button>
          </Card.Body>
        </Card>
        <br />

        <Card border="danger" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Danger Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Primary</Button>
          </Card.Body>
        </Card>
        <br />
      </CardGroup>
      <br />
      <CardGroup className="text-center">
        <Card border="warning" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Warning Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Primary</Button>
          </Card.Body>
        </Card>
        <br />

        <Card border="info" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Primary</Button>
          </Card.Body>
        </Card>
        <br />

        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Primary</Button>
          </Card.Body>
        </Card>
        <br />

        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Primary</Button>
          </Card.Body>
        </Card>
        <br />
      </CardGroup>
    </div>
  );
};

export default Cartbutton;
