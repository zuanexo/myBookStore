import React, { useEffect } from "react"
import Navigation from "../navbar"
import { Carousel } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { setFeaturedBooks } from "../../app/reducers/appSlice"

export default function Home() {
  const featuredBooks = useSelector((state: RootState) => {
    return state.app.featuredBooks
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setFeaturedBooks())
  }, [])

  return (
    <>
      <div className="home  p-0 p-sm-5">
        <p className="text-center w-100 p-5 mt-5 home-welcome">
          Welcome to myBookStore, a literary haven that embraces the world of
          books without censorship. We offer a diverse collection spanning
          various genres, encouraging open conversations about literature,
          including adult topics. Explore our shelves and embark on a journey
          through the uncharted territories of your imagination, where the
          written word knows no bounds.
        </p>
        <h2 className="my-2 mb-sm-5 ">Featured this week</h2>
        {!!featuredBooks.length && (
          <Carousel className={"home_carousal"}>
            {!!featuredBooks.length &&
              featuredBooks.map((value) => {
                return (
                  <Carousel.Item
                    key={value.id}
                    href={`/book/${value.id}`}
                    as={"a"}
                  >
                    <img
                      src={value.image + "?" + value.id}
                      className="home_carousal-image py-1"
                    />
                    <Carousel.Caption>
                      <h3>{value.title}</h3>
                      <h2>{value.author?.authorName}</h2>
                      <p>{value.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
          </Carousel>
        )}
      </div>
    </>
  )
}
