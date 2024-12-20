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
  return (
    <div>is Athor{(postDetail?.author?._id === user?.id) && (<p>true</p>)}</div>
  )
  
}

export default PostDetail
