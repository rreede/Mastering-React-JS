import { useState } from "react";
import NavBar from "./Navbar";

const Create = () => {
  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  const [author, setAuthor] = useState("mario");

  return (
    <div className="create">
      <NavBar />
      <div className="content create">
        <h2>Add a new Blog</h2>
        <form>
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
          <button>Add Blog</button>
          <p>{title}</p>
          <p>{body}</p>
          <p>{author}</p>
        </form>
      </div>
    </div>
  );
};

export default Create;
