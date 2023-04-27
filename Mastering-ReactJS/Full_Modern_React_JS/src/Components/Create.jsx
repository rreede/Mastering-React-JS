import { useState } from "react";
import NavBar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  const [author, setAuthor] = useState("mario");

  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New BloG added");
      setIsPending(false);
    });

    navigate("/");
  };

  return (
    <div className="create">
      <NavBar />
      <div className="content create">
        <h2>Add a new Blog</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Blog Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="">Blog Body</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label htmlFor="">Author</label>
          <select
            name=""
            id=""
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="mario">mario</option>
            <option value="luigi">Luigi</option>
          </select>
          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Adding blog...</button>}
          <p>{title}</p>
          <p>{body}</p>
          <p>{author}</p>
        </form>
      </div>
    </div>
  );
};

export default Create;
