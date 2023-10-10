import React from "react"
import { Accordion } from "react-bootstrap"
import { Book } from "../../types"
import { Link } from "react-router-dom"

export default function AuthorItem({
  data,
}: {
  data: {
    books: Book[]
    authorName: string
    id: string
    description: string
  }
}) {
  return (
    <Accordion.Item eventKey={data.id}>
      <Accordion.Header>
        <span className="fs-5 fw-bold">{data.authorName}</span>
      </Accordion.Header>
      <Accordion.Body>
        <div className="fs-5 mb-4">{data.description}</div>
        {data.books.map((book) => {
          return (
            <Link
              to={`/book/${book.id}`}
              className="w-100 text-decoration-none p-2 px-4 d-block text-dark border"
            >
              <div className="fs-5 fw-semibold">
                {book.title}

                <span className="fs-6 fw-normal">
                  {" - "}
                  {book.genre}
                </span>
              </div>
              <div className="">{book.description}</div>
            </Link>
          )
        })}
      </Accordion.Body>
    </Accordion.Item>
  )
}
