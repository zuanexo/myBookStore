import React, { useEffect, useState } from "react"
import Navigation from "../navbar"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../app/store"
import { getBooksAsync } from "../../app/reducers/appSlice"
import { Filter } from "../../types"
import { Container, Form, Row } from "react-bootstrap"
import BookCard from "../bookCard/BookCard"

export default function BookStore() {
  const { filteredBooks, loading, cart } = useSelector(
    (state: RootState) => state.app,
  )
  const dispatch = useDispatch<AppDispatch>()

  const [filter, setFilter] = useState<Filter>({
    author: "",
    genre: "",
    sort: "rating",
    sortOrder: 1,
  })

  useEffect(() => {
    dispatch(getBooksAsync(filter))
  }, [filter.sort])

  useEffect(() => {
    document.title = "myBookStore: Browse"
  }, [])

  return (
    <>
      <div className="bookStore d-flex flex-column align-items-center">
        <Container fluid="lg">
          <h1 className="mt-5">Browse collection</h1>
          <div className="d-flex wrap justify-content-end align-self-end align-items-center">
            <span className="text-nowrap me-3">Sort by</span>
            <Form.Select
              value={filter.sort}
              className="align-self-end"
              onChange={(event) =>
                setFilter((filter) => {
                  console.log({ event })
                  return { ...filter, sort: event.target.value }
                })
              }
              style={{ width: "fit-content" }}
            >
              <option value={"rating"}>Rating</option>
              <option value={"author"}>Author</option>
              <option value={"genre"}>Genre</option>
            </Form.Select>
          </div>
          <Row xs={1} sm={2} lg={3} xl={4}>
            {filteredBooks.map((book) => {
              return (
                <div className="p-4">
                  <BookCard book={book} inCart={cart?.[book.id] || 0} />
                </div>
              )
            })}
          </Row>
        </Container>
      </div>
    </>
  )
}
