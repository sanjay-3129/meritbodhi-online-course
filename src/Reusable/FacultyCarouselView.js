import React, { useEffect, useState } from "react";
import FacultyCard from "./FacultyCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { getFaculties } from "../Components/Institution/InstitutionDB";
import $ from "jquery";
import './Faculty.css';
// import { db } from "../Services/firebase";
const FacultyCarouselView = (props) => {
  const [faculties, setFaculties] = useState(null);

  useEffect(() => {
    // console.log("cccccccc", props.ctx);
    if (props.ctx !== null) {
      getFaculties(props.ctx, (results) => {
        setFaculties(results);
        console.log(".......>>>", results);
      });
    }
  }, []);

  // $(document).ready(function () {
  //   $(".owl-carousel").owlCarousel();
  // });

  // $("#owl").owlCarousel(function () {
  //   navigator: true;
  // });

  let ui = null;
  if (faculties !== null) {
    ui = faculties.map((faculty) => {
      return (
        <FacultyCard className="item" faculty={faculty} key={faculty.id} />
      );
    });
  }
  // $(document).ready(function(){ 

  //    $('.carousel').carousel({
  //       dist: -50,
  //      shift: 80,
  //       full_width: true
    
  //    });
    
  //   });

  
	
  return (
    <>
      <div className="container-fluid sect2">
        <h3 className="heading">
          <b>Faculties</b>
        </h3>
        
        <div class="pic-ctn">
    <img src="https://picsum.photos/200/300?t=1" alt="" class="pic"/>
    <img src="https://picsum.photos/200/300?t=2" alt="" class="pic"/>
    <img src="https://picsum.photos/200/300?t=3" alt="" class="pic"/>
    <img src="https://picsum.photos/200/300?t=4" alt="" class="pic"/>
    <img src="https://picsum.photos/200/300?t=5" alt="" class="pic"/>
  </div>

      </div>
    </>
  );
};

export default FacultyCarouselView;
