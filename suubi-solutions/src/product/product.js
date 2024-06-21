import React from "react";
import Dashboard from "../productimages/laptop.png";
import Andriod from "../productimages/andriod.png";
// import dashboardImage from "../productimages/";

// // import androidAppImage from './images/android-app.jpg';
// // import videoFile from './videos/video.mp4';
import "./product.css";

const Product = () => {
  return (
    <div className="product-container">
      <h2 className="product-heading">Product</h2>
      <div className="product-section-known">
        <h3 className="product-card-heading">Dashboard</h3>
        <div className="product-section">
          <img src={Dashboard} alt="Dashboard" className="product-card-image" />
          <p className="product-card-description">
            We have Sacco tools which will enable<br/> your Sacco to
            <b> APPROVE<br/>, TRACK </b>and <b>View Sacco ANALYTICS</b>.
          </p>
        </div>
      </div>
      <div>
        {/* <h3 className="product-card-heading">Andriod App</h3> */}

        <div className="andriod">
          <p className="product-card-description">
            We have member tools which will enable your<br/> Sacco members to
            <b> SAVE, BORROW </b>and <br/><b>REPAY</b> through their mobile phones.
          </p>
        </div>
        <div className="phoneimage">

          <h3 className="product-card-heading" id="product-card-heading12">Andriod_App</h3>
          <img src={Andriod} alt="andriod" className="product-card-image2" />
        </div>
      </div>
    </div>
  );
};

export default Product;

// const Product = () => {
//   return (
//     <div className="product-container">
//       <h2 className="product-heading">Products</h2>
//       <div className="vid">
//         {/* <video controls className="video">
//           <source
//             src="https://res.cloudinary.com/easyplant/video/upload/v1687423027/homepage2/desktop-homepage-video.mp4"
//             type="video/mp4"
//           />
//         </video> */}
//       </div>

//       <div className="product-section">
//         <div className="product-card">
//           <h3 className="product-card-heading">Dashboard</h3>
//           <div className="product-card-content">
//             <img
//               src={dashboardImage}
//               alt="Dashboard"
//               className="product-card-image"
//             />
//             <p className="product-card-description">
//               We have Sacco tools which will enable your Sacco to{" "}
//               <b>APPROVE, TRACK </b>and <b>View Sacco ANALYTICS</b>.
//             </p>
//           </div>
//           <div className="feature_product">
//           <h2>Features</h2>
//           <div className="list-container">
//             <ul>
//               <li>Register</li>
//               <li>Milk Sales</li>
//               <li>Report</li>
//               <li>Communications</li>
//               <li>Loan Management</li>
//               <li>Dividends & Shares</li>
//               <li>User Management System</li>
//               <li>Integration with Core Payment Systems</li>
//             </ul>
//             </div>
//           </div>
//         </div>
//         <div>
//         {/* <div className="andriod-design"> */}
//           <div className="product-card">
//           <h3 className="product-card-heading">Android App</h3>
//             <div className="andriod">
//               <p className="product-card-description">
//                 We have member tools which will enable your Sacco members to
//                 <b> SAVE, BORROW </b>and <b>REPAY</b> through their mobile
//                 phones.
//               </p>
//             </div>

//             <div className="product-card-description-container">

//               <div className="product-card-content">
//                 <img
//                   src={dashboardImage}
//                   alt="Dashboard"
//                   className="product-card-image"
//                 />
//               </div>
//             </div>

//           </div>
//           <div className="feature_product">
//           <h2 className="features">Features</h2>
//           <div className="list-container">
//             <ul>
//               <li>Loans</li>
//               <li>Savings</li>
//               <li>Statements</li>
//               <li>Setting Up profile</li>
//             </ul>
//           </div>
//           </div>
//           </div>
//           {/* <button className="product-card-button"></button> */}
//         {/* </div> */}
//       </div>
//       {/* </div> */}
//     </div>
//   );
// };

// export default Product;
