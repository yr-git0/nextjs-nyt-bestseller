import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Title from "../components/Title";

export default function BookList() {
  const [results, setResults] = useState({});
  const router = useRouter();
  const { id, name } = router.query;

  useEffect(() => {
    async function fetchData() {
      const { results } = await (
        await fetch(`http://localhost:3000/api/list/${id}`)
      ).json();
      setResults(results);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <Title title={name} />
      <p>{name}</p>
      {Object.keys(results).length > 0 ? (
        <div className="books">
          {results.books.map((book) => (
            <div className="book" key={book.rank}>
              <div className="book_cover">
                <img src={book.book_image} />
              </div>
              <p className="book_title">{book.title}</p>
              <p className="book_author">{book.author}</p>
              <Link href={book.amazon_product_url}>
                <div className="button">Buy now →</div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
      <style jsx>{`
        .container {
          padding: 100px 30px;
          display: flex;
          flex-direction: column;
          max-width: 1415px;
          margin: 0 auto;
        }
        .container p {
          text-align: center;
          font-size: 30px;
          margin-bottom: 30px;
        }
        .books {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 35px;
        }
        .book {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 200px;
          border: 1px solid RGB(183, 181, 183);
          box-shadow: 3px 3px 3px RGB(222, 221, 222);
        }
        .book_cover {
          overflow: hidden;
          border-bottom: 1px solid rgba(183, 181, 183, 0.3);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          background-color: white;
          height: 230px;
        }
        .book_cover img {
          width: 100%;
        }
        .book .book_title {
          padding: 15px 0 2px 15px;
          text-align: left;
          font-size: 20px;
          font-weight: bold;
          margin: 0;
        }
        .book .book_author {
          font-size: 13px;
          color: blue;
          padding: 0px 15px;
          text-align: left;
          margin: 0;
          flex: auto;
        }
        .book .button {
          width: fit-content;
          padding: 5px 12px;
          margin: 20px 13px;
          box-shadow: 7px 7px 17px RGB(222, 221, 222);
          transition: box-shadow 300ms ease-in-out;
          border: 2px solid black;
          border-top-left-radius: 255px 15px;
          border-top-right-radius: 15px 225px;
          border-bottom-right-radius: 225px 15px;
          border-bottom-left-radius: 15px 255px;
        }
        .book .button:hover {
          box-shadow: 3px 3px 3px RGB(222, 221, 222);
        }
        .loading {
          font-size: 20px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}

export function getServerSideProps({ params }) {
  console.log("list상세");
  console.log(params);

  return {
    props: { params },
  };
}
