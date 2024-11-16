import {useEffect, useState} from 'react';
import axios from 'axios';

const URL = "https://jsonplaceholder.typicode.com/posts";
const  Https = () => {
  //?useState
  const [posts,setPosts] = useState([]);
  //? useEffect
    useEffect(()=> {
    // logic building http req
    axios
    .get(URL)
    .then((post) =>{
      console.log(post);
      //update state
      setPosts(post.data);
    })
    .catch((err)=>{});
    }, []);
    console.log(posts);
  return (
    <div><h1>HTTP Api</h1>
    <div>
      {posts.map((post) =>{
        return(
          <div>
            <h2>{post.title}</h2>
            <h3>{post.id}</h3>
          </div>

        );
      })}
    </div>
    </div>
  )
}

export default Https;