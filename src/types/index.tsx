export interface Book {
  id: string
  title: string
  description: string
  authorId: string
  image: string
  price: number
  genre: string
  rating: number // A number between 1 and 5
  author?: Author
}

export interface Author {
  authorName: string
  id: string
  description: string
}

export interface AppState {
  accessToken: string
  email: string
  books: Book[]
  authors: Author[]
  cart: Record<string, number> //bookId and count
  loading: boolean
  filteredBooks: Book[]
  featuredBooks: Book[]
}
export interface Filter {
  author: string
  genre: string
  sort: "author" | "genre" | "rating" | string
  sortOrder: -1 | 1
}
export interface AddToCartPayload {
  bookId: string
  count: number
}
export interface RemoveFromCartPayload {
  bookId: string
}
export interface AuthPayload {
  accessToken: string
  email: string
}
