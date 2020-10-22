import React, { useEffect } from "react";
import BB from "../../images/BB.png";
import Example from "../../images/Example.png";
import { Link } from "react-router-dom";
import useScrollPosition from "@react-hook/window-scroll";

function Home() {
  
  const watch = () =>{
    console.log(window.scrollY);
  }

  useEffect(()=>{
    window.addEventListener('scroll',watch);
  })

  return (
    <div id="home" className="overflow-x-hidden">
      <header id="top">
        <section id="blue-background">
          <div className="header-background ">
            <section id="navigation">
              <div className="flex-1">
                <img src={BB} alt="Babo"></img>
              
              </div>
              <div id="" className="flex-1 flex items-end justify-end w-100 ">
                <ul>
                  <li>
                    <Link to="/dashboard">DASHBOARD</Link>
                  </li>
                  <li>
                    <Link to="/about">ABOUT</Link>
                  </li>
                </ul>
              </div>
            </section>
            <section id="header-desc">
              <div className="flex">
                <div className="">
                  <h1>
                    ORGANIZE AND LIVE THE DAY <br></br>TO THE FULLEST!
                  </h1>
                  <p>Keep track of all the task you have accomplished!</p>
                  <div id="buttons" className="flex flex-row items-center">
                    <Link to="/dashboard"> TRY IT OUT!</Link>
                    <h2>BACKEND IN PROGRESS</h2>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </header>
      <section id="about">
        <div className="about-content">
          <h1>What is Babo?</h1>
          <p>
            A simple to do list app to keep track of all the task you've done
            today!
          </p>
          <section id="example" className="flex">
            <div id="left-pane" className="">
              <img src={Example} alt="example" width="648"></img>
            </div>
            <div id="right-pane" className="pane">
              <h1> CREATE EDIT ADD PROJECTS</h1>
              <p> Create posts and tell us whats its about!</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Home;
