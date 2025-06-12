import React from 'react'

function SearchLoader() {
  return (
    <>  <style>
       {`

.loader--spinner {
    display: inline-block;
    position: relative;
    color: official;
    height: 60px;
    width: 60px;
}

.loader--spinner div {
    animation: loader--spinner 1.2s linear infinite;
    transform-origin: 30px 30px;
}

.loader--spinner div:after {
    display: block;
    position: absolute;
    top: 3px;
    left: 27px;
    border-radius: 20%;
    content: " ";
    height: 10px;
    width: 5px;
}

.loader--spinner div:nth-child(1) {
    animation-delay: -1.1s;
    transform: rotate(0deg);
}

.loader--spinner div:nth-child(2) {
    animation-delay: -1s;
    transform: rotate(30deg);
}

.loader--spinner div:nth-child(3) {
    animation-delay: -0.9s;
    transform: rotate(60deg);
}

.loader--spinner div:nth-child(4) {
    animation-delay: -0.8s;
    transform: rotate(90deg);
}

.loader--spinner div:nth-child(5) {
    animation-delay: -0.7s;
    transform: rotate(120deg);
}

.loader--spinner div:nth-child(6) {
    animation-delay: -0.6s;
    transform: rotate(150deg);
}

.loader--spinner div:nth-child(7) {
    animation-delay: -0.5s;
    transform: rotate(180deg);
}

.loader--spinner div:nth-child(8) {
    animation-delay: -0.4s;
    transform: rotate(210deg);
}

.loader--spinner div:nth-child(9) {
    animation-delay: -0.3s;
    transform: rotate(240deg);
}

.loader--spinner div:nth-child(10) {
    animation-delay: -0.2s;
    transform: rotate(270deg);
}

.loader--spinner div:nth-child(11) {
    animation-delay: -0.1s;
    transform: rotate(300deg);
}

.loader--spinner div:nth-child(12) {
    animation-delay: 0s;
    transform: rotate(330deg);
}

@keyframes loader--spinner {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

 
    

.section--white .loader--spinner div:after {
    background: #00539f;
}

 
 

.section--blue .loader--spinner div:after{
    background: #fff;
}
 

.section--black .loader--spinner div:after {
    background: #e7002d;
}  
.section--orange .loader--spinner div:after{ 
    background: #ffb011;
}
 
.section--yellow .loader--spinner div:after {
    background: #d7ff11;
}
 

.section--purple .loader--spinner div:after  {
    background: #008c00;
}
 

.section--green .loader--spinner div:after {
    background: #8c008c;
} 
`}
    </style>
    
    
    <section className="section--white p-3">
  <div className="row text-center">
    <div className="col-12 c0l-lg-12">
      {/* <header className="loader--title">Spinner</header> */}
      <div className="loader--spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
     </div>
</section>


    </>
  )
}

export default SearchLoader