import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import spinner from '../components/spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
//what are these that we r using here


const Home = () => {
  const [books,setBooks] = useState([]);
  const [loading,setLoading] =useState(false);
  

  return (
    <div>Home</div>
  )
}

export default Home