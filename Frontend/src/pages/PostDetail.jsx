import {useEffect, useState} from "react";
import PostService from "../services/post.service";
import Swal from "sweetalert2";
import { useParams } from "react-router";
import {useAuthContext} from "../context/AuthContext"

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState(null);
  const {user} = useAuthContext();
  const { id } = useParams(); 

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await PostService.getPostById(id); 
        if (response.status === 200) {
          setPostDetail(response.data); 
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };

    if (id) {
      fetchPost(); 
    }
  }, [id]);
  return  return (
    <div className="container mx-auto max-w-3xl mt-20 px-4">
      <div className="card shadow-lg bg-base-100 p-6 rounded-lg">
        {postDetail && (
          <>
            <h1 className="text-3xl font-bold mb-4">{postDetail.title}</h1>
            <img
              src={`${baseURL}/${postDetail.cover}`}
              alt={postDetail.title}
              className="w-full h-64 object-cover mb-4"
            />
            <p className="text-lg mb-4">{postDetail.summary}</p>
            <p className="text-lg mb-4">{postDetail.content}</p>
          </>
        )}
      </div>
    </div>
  );
  
}

export default PostDetail
