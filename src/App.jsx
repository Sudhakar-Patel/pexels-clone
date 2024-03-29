import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Saved from './components/Saved'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'


const App = () => {
  const API_KEY = "JYgjL5ONfEea0SjqbMjaQaZ7oP6qFJxIpJ8OeoAO54QpXb72XwTl9Wcj";
  const URL = "https://api.pexels.com/v1/search?query=nature&per_page=1";

  const [images, setImages] = useState([])
  const [search, setSearch] = useState('nature')
  const [loader, setLoader] = useState(true)
  const [saved, setSaved] = useState([])

  console.log(`${search}`)

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      // console.log("response from API= ",res.data.photos)
      setImages(res.data.photos)
      setLoader(false)
      console.log(images)

    };

    const data=JSON.parse(localStorage.getItem("Images"))
    if(data){
      setSaved(data)
    }

    fetchImage();

  }, [search])
  // console.log("image is saved", saved)

  useEffect(() => {
  if(saved.length !=0){
    const json=JSON.stringify(saved)
    localStorage.setItem("Images",json)
  }
  }, [saved])
  


  return (
    <>

      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Home images={images} loader={loader}
            setSaved={setSaved} saved={saved} />} />
          <Route path='/saved' element={<Saved saved={saved} loader={loader} />} />

        </Routes>
      </Router>

    </>
  )
}

export default App