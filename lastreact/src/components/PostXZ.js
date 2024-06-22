import React, { useState, useEffect } from "react";
import {Button} from "react-bootstrap";
import Cartochka from "./Cartochka";

const Post = ({ id }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postUrl = "http://localhost:3000/unitazs/" + id;
        const response = await fetch(postUrl);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Загрузка...</div>;
  }

  return (
      <Cartochka product={post}/>
  );
};

export default Post;