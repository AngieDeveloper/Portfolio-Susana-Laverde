import { useEffect, useRef, useState } from "react";
import { data } from "./data.js";
import "./App.css";

export const App = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 1);
      }
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <main className="main">
        <section className="header">
          <div className="header">
            <h1 className="title">Susana Laverde Ospina</h1>
            <p className="subtitle">Portafolio de diseño</p>
          </div>
        </section>

        <section className="card card--info">
          <article className="about">
            <h2 className="title"></h2>
            <div className="img-about-container">
              <img className="img-about"src="src/assets/about.png" alt="About" />
            </div>
          </article>
          <article className="photo">
            <h2 className="title"></h2>
            <div className="img-about-container">
              <img className="img-photo" src="src/assets/photo.png" alt="About" />
            </div>
          </article>
          <article className="skills">
            <h2 className="title"></h2>
            <div className="img-about-container">
              <img className="img-skills" src="src/assets/skills.png" alt="About" />
            </div>
          </article>
        </section>

        <section className="card card--proyectos">
          <article className="proyectos">
              <div className="slider-container">
                <div
                  className="leftArrow"
                  onClick={() => scrollToImage("prev")}
                >
                  &#10092;
                </div>
                <div
                  className="rightArrow"
                  onClick={() => scrollToImage("next")}
                >
                  &#10093;
                </div>
                <div className="container-images">
                  <ul ref={listRef}>
                    {data.map((item) => {
                      return (
                        <li key={item.id}>
                          <img src={item.imgUrl} width={422} height={360} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
              
            </div>
          </article>
        </section>

        <article className="card card--dots">
        <div className="dots-container">
                  {data.map((_, idx) => (
                    <div
                      key={idx}
                      className={`dot-container-item ${
                        idx === currentIndex ? "active" : ""
                      }`}
                      onClick={() => goToSlide(idx)}
                    >
                      &#9865;
                    </div>
                  ))}
                </div>
        </article>

        <section className="footer">
          <footer>
            <p>Contacto</p>
          </footer>



        </section>
      </main>
    </>
  );
};

export default App;
