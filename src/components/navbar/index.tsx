import React, { useMemo, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link, useLocation } from "react-router-dom"
import { AppDispatch, RootState } from "../../app/store"
import { useDispatch, useSelector } from "react-redux"
import AddOrRemove from "../AddOrRemove/AddOrRemove"
import { addAccessToken } from "../../app/reducers/appSlice"
import LoginModal from "../LoginModal/LoginModal"

export default function Navigation() {
  const { pathname } = useLocation()
  const { books, authors, cart, accessToken, email } = useSelector(
    (state: RootState) => state.app,
  )
  const dispatch = useDispatch<AppDispatch>()

  const [showCart, setShowCart] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const handleShow = (val: boolean) => {
    return () => setShowCart(val)
  }
  const cartArray = useMemo(() => {
    let temp = []
    for (const [key, value] of Object.entries(cart)) {
      let associatedBook = books.find((book) => book.id == key)
      let associatedAuthor = authors.find(
        (author) => author.id == associatedBook?.authorId,
      )
      temp.push({
        bookId: key,
        title: associatedBook?.title,
        price: associatedBook?.price,
        count: value,
        author: associatedAuthor?.authorName,
      })
    }
    return temp
  }, [JSON.stringify(cart)])
  const totalPrice =
    cartArray?.length &&
    cartArray?.reduce((total, { price, count }) => {
      return total + (price ?? 0) * (count ?? 0)
    }, 0)
  const totalCount =
    cartArray?.length &&
    cartArray?.reduce((total, { count }) => {
      return total + (count ?? 0)
    }, 0)

  const handleLogOut = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    dispatch(addAccessToken({ accessToken: "", email: "" }))
  }
  return (
    <Navbar expand="lg" className="bg-warning-subtle">
      <Container>
        <Navbar.Brand href="#home">theBookStore:</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={pathname} className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
            <Nav.Link href="/authors">Authors</Nav.Link>
            {!!accessToken ? (
              <>
                <Nav.Link
                  eventKey="cart"
                  active={showCart}
                  onClick={handleShow(true)}
                >
                  Cart({totalCount || 0})
                </Nav.Link>
                <NavDropdown
                  title={email.slice(0, 6) + "..."}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={handleLogOut} eventKey="logout">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                <Modal show={showCart} onHide={handleShow(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Your cart</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {!totalCount ? (
                      <Link to="/books" onClick={handleShow(false)}>
                        View Books
                      </Link>
                    ) : (
                      <>
                        {cartArray.map((val) => {
                          return (
                            <div
                              className="cartItem shadow my-2"
                              key={val.bookId}
                            >
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="fs-5">{val.title}</div>
                                <div>${val.price}/unit</div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between mt-1">
                                {val.author}
                                <AddOrRemove
                                  value={val.count}
                                  bookId={val.bookId}
                                />
                              </div>
                            </div>
                          )
                        })}
                      </>
                    )}
                  </Modal.Body>
                  <Modal.Footer>Total ${totalPrice.toFixed(2)}</Modal.Footer>
                </Modal>
              </>
            ) : (
              <>
                <Nav.Link
                  onClick={() => setShowLogin(true)}
                  eventKey="login"
                  active={showLogin}
                >
                  Login
                </Nav.Link>
                <LoginModal
                  show={showLogin && !accessToken}
                  setShow={setShowLogin}
                />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
