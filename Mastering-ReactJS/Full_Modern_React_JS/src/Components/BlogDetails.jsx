import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./Navbar";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      <NavBar />
      <div className="content">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>📋 {blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleClick}>Delete</button>
          </article>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
