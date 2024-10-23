import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Label } from "../Label";

const WhatWeDo = () => {
  const navigate = useNavigate();
  return (
    // <div className="roomType ">

    //   <Label className='header-style' sx={styles.title}>  Special offers and Facilities .</Label>
    //   <Typography sx={styles.subtitle}>Embrace the Perfect Blend of Modern Comfort and Natural Serenity in Our Exquisite Spaces.</Typography>
    //   <div className="align-grid">
    //     <div className="Roomcard layoutspacv" >
    //       <img
    //         src={
    //           "https://res.cloudinary.com/dewkx66gl/image/upload/v1696000598/conference_eumktz.jpg"
    //         }
    //         alt=""
    //         className="card-room-img"
    //       />

    //       <div className="room-description">
    //         <h3>Conference Rooms </h3>
    //         <p>
    //           For those seeking event and meeting facilities, our versatile
    //           spaces are perfect for hosting everything from intimate gatherings
    //           to corporate conferences. Our conference rooms are equipped with
    //           the latest technology and can be configured to meet your specific
    //           needs. Our professional event planning team is on hand to assist
    //           you in creating a seamless and memorable occasion.
    //         </p>
    //         <span
    //           className="book-now"
    //           onClick={() => navigate("/client/conference/booking")}
    //         >
    //           Book now
    //         </span>
    //       </div>
    //     </div>

    //     <div className="Roomcard layoutspacv" >
    //       <img
    //         src={
    //           "https://res.cloudinary.com/dewkx66gl/image/upload/v1696935089/theater_w7ndvn.jpg"
    //         }
    //         alt=""
    //         className="card-room-img"
    //       />

    //       <div className="room-description">
    //         <h3>High-End Movie Theater </h3>
    //         <span>Accessible to our clients</span>
    //         <p>
    //           Indulge in the latest blockbusters and timeless classics in our
    //           cutting-edge, private movie theater. Immerse yourself in
    //           crystal-clear visuals and immersive sound, all while reclining in
    //           the comfiest seats in town.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="Roomcard layoutspacv" >
    //       <img
    //         src={
    //           "https://res.cloudinary.com/dewkx66gl/image/upload/v1696935577/dinning_kdplek.jpg"
    //         }
    //         alt=""
    //         className="card-room-img"
    //       />

    //       <div className="room-description">
    //         <h3>Gourmet Dining</h3>
    //         <span>Accessible to our clients</span>
    //         <p>
    //           Savor a world of culinary delights at our renowned restaurants.
    //           From sumptuous breakfast buffets to exquisite dinners, our
    //           talented chefs ensure that every meal is a feast for the senses.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="Roomcard layoutspacv" onClick={() => {}} >
    //       <img
    //         src={
    //           "https://res.cloudinary.com/dewkx66gl/image/upload/v1696935325/rooftop_nl4ccv.jpg"
    //         }
    //         alt=""
    //         className="card-room-img"
    //       />

    //       <div className="room-description">
    //         <h3>Rooftop Bar</h3>
    //         <p>
    //           Sip on signature cocktails while enjoying panoramic views of the
    //           city from our rooftop bar with comes with our Excecutive suite rooms. It's the perfect spot to unwind after a
    //           thrilling movie night.
    //         </p>
            
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Box sx={styles.container}>
      <Label className='header-style' sx={styles.title}>  Special offers and Facilities .</Label>
      <Typography sx={styles.subtitle}>Embrace the Perfect Blend of Modern Comfort and Natural Serenity in Our Exquisite Spaces.</Typography>
    </Box>
  );  
};

export default WhatWeDo;

const styles={
  container:{
    
  },
  title:(theme)=>({
    fontFamily: 'Manrope',
    fontWeight:'600',
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:40
    },
  }),
  subtitle:{
      fontFamily: 'Manrope',

  }
}