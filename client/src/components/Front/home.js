import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TopNav from "../utils/pagenav";
import Rooms from "./Rooms/index";
import Attention from "./attention";
import WhatWeDo from "./whatwedo";
import Testimones from "./testimonies";
import Footer from "./footer.js";
import MobileTopNav from "../utils/mobilenav";
import MenuNav from "./menunav";
import { showCoursesm } from "../utils/reuseable";
import PageBase from "../PageBase.js";
import { DesktopSearch, MobileSearch } from "../Search/index.js";

const Home = () => {
  const [showmennu, setmenu] = useState(false);
  const showmenu=true
  useEffect(()=>{
    window.addEventListener("scroll",showCoursesm())
   
  });
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const Checkuser = useSelector((item) => item.authuser);

  const navigate = useNavigate();
  return (
    <div className="mainLayoutb">
      <div className="desktop">
        <div
          className="front_home"
          style={{
            backgroundImage:
              `url("/assets/images/background.jpeg")`,
            minHeight: `${window.innerHeight - 200}px`,
          }}
        >
          <div
            className="imagecover"
            style={{ minHeight: `${window.innerHeight - 200}px` }}
          >
            {" "}
            <TopNav />
           
              <DesktopSearch />
          
          </div>
        </div>
      </div>

      {showmennu ? (
        <div className="mobile">
          <MenuNav setmenu={setmenu} />
        </div>
      ) : null}

      <div className="mobile">
        <div
          className="front_home"
          style={{
            backgroundImage:
              `url("/assets/images/background.jpeg")`,
            minHeight: `${window.innerHeight}px`,
          }}
        >
          <div
            className="imagecover"
            style={{ minHeight: `${window.innerHeight}px` }}
          >
            {" "}
            <MobileTopNav setmenu={setmenu} showmenu={showmenu}/>
            <div className="mobileboxs">
              <MobileSearch />
            </div>
          </div>
        </div>
      </div>

<PageBase>
<Rooms />

<WhatWeDo />
</PageBase>
{/* <Attention /> */}
   
      <Testimones />

<Footer /> 
    </div>
  );
};

export default Home;
