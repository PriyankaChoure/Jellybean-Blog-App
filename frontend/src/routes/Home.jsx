import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";
import { fetchAllBlogs } from "../apis/api";
import { Card } from "../components/BlogCard/Card";

export const Home = () => {
  const [blogList, setBlogList] = useState([]);
  const getAllBlogs = () => {
    fetchAllBlogs().then((responseData) => {
      setBlogList(responseData.data);
      console.log("home - ", blogList);
    });
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <div className={styles.wrapper}>
      <h3>Welcome to Jellybean Blog App</h3>
      {blogList.length > 0 && blogList.map((blog) => <Card card={blog} />)}
    </div>
  );
};
