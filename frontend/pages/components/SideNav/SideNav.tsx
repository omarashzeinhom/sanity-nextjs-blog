import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function SideNav() {
  const ArticleCategories = [
    "PHP",
    "JavaScript",
    "TypeScript",
    "CSS3",
    "SASS & SCSS",
    "GO",
    "C#",
  ];

  return (
    <Container fluid>
      <Navbar bg="light" expand="lg" className="mb-3">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/articles">Articles</Nav.Link>
                <NavDropdown.Divider />

                <NavDropdown title="Categories">
                  <NavDropdown.Item href="#action3">
                    Categories
                  </NavDropdown.Item>

                  {ArticleCategories.map((category: string, index: any) => {
                    return (
                      <NavDropdown.Item key={index} href={`/articles/${category}`}>
                        {category}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              </Nav>
              <NavDropdown.Divider />

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Navbar>
      </Container>

  );
}

export default SideNav;
