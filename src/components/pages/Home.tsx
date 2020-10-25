import React, { useEffect, useState } from "react";
import BB from "../../images/BB.png";
import Example from "../../images/Example.png";
import CreateProject from "../../images/createproject.png";
import { Link } from "react-router-dom";

function Home() {
  const [fixedNav, isFixed] = useState<boolean>(false);
  const [menu, isMenuSelected] = useState<boolean>(false);

  const selected = () => {
    isMenuSelected(!menu);
  };

  const watch = () => {
    if (window.scrollY >= 130) {
      isFixed(true);
    } else {
      isFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", watch);
  });

  return (
    <div id="home" className="overflow-x-hidden">
      <header id="top">
        <section id="blue-background">
          <div className="header-background ">
            <section id="navigation">
              {fixedNav ? (
                <></>
              ) : (
                <div className="flex-1">
                  <img src={BB} alt="Babo"></img>
                </div>
              )}

                <div onClick={selected} className="sm:hidden ham">
                  <div className={menu ? "line line-1" : "line "}></div>
                  <div className={menu ? "line line-2" : "line "}></div>
                  <div className={menu ? "line line-3" : "line"}></div>
                </div>
 

              <div
                id=""
                className={
                  fixedNav
                    ? "stickyNav"
                    : "flex-1 flex items-end justify-end w-100"
                }
              >
                <ul>
                  <li>
                    <a href="#top">HOME</a>
                  </li>
                  <li>
                    <a href="#about">ABOUT</a>
                  </li>
                  <li>
                    <a href="#contact">CONTACT</a>
                  </li>
                  <li>
                    <Link to="/dashboard">TRY IT OUT!</Link>
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
                    <Link to="/createproject"> TRY IT OUT!</Link>
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
              <h1> CREATE AND ADD NEW TASKS</h1>
              <p> Create posts and tell us whats its about!</p>
            </div>
          </section>
          <section id="example" className="flex">
            <div id="left-pane" className="pane">
              <h1> CUSTOMIZE YOUR EXPERIENCE</h1>
              <p> Dont like the default look? Try out the other options!</p>
            </div>
            <div id="right-pane" className="pane">
              <img src={Example} alt="example" width="648"></img>
            </div>
          </section>
          <section id="example" className="flex">
            <div id="left-pane" className="">
              <img src={CreateProject} alt="example" width="648"></img>
            </div>
            <div id="right-pane" className="pane">
              <h1> CREATE EDIT ADD PROJECTS</h1>
              <p> Got multiple tasks? Organize it by creating a project!</p>
            </div>
          </section>
        </div>
      </section>
      <section id="products">
        <div className="products-content">
          <h1>Come take a look at the other things I have made!</h1>
          <p>You can contact me at @ James.theo.lopez@gmail.com</p>
        </div>
      </section>
      <section id="contact">
        <div className="contact-content">
          <h1>Come take a look at the other things I have made!</h1>
          <p>You can contact me at @ James.theo.lopez@gmail.com</p>
          <div className="contact-link flex justify-center items-center">
            <a
              className="p-4 flex justify-center items-center"
              href="www.github.com/jamestlopez"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
              <span className="p-2">GIT HUB</span>
            </a>
            <a
              className="p-4 flex justify-center items-center"
              href="www.github.com/jamestlopez"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M11.73 2.225l-.01.016H5.617l-5.618 9.738 5.618 9.736h12.799l.04.06 2.134-3.735.518-.893H21.1l.008-.014-.626-.75h.895l.006-.01.008.01 2.607-4.389-2.607-4.39-.003.005-.011-.019h-.945l.631-.764-2.607-4.569-.006.01-.024-.04H11.73zM9.106 6.824h6.189l-.529.764h-.024l2.398 4.015h.875l-.277.328.357.435h-.956l-2.398 4.015h.027l.523.764H9.073l-2.99-5.168 3.022-5.155z"></path>
              </svg>{" "}
              <span className="p-2">MY WEBSITE</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
