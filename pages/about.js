export default function About() {
  return (
    <div className="contianer">
      <h1>ABOUT US</h1>
      <p>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer
      </p>
      <p>We hope you enjoy your stay!</p>
      <style jsx>{`
        .contianer {
          display: flex;
          flex-direction: column;
          margin: 50px auto;
          width: 70%;
          padding: 30px;
          border: 1px solid RGB(230, 229, 230);
          box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 10px;
          gap: 10px;
        }
        .contianer h1 {
          margin-bottom: 20px;
          &:first-letter {
            font-size: 45px;
          }
        }
      `}</style>
    </div>
  );
}
