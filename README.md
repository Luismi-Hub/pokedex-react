# pokedex-react




//// BACKGROUND //////

  background-image: url("https://backgroundcheckall.com/wp-content/uploads/2017/12/blue-soft-background-10.jpg");

//// BACKGROUND CONTAINER//////


background: linear-gradient(-45deg, #deadff, #4d3ce7, #23a6d5, #23d5ab);
animation: gradient 10s ease infinite;
background-size: 400% 400%;

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


/// LOGO ///

"https://images.wikidexcdn.net/mwuploads/esssbwiki/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png"


///// CONTAINER ANIMATION /////

  animation-name: expand;
  animation-duration: 3s;
  animation-delay: -2s;


@keyframes expand {
  0% {
    left: 10px;
  }
  25% {
    right: 10px;
    width: 10px;
    height: 10px;
  }
  50% {
    width: 180px;
    height: 140px;
  }
  75% {
    width: 150px;
    height: 120px;
  }
  90% {
    width: 430px;
    height: 320px;
  }
  100% {
    width: 400px;
    height: 300px;
  }
}


///// CONTAINER PHOTO ///////



  animation-name: photo;
  animation-duration: 3.5s;
  animation-delay: -2s;

@keyframes photo {
  0% {
    height: 20px;
  }
  25% {
    height: 20px;
  }
  50% {
    height: 80px;
  }
  75% {
    height: 130px;
  }
  100% {
    height: 120px;
  }
}


/////POKEBALL ANIMATION/////


animation: shake 3s;
 animation-iteration-count: infinite;


@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  /* 20% { transform: translate(-3px, 0px) rotate(1deg); }  */
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  /* 50% { transform: translate(-1px, 2px) rotate(-1deg); } */
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  /* 80% { transform: translate(-1px, -1px) rotate(1deg); } */
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

