import React, { useContext, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { auth, db } from "../../Services/firebase";
import "./Signin.css";
import classes from "./Signin.module.css";
import $ from "jquery";
import AuthContext from "../../Context/auth-context";
import ForgotPassModal from "../../UI/ForgotPassword/ForgotPassModal";
import { Link } from "react-router-dom";
import Spinner from "../../Reusable/Spinner"

const Signin = (props) => {
  const [loader, setLoader] = useState(false);
  // useEffect(() => {
  //   console.log("asda", props.history);
  // }, []);
  $(document).ready(function () {
    const sliderContainer = document.querySelector(".slider-container");
    const slideRight = document.querySelector(".right-slide");
    const slideLeft = document.querySelector(".left-slide");
    // const slidesLength = $(".right-slide").children();
    // const upButton = document.querySelector(".up-button");
    // const downButton = document.querySelector(".down-button");
    // const slidesLength = slideRight.querySelectorAll(".container-fluid").length;

    let activeSlideIndex = 0;

    // slideLeft.style.top = `-${(2 - 1) * 100}vh`;

    $(".left-slide").css("top", "-100vh");

    $(".up-button").click(function () {
      changeSlide("up");
    });

    $(".down-button").click(function () {
      changeSlide("down");
    });

    // upButton.addEventListener("click", () => changeSlide("up"));
    // downButton.addEventListener("click", () => changeSlide("down"));

    const changeSlide = (direction) => {
      const sliderHeight = sliderContainer.clientHeight;
      if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex > 2 - 1) {
          activeSlideIndex = 0;
        }
      } else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
          activeSlideIndex = 2 - 1;
        }
      }

      slideRight.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight
      }px)`;
      slideLeft.style.transform = `translateY(${
        activeSlideIndex * sliderHeight
      }px)`;
    };
  });

  const [error, setError] = useState(null);
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });
  const [forgotModal, setForgotModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const authCtx = useContext(AuthContext);
  // let userId = null;

  const changeHandler = (event) => {
    let val = event.target.value;
    setUserCred((prevState) => {
      return {
        ...prevState,
        [event.target.name]: val,
      };
    });
  };

  const submitHandler = (event) => {
    setLoader(true);
    event.preventDefault();
    // firebase signin auth
    auth
      .signInWithEmailAndPassword(
        userCred.email.trim(),
        userCred.password.trim()
      )
      .then((userCredential) => {
        // Signed in
        let userId = userCredential.user.uid;
        setUserId(userId);
        let photoUrl = "";
        console.log("userId", userId);

        // get the particular user, using the
        db.collection("students")
          .doc(userId)
          .get()
          .then((doc) => {
            let user = doc.data();
            console.log("signin", user);
            photoUrl = user.photoUrl;
            if (user.isLoggedIn) {
              // if already one person is logged in
              setError(
                "Already logged in, logout from other device to login again..."
              );
            } else {
              let data = {
                isLoggedIn: true,
              };
              // if password is reset, then that password should be update in firestore
              if (user.password !== userCred.password.trim()) {
                data = {
                  isLoggedIn: true,
                  password: userCred.password.trim(),
                };
              }
              db.collection("students")
                .doc(userId)
                .update(data)
                .then(() => {
                  // may use it later for refresh or some edge cases
                  localStorage.setItem("userId", userId);
                  // to identify, whether reloading or closing the tab
                  sessionStorage.setItem("userId", userId);
                  authCtx.setIsLoggedIn(true);
                  // props.history.replace(`/home?userId=${userId}`);
                  props.history.replace("/dashboard/home"); // redirect it to home
                  // setTimeout(() => {
                  //   setLoader(false);
                  // }, 2000);
                  setLoader(false);
                  let ongoingCourses = [];
                  let bookmarks = [];
                  let preferences = [];
                  let orders = [];
                  let completedCourses = [];

                  db.collection("students")
                    .doc(userId)
                    .collection("userCourseDetails")
                    .doc("courseDetails")
                    .get()
                    .then((doc) => {
                      let courseDetails = doc.data();
                      ongoingCourses = courseDetails.ongoingCourses;
                      bookmarks = courseDetails.bookmarks;
                      preferences = courseDetails.preferences;
                      orders = courseDetails.orders;
                      completedCourses = courseDetails.completedCourses;
                    })
                    .then(() => {
                      authCtx.setUser({
                        ...user,
                        isLoggedIn: true,
                        password: userCred.password,
                        photoUrl: photoUrl,
                        ongoingCourses: ongoingCourses,
                        preferences: preferences,
                        bookmarks: bookmarks,
                        orders: orders,
                        completedCourses: completedCourses,
                      });
                      authCtx.setHistory(props.history);
                    })
                    .catch((e) => console.log("set ongoingCourses", e));
                })
                .catch((e) => console.log("signin-submitHandler", e));
            }
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => {
        console.log(e.code);
        if (e.code === "auth/wrong-password") {
          setError("Incorrect password. Try again.");
        } else if (e.code === "auth/network-request-failed") {
          setError("Internet connection is down!!!");
        } else {
          setError("User doesn't exist. Please do register.");
        }
      });
     
  };

  const sendResetMail = (email) => {
    setLoader(true);

    // to sent continuURL, check below link. Now i think, its not needed
    // https://stackoverflow.com/questions/55296314/firebase-redirect-to-webpage-after-successful-password-change
    // console.log(email);
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("successfuly send password rest mail");
        setForgotModal(false);
      })
      .catch((e) => {
        console.log(e);
        if (e.code === "auth/user-not-found") {
          alert("Provide Correct Email Address");
        }
      });
      setLoader(false);

  };

  const forceLogout = () => {
    if (
      window.confirm(
        "Are u sure want to logout from other device?. If 'yes', press OK. Else press cancel."
      )
    ) {
      console.log("forceLogout", userId);
      db.collection("students")
        .doc(userId)
        .update({
          isLoggedIn: false,
        })
        .then(() => {
          console.log("successfully update");
          setError(false);
          alert("Logged out from other devices, Please login now!!!");
        });
    } else {
      console.log("you pressed cancel!!!");
    }
  };

  return (
    <>
    {loader && <Spinner/>}
      <div className="slider-container">
        <Link className={classes.homebtt} to="/dashboard/home">
          <i class="fas fa-home"></i>
          {/* Home */}
        </Link>
        {forgotModal && (
          <ForgotPassModal
            sendResetMail={sendResetMail}
            closeModal={() => setForgotModal(false)}
          />
        )}
        <div className="left-slide">
          <div class="left-bg" className={classes.leftbg1}>
            <h1 style={{ left: "16%" }}>Institution Login</h1>
            <p style={{ marginLeft: "30px" }}>
              Not a INSTITUTION ? Click Here
              <span>
                <img src="/images/arrow.png" alt="arrow.png" />
              </span>
            </p>
            <p></p>
          </div>
          <div class="left-bg" className={classes.leftbg2}>
            <h1>Student Login</h1>
            <p
              style={{ marginLeft: "30px" }}
              onClick={() => {
                location.href = "https://www.meritbodhi.com/admin/";
              }}
            >
              Admin Login
            </p>
            <p></p>
          </div>
        </div>
        <div className="right-slide">
          <div className="container-fluid">
            <div className="container">
              <form onSubmit={submitHandler}>
                <div className="title">Student Login</div>
                {error && (
                  <>
                    <Alert
                      variant="danger"
                      dismissible
                      onClose={() => setError(false)}
                    >
                      {error}
                    </Alert>
                    {/* force logout from all other devices */}
                    {error ===
                      "Already logged in, logout from other device to login again..." && (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={forceLogout}
                      >
                        Force Logout From All Other devices
                      </button>
                    )}
                  </>
                )}
                <div className="input-box underline">
                  <input
                    type="email"
                    placeholder="Enter Your Email..."
                    id="email"
                    name="email"
                    required
                    onChange={changeHandler}
                    value={userCred.email}
                  />
                  <div className="underline"></div>
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    placeholder="Enter Your Password..."
                    id="password"
                    name="password"
                    required
                    onChange={changeHandler}
                    value={userCred.password}
                  />
                  <div className="underline"></div>
                </div>
                <div className="input-box button">
                  <input type="submit" name="" value="Login" />
                </div>
              </form>
              <p className="or">
                <span>or</span>
              </p>
              <p className="subtitle">
                <button type="button" onClick={() => setForgotModal(true)}>
                  Forget Password
                </button>
              </p>
              <p className="subtitle">
                Don't have an account?
                <Link to="/StudentsSignup">sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Signin);
