import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../app/store"
import { addAccessToken } from "../../app/reducers/appSlice"

export default function LoginModal({
  show,
  setShow,
  loginComplete,
}: {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  loginComplete?: () => void
}) {
  const [email, setEmail] = useState(localStorage.getItem("email") || "")

  const dispatch = useDispatch<AppDispatch>()

  const handleShow = (a: boolean) => {
    return () => setShow(a)
  }
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  let validEmail = emailPattern.test(email)

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    console.log("here")
    if (!validEmail) {
      alert("Please input a valid email")
      return
    }
    dispatch(addAccessToken({ accessToken: "validaccesstoken", email: email }))
    setShow(false)
    loginComplete && loginComplete()
  }
  return (
    <Modal show={show} onHide={handleShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              autoFocus
              isValid={validEmail}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
