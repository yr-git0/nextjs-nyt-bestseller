import Link from "next/link";

export default function Home({ results }) {
  return (
    <div className="contianer">
      <p className="title">THE NEW YORK TIMES BEST SELLER EXPLORER</p>
      <div className="list">
        {results?.map((item) => (
          <div className="item" key={item.list_name}>
            <Link
              href={{
                pathname: `/list/${item.list_name_encoded}`,
                query: {
                  id: item.list_name_encoded,
                  name: item.display_name,
                },
              }}
              as={`/list/${item.list_name_encoded}`}
            >
              {item.display_name}→
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .contianer {
          margin: 50px auto;
          width: 70%;
          padding: 40px;
          border: 1px solid RGB(230, 229, 230);
          box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 10px;
        }
        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 35px;
          padding-top: 70px;
        }
        .title {
          font-size: 40px;
          padding-right: 20%;
        }
        .item {
          font-size: 23px;
          padding: 10px 10px;
          width: fit-content;
          box-shadow: 15px 15px 25px RGB(222, 221, 222);
          transition: box-shadow 300ms ease-in-out,
            border-color 500ms ease-in-out;
          border: 2px solid black;
          border-top-left-radius: 255px 15px;
          border-top-right-radius: 15px 225px;
          border-bottom-right-radius: 225px 15px;
          border-bottom-left-radius: 15px 255px;
        }
        .item:hover {
          box-shadow: 3px 3px 3px RGB(222, 221, 222);
        }
        .item:focus {
          border-color: RGB(194, 193, 194);
        }
        .item:active {
          border-color: RGB(40, 107, 188);
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/list`)
  ).json();

  return {
    props: {
      results,
    },
  };
}
