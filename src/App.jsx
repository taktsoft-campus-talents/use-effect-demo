import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { ImageCard } from "./components/ImageCard";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [books, setBooks] = useState([]);
  const [selectedISBN, setSelectedISBN] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://openlibrary.org/search.json?title=asterix"
        );
        console.log(response.data);
        setBooks(response.data.docs);
      } catch (err) {
        setIsError(true);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  if (isError) {
    return (
      <>
        <h1>Component Lifecycle</h1>
        <p>Oops - something went wrong</p>
      </>
    );
  }

  return (
    <>
      <h1>Component Lifecycle</h1>

      <div className="main-container">
        {isLoading ? (
          <p>Lade Daten...</p>
        ) : (
          <ul>
            {books.map((book) => {
              return (
                <li
                  onClick={() => {
                    setSelectedISBN(book.isbn[0]);
                  }}
                  key={book.key}
                >
                  {book.title}
                </li>
              );
            })}
          </ul>
        )}

        <ImageCard isbn={selectedISBN} />
      </div>
    </>
  );
}

export default App;
