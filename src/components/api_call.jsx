import axios from "axios";
import { useState } from "react";

export default function ApiCall() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const new_quote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        console.log(response.data.content, "by", response.data.author);
        setContent(response.data.content);
        setAuthor(response.data.author);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1 className="title">Random Quotes API</h1>
      <h2 className="quote">{content}</h2>
      <hr className="separator" />
      <h3 className="author">- {author}</h3>
      <button onClick={new_quote}>New Quote</button>
    </>
  );
}
