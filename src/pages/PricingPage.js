// // src/pages/PricingPage.js

// import React from "react";
// import "./PricingPage.css";

// const PricingPage = () => {
//   return (
//     <div className="pricing-page">
//       <h2>Pricing & Plan</h2>
//       <div className="pricing-table">
//         <div className="pricing-card">
//           <h3>Basic Plan</h3>
//           <p className="price">$0 / month</p>
//           <ul>
//             <li>Access to basic features</li>
//             <li>5 project collaborations</li>
//             <li>Community support</li>
//           </ul>
//         </div>
//         <div className="pricing-card">
//           <h3>Pro Plan</h3>
//           <p className="price">$29 / month</p>
//           <ul>
//             <li>Access to all features</li>
//             <li>Unlimited project collaborations</li>
//             <li>Priority support</li>
//             <li>Exclusive content</li>
//           </ul>
//         </div>
//         <div className="pricing-card">
//           <h3>Enterprise Plan</h3>
//           <p className="price">$49 / month</p>
//           <ul>
//             <li>Custom features</li>
//             <li>Dedicated support</li>
//             <li>Advanced analytics</li>
//             <li>Team collaboration tools</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingPage;


import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.tooltipRef = React.createRef();
  }

  render() {
    const {
      text,
      tooltipText,
      placement,
      textClass,
      tooltipClass,
    } = this.props;

    return (
<PricingTable  highlightColor='#1976D2'>
    <PricingSlot  onClick={this.submit} buttonText='GET IT' title='FREE' priceText='$0/month'>
        <PricingDetail> <li>Access to basic features</li></PricingDetail>
        <PricingDetail> <li>5 project collaborations</li></PricingDetail>
        <PricingDetail> <li>Community support</li></PricingDetail>
        
    </PricingSlot>
    <PricingSlot highlighted onClick={this.submit} buttonText='BUY' title='BASIC' priceText='$24/month'>
        <PricingDetail> <li>Access to all features</li> projects</PricingDetail>
        <PricingDetail> <li>Unlimited project collaborations</li></PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail>  <li>Exclusive content</li></PricingDetail>
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText='BUY' title='PROFESSIONAL' priceText='$49/month'>
        <PricingDetail> <li>Custom features</li></PricingDetail>
        <PricingDetail> <li>Dedicated support</li></PricingDetail>
        <PricingDetail>  <li>Advanced analytics</li></PricingDetail>
        <PricingDetail><li>Team collaboration tools</li></PricingDetail>
    </PricingSlot>
    
</PricingTable>
    );
  }
}