import {useEffect} from 'react';
import axios from 'axios';

const URL = "https://jsonplaceholder.typicode.com/posts";
const  Https = () => {
    useEffect(()=> {
    // logic building http req
    axios
    .get(URL)
    .then((post) =>{
      console.log(post);
    })
    .catch((err)=>{})
    console.log('http from api')
    },[])
  return (
    <div>HTTP Api</div>
  )
}

export default Https;