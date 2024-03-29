import React from 'react'
import Loader from './Loader'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = ({ images, loader, setSaved, saved }) => {
    const saveImage = (img1) => {

        let flag = true;

        if (saved != null && saved.length > 0) {
            for (let i = 0; i < saved.length; i++) {
                if (saved[i].id === img1.id) {
                    flag = false;
                    //react toastify
                    console.log("img is already exist..")
                    toast.warning('img is already exist.', {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    break;
                }
            }
        }

        if (flag) {
            setSaved([...saved, img1])
            console.log("img saved..")
            toast.success('img saved...', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        }

    }
    return (
        <>
            <ToastContainer />
            <div className="container-fluid text-center" id='top'>


                {loader ? (<Loader />) : (
                    <>
                        <div className="flex">
                            {images.map((img) => {
                                return (
                                    <div className="items" key={img.id}
                                        onClick={() => saveImage(img)}>
                                        <img src={img.src.medium} alt={img.photographer} />
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )}



                {images.length != 0 && (<a href="#top" className="btn btn-warning my-5">Back To Top</a>)}


            </div>



        </>
    )
}

export default Home