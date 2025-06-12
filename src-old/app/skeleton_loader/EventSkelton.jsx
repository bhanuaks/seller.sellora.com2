import React from 'react';
// import './BlackFridaySkeleton.css'; // If you want to keep styles separately

const EventSkelton = () => {
  return (
    <React.Fragment>
        <style>
            {
                `
                .card {
                    border: 1px solid #ff6e35;
                        min-height: 230px;
                        box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
                        border: 1px solid #f2eeee;
                        padding: 20px;
                        border-radius: 4px;
                        margin: 0px 10px 20px 10px;
//   width: 400px;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 0 2px 10px rgba(0,0,0,0.1);
//   padding: 20px;
//   margin: 20px auto;
//   font-family: Arial, sans-serif;
}

.skeleton {
  background-color: #eee;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}

.skeleton::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.image-skeleton {
  width: 100px;
  height: 100px;
  float: left;
  margin-right: 15px;
}

.title-skeleton {
  height: 18px;
  width: 60%;
  margin-bottom: 8px;
}

.text-skeleton {
  height: 14px;
  width: 40%;
  margin-bottom: 16px;
}

.benefits {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.benefit-skeleton {
  height: 12px;
  width: 80px;
}

.button-skeleton {
  height: 36px;
  width: 100px;
  margin: 0 auto;
}
                `
            }
        </style>
    <div className="col-lg-4" >
    <div className="card" >
        <div >
            <div className="skeleton image-skeleton"></div>
            <div style={{ overflow: 'hidden' }}>
                <div className="skeleton title-skeleton"></div>
                <div className="skeleton text-skeleton"></div>
            </div>
        </div>
      

      <div className="benefits">
        <div className="skeleton benefit-skeleton"></div>
        <div className="skeleton benefit-skeleton"></div>
        <div className="skeleton benefit-skeleton"></div>
      </div>

      <div className="skeleton button-skeleton"></div>
    </div>
    </div>
    </React.Fragment>
  );
};

export default EventSkelton;
