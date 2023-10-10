import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../store"
import { AddToCartPayload, AppState, Author, AuthPayload, Book, Filter, RemoveFromCartPayload } from "../../types";



const books: Book[] = [
  { "id": "1", "title": "The Mystery of the Lost Key", "description": "A thrilling mystery novel.", "authorId": "1", "image": "https://picsum.photos/300/400", "price": 12.99, "genre": "Mystery", "rating": 4.5 },
  { "id": "2", "title": "A Tale of Two Cities", "description": "A classic novel by Charles Dickens.", "authorId": "2", "image": "https://picsum.photos/300/400", "price": 9.99, "genre": "Historical Fiction", "rating": 4.0 },
  { "id": "3", "title": "Into the Wild", "description": "An adventurous journey into the wilderness.", "authorId": "3", "image": "https://picsum.photos/300/400", "price": 14.99, "genre": "Adventure", "rating": 4.7 },
  { "id": "4", "title": "The Art of Coding", "description": "A guide to programming and coding.", "authorId": "4", "image": "https://picsum.photos/300/400", "price": 19.99, "genre": "Technology", "rating": 4.2 },
  { "id": "5", "title": "Love in Paris", "description": "A romantic story set in the City of Love.", "authorId": "5", "image": "https://picsum.photos/300/400", "price": 8.99, "genre": "Romance", "rating": 4.8 },
  { "id": "6", "title": "The Haunting of Hill House", "description": "A spine-chilling horror novel.", "authorId": "6", "image": "https://picsum.photos/300/400", "price": 11.99, "genre": "Horror", "rating": 3.9 },
  { "id": "7", "title": "The Science of Space", "description": "Exploring the mysteries of the universe.", "authorId": "7", "image": "https://picsum.photos/300/400", "price": 15.99, "genre": "Science", "rating": 4.6 },
  { "id": "8", "title": "The Adventures of Tom Sawyer", "description": "Mark Twain's classic tale of boyhood.", "authorId": "8", "image": "https://picsum.photos/300/400", "price": 9.99, "genre": "Classics", "rating": 4.4 },
  { "id": "9", "title": "Secrets of the Mediterranean", "description": "A culinary journey through Mediterranean cuisine.", "authorId": "9", "image": "https://picsum.photos/300/400", "price": 13.99, "genre": "Cooking", "rating": 4.9 },
  { "id": "10", "title": "Lost in the Jungle", "description": "Survival in the heart of the Amazon rainforest.", "authorId": "10", "image": "https://picsum.photos/300/400", "price": 17.99, "genre": "Adventure", "rating": 4.1 },
  { "id": "11", "title": "The Enigma Code", "description": "A gripping espionage thriller.", "authorId": "1", "image": "https://picsum.photos/300/400", "price": 12.99, "genre": "Mystery", "rating": 4.3 },
  { "id": "12", "title": "Great Expectations", "description": "Another classic by Charles Dickens.", "authorId": "2", "image": "https://picsum.photos/300/400", "price": 10.99, "genre": "Classics", "rating": 4.0 },
  { "id": "13", "title": "Exploring the Amazon", "description": "An expedition into the Amazon rainforest.", "authorId": "3", "image": "https://picsum.photos/300/400", "price": 16.99, "genre": "Adventure", "rating": 4.7 },
  { "id": "14", "title": "The Codebreakers", "description": "Decoding secrets during World War II.", "authorId": "4", "image": "https://picsum.photos/300/400", "price": 18.99, "genre": "History", "rating": 4.2 },
  { "id": "15", "title": "Romance in Venice", "description": "Love blossoms in the city of canals.", "authorId": "5", "image": "https://picsum.photos/300/400", "price": 7.99, "genre": "Romance", "rating": 4.8 },
  { "id": "16", "title": "The Haunted Mansion", "description": "A ghostly tale of a haunted house.", "authorId": "6", "image": "https://picsum.photos/300/400", "price": 11.99, "genre": "Horror", "rating": 3.9 },
  { "id": "17", "title": "The Solar System Odyssey", "description": "A journey through our solar system.", "authorId": "7", "image": "https://picsum.photos/300/400", "price": 14.99, "genre": "Science", "rating": 4.6 },
  { "id": "18", "title": "Adventures of Huckleberry Finn", "description": "Mark Twain's sequel to Tom Sawyer's adventures.", "authorId": "8", "image": "https://picsum.photos/300/400", "price": 10.99, "genre": "Classics", "rating": 4.4 },
  { "id": "19", "title": "Mediterranean Delights", "description": "Recipes and stories from the Mediterranean.", "authorId": "9", "image": "https://picsum.photos/300/400", "price": 12.99, "genre": "Cooking", "rating": 4.9 },
  { "id": "20", "title": "Journey to the Amazon", "description": "Survival and discovery in the Amazon rainforest.", "authorId": "10", "image": "https://picsum.photos/300/400", "price": 17.99, "genre": "Adventure", "rating": 4.1 },
  { "id": "21", "title": "The Cipher Conspiracy", "description": "Uncovering a web of conspiracies.", "authorId": "1", "image": "https://picsum.photos/300/400", "price": 13.99, "genre": "Mystery", "rating": 4.3 },
  { "id": "22", "title": "Oliver Twist", "description": "Charles Dickens' classic tale of an orphan's struggles.", "authorId": "2", "image": "https://picsum.photos/300/400", "price": 9.99, "genre": "Classics", "rating": 4.0 },
  { "id": "23", "title": "Lost in the Andes", "description": "Exploring the mysteries of the Andes mountains.", "authorId": "3", "image": "https://picsum.photos/300/400", "price": 15.99, "genre": "Adventure", "rating": 4.7 },
  { "id": "24", "title": "Codebreakers of World War II", "description": "Heroes who cracked the enemy's codes.", "authorId": "4", "image": "https://picsum.photos/300/400", "price": 19.99, "genre": "History", "rating": 4.2 },
  { "id": "25", "title": "Sunsets in Santorini", "description": "A tale of love and sunsets in Santorini.", "authorId": "5", "image": "https://picsum.photos/300/400", "price": 8.99, "genre": "Romance", "rating": 4.8 },
  { "id": "26", "title": "The Phantom Detective", "description": "Solving crimes in the shadows.", "authorId": "6", "image": "https://picsum.photos/300/400", "price": 11.99, "genre": "Mystery", "rating": 4.5 },
  { "id": "27", "title": "The Time Traveler's Dilemma", "description": "A journey through time and paradoxes.", "authorId": "7", "image": "https://picsum.photos/300/400", "price": 14.99, "genre": "Science Fiction", "rating": 4.2 },
  { "id": "28", "title": "The Lost Island", "description": "An adventure to find a hidden treasure.", "authorId": "8", "image": "https://picsum.photos/300/400", "price": 9.99, "genre": "Adventure", "rating": 4.8 },
  { "id": "29", "title": "The Quantum Code", "description": "Unlocking the secrets of quantum physics.", "authorId": "9", "image": "https://picsum.photos/300/400", "price": 12.99, "genre": "Science", "rating": 4.6 },
  { "id": "30", "title": "The Island of Dreams", "description": "A mystical island where dreams come true.", "authorId": "10", "image": "https://picsum.photos/300/400", "price": 17.99, "genre": "Fantasy", "rating": 4.4 },
  { "id": "31", "title": "The Silent Stalker", "description": "A psychological thriller with a chilling twist.", "authorId": "1", "image": "https://picsum.photos/300/400", "price": 13.99, "genre": "Mystery", "rating": 4.7 },
  { "id": "32", "title": "The Clockwork Kingdom", "description": "A steampunk adventure in a mechanized world.", "authorId": "2", "image": "https://picsum.photos/300/400", "price": 15.99, "genre": "Science Fiction", "rating": 4.0 },
  { "id": "33", "title": "The Lost Diary", "description": "Unraveling the secrets of a mysterious diary.", "authorId": "3", "image": "https://picsum.photos/300/400", "price": 12.99, "genre": "Mystery", "rating": 4.5 },
  { "id": "34", "title": "The Robot Revolution", "description": "A futuristic world where robots take control.", "authorId": "4", "image": "https://picsum.photos/300/400", "price": 14.99, "genre": "Science Fiction", "rating": 4.2 },
  { "id": "35", "title": "The Mediterranean Odyssey", "description": "A culinary and cultural journey.", "authorId": "5", "image": "https://picsum.photos/300/400", "price": 8.99, "genre": "Cooking", "rating": 4.9 },
  { "id": "36", "title": "The Ghost Ship", "description": "A haunted ship with a dark past.", "authorId": "6", "image": "https://picsum.photos/300/400", "price": 11.99, "genre": "Horror", "rating": 4.3 },
  { "id": "37", "title": "The Space Explorer's Handbook", "description": "A guide to interstellar travel.", "authorId": "7", "image": "https://picsum.photos/300/400", "price": 17.99, "genre": "Science", "rating": 4.6 },
  { "id": "38", "title": "The Adventures of Sherlock Holmes", "description": "Mysteries solved by the legendary detective.", "authorId": "8", "image": "https://picsum.photos/300/400", "price": 10.99, "genre": "Mystery", "rating": 4.4 },
  { "id": "39", "title": "The Mediterranean Feast", "description": "Delicious recipes from Mediterranean cuisine.", "authorId": "9", "image": "https://picsum.photos/300/400", "price": 12.99, "genre": "Cooking", "rating": 4.8 },
  { "id": "40", "title": "The Lost Temple", "description": "An archaeological adventure in search of a lost temple.", "authorId": "10", "image": "https://picsum.photos/300/400", "price": 16.99, "genre": "Adventure", "rating": 4.1 },
  { "id": "41", "title": "The Midnight Conspiracies", "description": "Conspiracies that unfold in the darkest hours.", "authorId": "1", "image": "https://picsum.photos/300/400", "price": 13.99, "genre": "Mystery", "rating": 4.3 },
  { "id": "42", "title": "The Clockwork Detective", "description": "Solving crimes in a steampunk world.", "authorId": "2", "image": "https://picsum.photos/300/400", "price": 15.99, "genre": "Mystery", "rating": 4.0 },
  { "id": "43", "title": "The Lost Expedition", "description": "A thrilling adventure in the Amazon rainforest.", "authorId": "3", "image": "https://picsum.photos/300/400", "price": 14.99, "genre": "Adventure", "rating": 4.7 },
  { "id": "44", "title": "The Robotic Uprising", "description": "When machines rebel against humanity.", "authorId": "4", "image": "https://picsum.photos/300/400", "price": 18.99, "genre": "Science Fiction", "rating": 4.2 },
  { "id": "45", "title": "The Taste of Italy", "description": "Exploring Italy's culinary delights.", "authorId": "5", "image": "https://picsum.photos/300/400", "price": 8.99, "genre": "Cooking", "rating": 4.9 },
  { "id": "46", "title": "The Haunting of Blackwood Manor", "description": "A terrifying ghost story.", "authorId": "6", "image": "https://picsum.photos/300/400", "price": 11.99, "genre": "Horror", "rating": 4.3 },
  { "id": "47", "title": "The Space Traveler's Guide", "description": "Journeying through the cosmos.", "authorId": "7", "image": "https://picsum.photos/300/400", "price": 17.99, "genre": "Science", "rating": 4.6 },
  { "id": "48", "title": "The Adventures of Robin Hood", "description": "A classic tale of the legendary outlaw.", "authorId": "8", "image": "https://picsum.photos/300/400", "price": 10.99, "genre": "Adventure", "rating": 4.4 },
  { "id": "49", "title": "The Mediterranean Escapade", "description": "Adventures in Mediterranean paradise.", "authorId": "9", "image": "https://picsum.photos/300/400", "price": 12.99, "genre": "Adventure", "rating": 4.8 },
  { "id": "50", "title": "The Lost City of Atlantis", "description": "Searching for the mythical lost city.", "authorId": "10", "image": "https://picsum.photos/300/400", "price": 16.99, "genre": "Adventure", "rating": 4.1 }
];

const authors: Author[] = [
  { authorName: "Alice Smith", id: "1", description: "Renowned mystery writer with a passion for intricate plots." },
  { authorName: "Bob Johnson", id: "2", description: "Historical fiction author known for vividly recreating the past." },
  { authorName: "Charlie Brown", id: "3", description: "Adventurous spirit and author of thrilling travel tales." },
  { authorName: "David Wilson", id: "4", description: "Tech guru and coding expert, sharing knowledge with others." },
  { authorName: "Eve Miller", id: "5", description: "Romance novelist who captures the essence of love in her stories." },
  { authorName: "Frank Davis", id: "6", description: "Master of horror, crafting spine-chilling tales of the supernatural." },
  { authorName: "Grace Turner", id: "7", description: "Astrophysicist and science communicator exploring the cosmos." },
  { authorName: "Henry Parker", id: "8", description: "Classic literature enthusiast with a love for timeless tales." },
  { authorName: "Isabel Garcia", id: "9", description: "Culinary expert and travel enthusiast sharing Mediterranean flavors." },
  { authorName: "Jack Robinson", id: "10", description: "Adventurer and survivalist, recounting tales of jungle expeditions." },
];

const initialState: AppState = {
  accessToken: localStorage.getItem("accessToken") || "",
  email: localStorage.getItem("email") || "",
  books,
  authors,
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "{}") : {},
  loading: false,
  filteredBooks: [],
  featuredBooks: [],
}

export const getBooksAsync = createAsyncThunk(
  "counter/fetchCount",
  async (filter: Filter) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return filter
  },
)

export const appSlice = createSlice({
  name: "bookstore",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      state.cart[action.payload.bookId] = (state.cart?.[action.payload.bookId] ?? 0) + action.payload.count
      if (state.cart[action.payload.bookId] < 1) delete state.cart[action.payload.bookId]
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    addAccessToken: (state, action: PayloadAction<AuthPayload>) => {
      state.accessToken = action.payload.accessToken
      state.email = action.payload.email
      localStorage.setItem("accessToken", action.payload.accessToken)
      localStorage.setItem("email", action.payload.email)
      if (!state.accessToken) state.cart = {}
    },
    removeFromCart: (state, action: PayloadAction<RemoveFromCartPayload>) => {
      delete state.cart[action.payload.bookId]
    },
    setFeaturedBooks: (state) => {
      const randomIndices: number[] = [];
      while (randomIndices.length < books.length / 2) {
        const randomIndex = Math.floor(Math.random() * books.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }

      const selectedBooks: Book[] = randomIndices.map((index) => books[index]);

      selectedBooks.sort((a, b) => b.rating - a.rating);

      state.featuredBooks = selectedBooks.slice(0, 5)
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getBooksAsync.pending, (state,) => {
        state.loading = true
      })
      .addCase(getBooksAsync.fulfilled, (state, action) => {
        const filter = action.payload
        const filteredBooks: Book[] = []
        for (let i = 0; i < state.books.length; i++) {
          if (filter?.author && state.books[i].authorId !== filter.author) {
            continue
          }
          if (filter?.genre && state.books[i].genre !== filter.genre) {
            continue
          }
          filteredBooks.push(state.books[i])
        }
        for (let i = 0; i < filteredBooks.length; i++) {
          filteredBooks[i].author = state.authors.find((value) => value.id == filteredBooks[i].authorId)
        }
        state.filteredBooks = filteredBooks.sort((a, b) => {
          if (filter.sort == 'author') {
            if (a.author!.authorName.toLowerCase() > b.author!.authorName.toLowerCase()) {
              return 1 * filter.sortOrder
            }

            if (a.author!.authorName.toLowerCase() < b.author!.authorName.toLowerCase()) {
              return -1 * filter.sortOrder
            }
            return 0
          }
          if (filter.sort == 'genre') {
            if (a.genre.toLowerCase() > b.genre.toLowerCase()) {
              return 1 * filter.sortOrder
            }

            if (a.genre.toLowerCase() < b.genre.toLowerCase()) {
              return -1 * filter.sortOrder
            }
            return 0
          } else {
            if (a.rating < b.rating) {
              return 1 * filter.sortOrder
            }
            if (a.rating > b.rating) {
              return -1 * filter.sortOrder
            }
            return 1
          }

        })
        state.loading = false
      })
      .addCase(getBooksAsync.rejected, (state) => {
        state.loading = false
      })
  },
})

export const { addToCart, removeFromCart, setFeaturedBooks, addAccessToken } = appSlice.actions



export default appSlice.reducer
