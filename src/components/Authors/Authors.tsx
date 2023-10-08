import React, { useEffect } from "react"
import Navigation from "../navbar"
import { Accordion, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import AuthorItem from "./AuthorItem"

export default function Authors() {
  const { authors, books } = useSelector((state: RootState) => state.app)
  const authorsData = authors.map((author) => {
    return {
      ...author,
      books: books.filter((book) => book.authorId == author.id),
    }
  })
  useEffect(() => {
    document.title = "myBookStore: Authors"
  }, [])

  return (
    <>
      <div className="authors d-flex flex-column align-items-center">
        <div className="authors-column">
          <h1 className="mt-5 mb-4">Authors</h1>
          <Accordion>
            {authorsData.map((val) => {
              return <AuthorItem data={val} />
            })}
          </Accordion>
        </div>
      </div>
    </>
  )
}
