import "./App.scss"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/home/Home"
import BookStore from "./components/bookStore/BookStore"
import Authors from "./components/Authors/Authors"
import Navigation from "./components/navbar"
import BookPage from "./components/BookPage/BookPage"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/books" element={<BookStore />} />
        <Route path="/book/:bookId" element={<BookPage />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="*" element={<Navigate replace to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App