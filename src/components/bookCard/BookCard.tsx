import React from "react"
import { Book } from "../../types"
import { Card } from "react-bootstrap"
import AddOrRemove from "../AddOrRemove/AddOrRemove"
import { useNavigate } from "react-router-dom"

export default function BookCard({
  book,
  inCart,
}: {
  book: Book
  inCart: number
}) {
  const navigate = useNavigate()
  return (
    <Card
      as={"a"}
      href={`book/${book.id}`}
      onClick={(e) => {
        e.preventDefault()
        navigate(`/book/${book.id}`)
      }}
      target="_blank"
      className="bookCard text-decoration-none"
      border="warning"
    >
      <Card.Img src={book.image + "?" + book.id} />
      <Card.ImgOverlay className=" imageOverlay text-end text-light">
        <Card.Title className="fw-bold fs-3">{`$${book.price}`}</Card.Title>
        <Card.Text className="fw-bold font-monospace">
          Rating {book.rating}/5
        </Card.Text>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle>
          {book.genre} · {book.author?.authorName}
        </Card.Subtitle>
        <Card.Text className="mt-4">{book.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex justify-content-end">
          <AddOrRemove bookId={book.id} value={inCart} />
        </div>
      </Card.Footer>
    </Card>
  )
}
