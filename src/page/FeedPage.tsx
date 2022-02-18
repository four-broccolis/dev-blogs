import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import PostCarousel from "../component/feedPage/PostCarousel";
import PostItem from "../component/feedPage/PostItem";
import BfValues from "../constant/values";
import { Post } from "../model/post";

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [testResult, setTestResult] = useState<string>();

  const getConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  const getPosts = async () => {
    const response = await axios.get(BfValues.serverHost + "/", getConfig);
    // const data = response.data;
    setPosts(response.data);
    console.log(response);
  };

  const httpTest = async () => {
    console.log("starting http request");
    const response = await axios.get("https://randomuser.me/api/", getConfig);
    const name: string = response.data.results[0]["name"].first ?? "cannot get data.";
    setTestResult(name);
    console.log("done requesting");
  };

  useEffect(() => {
    httpTest();
    // getPosts();
  }, []);

  return (
    <CarouselWrapper>
      <div>{testResult}</div>
      <PostCarousel
        children={posts.map((post: Post) => (
          <PostItem key={post.link} post={post} />
        ))}
      />
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  display: flex;
  height: 90%;
  margin: 0 4vw;
  align-items: center;
`;
