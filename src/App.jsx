import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { FaHeart, FaDownload } from "react-icons/fa6";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { initializeApp } from "firebase/app";

function App() {
  const [images, setImages] = useState([]);
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDTXH3OW1EUbee8yXt04YkC7zvTWfCt1Ts",
      authDomain: "myblog-aee44.firebaseapp.com",
      databaseURL: "https://myblog-aee44-default-rtdb.firebaseio.com",
      projectId: "myblog-aee44",
      storageBucket: "myblog-aee44.appspot.com",
      messagingSenderId: "851291435958",
      appId: "1:851291435958:web:b7767c42b275579bf74717",
      measurementId: "G-D7D8PWJ936",
    };
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const imagesRef = ref(storage, "images");

    listAll(imagesRef)
      .then((dir) => {
        const imagePromises = dir.items.map((itemRef) =>
          getDownloadURL(itemRef)
        );
        return Promise.all(imagePromises);
      })
      .then((urls) => setImages(urls));

    return () => {
      // Unsubscribe from listeners (if needed for your specific setup)
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="firstscreen">
          <div className="gradient"></div>
          <div className="navbar">
            <Navbar />
          </div>
          <h2>pixelGROVE</h2>
          <p>Explore stunning wallpapers</p>
          <p>Just Made For Your devices.</p>
          <div className="img">
            <img
              src="./src/assets/images/Wallpaper3.png"
              alt="sample wallpaper for home"
              title="sample wallpaper for home"
              loading="eager"
              className="imagemain imagemain2"
            />
            <img
              src="./src/assets/images/Wallpaper1.png"
              alt="sample wallpaper for home"
              title="sample wallpaper for home"
              loading="eager"
              className="imagemain"
            />
            <img
              src="./src/assets/images/Wallpaper2.png"
              alt="sample wallpaper second for home"
              title="sample wallpaper for home"
              loading="eager"
              className="imagemain2"
            />
          </div>
        </div>
        <div className="secondscreen">
          <div className="features">
            <div className="feature">
              <FaHeart size={40} color="blue" />
              <h3>Cool Color Variations</h3>
              <img
                src="./src/assets/images/colors.webp"
                alt="colors"
                title="cool colors"
                loading="lazy"
                className="secimg1"
              />
            </div>
            <div className="feature">
              <FaHeart size={40} color="red" />
              <h3>Works on Anything</h3>
              <img
                src="./src/assets/images/Wallpaper4.png"
                alt="all devices support"
                title="any device compatible"
                loading="lazy"
                className="mainimage3 "
              />
            </div>
            <div className="feature">
              <FaHeart size={40} color="green" />
              <h3 className="fulltext">Superb Depth Sensation and feel</h3>
            </div>
            {/* Add more features as needed */}
          </div>
        </div>
        <div className="thirdscreen">
          <h2>Which one will you choose?</h2>
          <div className="carousel">
            {images.map((image, index) => (
              <div key={index} className="image-wrapper">
                <img
                  className="carousel-item"
                  src={image}
                  alt={`image_${index}`}
                />
                <a
                  className="download-button"
                  href={image}
                  download={`image_${index}`}
                  target="_blank"
                >
                  <FaDownload size={24} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
