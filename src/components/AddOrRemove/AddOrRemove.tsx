import React, { useState } from "react"
import { AppDispatch, RootState } from "../../app/store"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../app/reducers/appSlice"
import LoginModal from "../LoginModal/LoginModal"

export default function AddOrRemove({
  value = 0,
  bookId,
  hideAdd = false,
}: {
  value: number
  bookId: string
  hideAdd?: boolean
}) {
  const dispatch = useDispatch<AppDispatch>()

  const { accessToken } = useSelector((state: RootState) => state.app)

  const [showLogin, setShowLogin] = useState(false)

  const onChange = (change: number) => {
    dispatch(addToCart({ bookId: bookId, count: change }))
  }
  const handleAdd = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    e.preventDefault()
    if (!accessToken) {
      setShowLogin(true)
      return
    }
    onChange(1)
  }
  const handleRemoveOne = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    e.preventDefault()
    onChange(-1)
  }
  const handleRemoveAll = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    e.preventDefault()
    onChange(-1 * value)
  }

  const onLoginComplete = () => {
    onChange(1)
  }

  if (!accessToken || (value < 1 && !hideAdd)) {
    return (
      <div role="button" className="fw-bold fadeClick" onClick={handleAdd}>
        Add to Cart
        <LoginModal
          show={showLogin}
          loginComplete={onLoginComplete}
          setShow={setShowLogin}
        />
      </div>
    )
  }

  return (
    <div className="addRemove">
      <div className="addRemove-button">
        <div
          className="fw-bold fadeClick"
          onClick={handleRemoveOne}
          role="button"
        >
          -
        </div>
        <div className="bg-light">{value}</div>
        <div className="fw-bold fadeClick" onClick={handleAdd} role="button">
          +
        </div>
      </div>
      <div
        role="button"
        className="text-danger ms-2 fw-bold fadeClick"
        onClick={handleRemoveAll}
      >
        Clear
      </div>
    </div>
  )
}
