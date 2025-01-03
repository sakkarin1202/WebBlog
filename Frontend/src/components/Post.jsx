import React from "react";
const baseURL = import.meta.env.VITE_PIC_URL;
const Post = ({ title, author, summary, cover, createdAt, _id }) => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="md:1/2 flex items-center justify-center">
          <a href={`/post/${_id}`} className="w-full h-64">
            <img
              src={`${cover}`}
              alt="title"
              className="w-full h-64 object-cover"
            />
          </a>
        </figure>
        <div className="p-6 md:1/2 flex flex-col card-body">
          <h2 className="card-title">{title}</h2>
          <h4>
            {author.username} - {createdAt}
          </h4>
          <h4>{summary}</h4>
        </div>
      </div>
    </>
  );
};

export default Post;
