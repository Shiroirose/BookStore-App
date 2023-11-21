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
  const [loading,setLoading] =useState(false);//loading set to defualt value of false
  
  
  //we use useEffect to call our backend
  // useEffect(()=>{},[]) //dependency array
  useEffect(()=>{
    setLoading(true);
    axios.get('http://localhost:5555/books').then((response)=>{
      setBooks(response.data.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    });
  },[])




  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl'/>
        </Link>
      </div>
      {loading?
      (<Spinner/>):
      (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr> 
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Title</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>  {/*max-md means this column is hidden in mobile and tablet sizes */}
              <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th> 
              <th className='border border-slate-600 rounded-md'>Operations</th>

            </tr>
          </thead>
          <tbody>
            {books.map((book,index)=>{
              <tr key={book._id} className='h-8'>
                <td className='border border_slate-700 rounded-md text_center'>{index+1}</td>
                <td className='border border-slate-700 rounded-md text-center'>{book.title}</td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.author}</td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.author}</td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  <div className='flex justify-center gap-x-4'>
                    let bookidentity= ${myVariable};
                    <Link to={'/books/details/bookidentity'}>
                      <BsInfoCircle className='text-2x text-green-800' />
                    </Link>
                    <Link to={'/books/edit/bookidentity'}>
                      <AiOutlineEdit className='text-2xl text-yellow-600'/>
                    </Link>
                    <Link to={'/books/delete/bookidentity'}>
                      <MdOutlineAddBox className='text-2xl text-red-600'/>
                    </Link>
                  </div>
                </td>
                
              </tr>

            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home