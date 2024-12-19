import { useState } from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PostService from "../services/post.service";

const Create = () => {
  const [postDetail, setPostDetail] = useState({
    title: "",
    summary: "",
    content: "",
    file: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "file") {
      setPostDetail({ ...postDetail, [name]: e.target.files[0] });
    } else {
      setPostDetail({ ...postDetail, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form default submission behavior
    try {
      const data = new FormData();
      data.append("title", postDetail.title);
      data.append("summary", postDetail.summary);
      data.append("content", postDetail.content);
      data.append("file", postDetail.file);

      const response = await PostService.createPost(data);

      if (response.status === 200) {
        swal
          .fire({
            title: "Create Post",
            text: "Create Post successfully",
            icon: "success",
          })
          .then(() => {
            setPostDetail({
              title: "",
              summary: "",
              content: "",
              file: null,
            });
          });
        navigate("/");
      }
    } catch (error) {
      swal.fire({
        title: "Create Post",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 mt-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Create New Post
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            value={postDetail.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
            placeholder="Enter the post title"
            required
          />
        </div>

        <div>
          <label
            htmlFor="summary"
            className="block text-sm font-semibold text-gray-700"
          >
            Summary
          </label>
          <textarea
            name="summary"
            value={postDetail.summary}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
            placeholder="Write a short summary"
            rows="3"
            required
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-semibold text-gray-700"
          >
            Content
          </label>
          <ReactQuill
            name="content"
            value={postDetail.content}
            onChange={handleChange}
            placeholder="Write the content of your post"
            className="mt-1 border border-gray-300 rounded-md text-sm"
            theme="snow"
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
                ["bold", "italic", "underline"],
                ["link"],
                [{ align: [] }],
                ["image"],
                ["clean"],
              ],
            }}
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-semibold text-gray-700"
          >
            Upload Image
          </label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 text-sm"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
