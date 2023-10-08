import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { RootState } from "../../app/store"
import { useEffect } from "react"
import AddOrRemove from "../AddOrRemove/AddOrRemove"

export default function BookPage() {
  const params = useParams()
  const { books, authors, cart } = useSelector((state: RootState) => state.app)

  const navigate = useNavigate()

  const book = books.find((book) => book.id == params.bookId)
  useEffect(() => {
    if (!book) navigate("/books", { replace: true })
  }, [book])

  const author = authors.find((a) => a.id == book?.authorId)

  useEffect(() => {
    document.title = "myBookStore: " + book?.title
  }, [book?.title])

  return (
    <div className="bookPage">
      <div className="bookPage-column border d-flex flex-column flex-md-row w-100">
        <div className="w-100 d-flex bookPage-imgDiv justify-content-center bg-light bg-gradient">
          <img className="h-100 w-100" src={`${book?.image}?${book?.id}`} />
        </div>

        <div className="w-100  p-2 p-sm-5 d-flex flex-column align-items-end">
          <div className="fs-4 fw-bold text-end">{book?.title}</div>
          <span className="fs-5 fw-bold">{author?.authorName}</span>
          <span className="fs-5">{book?.genre}</span>
          <span className="mb-5 flex-grow-1">{book?.description}</span>
          <span className="fw-bold fs-3" mb-3>
            ${book?.price}
          </span>
          <div className="bookPage-addToCart">
            <AddOrRemove value={cart?.[book!.id] ?? 0} bookId={book!.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
