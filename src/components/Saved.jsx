import React from 'react'
import Loader from './Loader'
import { useLocation } from 'react-router-dom'

const Saved = ({saved,loader}) => {
  
  
  return (
    <>
    
    <div className="container-fluid text-center my-5" id='top'>


{loader |saved.length === 0 ? (<Loader />) : (
    <>
        <div className="flex">
            {saved.map((img) => {
                return (
                    <div className="items" key={img.id}>
                        <img src={img.src.medium} alt={img.photographer} />
                    </div>
                )
            })}
        </div>
    </>
)}

{saved.length != 0 && (<a href="#top" className="btn btn-warning my-5">Back To Top</a>)}


</div>
    
    </>
  )
}

export default Saved