import {
  Route,
  createRoutesFromElements,
  createHashRouter,
} from "react-router-dom";

import Dealer from "../container/dealer/Dealer";
import Calculator from "../container/Calculator/Calculator";
import PropertyType from "../container/Admin/Setups/PropertyType/PropertyType";
import ApprovalReason from "../container/Admin/Setups/ApprovalReason/ApprovalReason";
import RejectionReason from "../container/Admin/Setups/RejectionReason/RejectionReason";
import AssetsBanking from "../container/Admin/Reports/Non-Banking-Assets/Assets-Banking";
import AdminDashboard from "../container/Admin/AdminDashboard/AdminDashboard";
import Dashboard from "../container/Pages/dashboard/Dashboard";

import DealerLogin from "../container/Admin/DealerLogin/Login/DealerLogin";
import SignUpRequest from "../container/Admin/DealerLogin/SignUp-Request/SignupRequest";
import SignUp from "../container/Admin/DealerLogin/SignUp/SignUp";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route exact path="SignUp" element={<SignUp />} />
      <Route exact path="/" element={<DealerLogin />} />
      <Route exact path="SignUpRequest" element={<SignUpRequest />} />
      <Route exact path="/Js/" element={<Dashboard />}>
        <Route path="Home" element={<Dealer />} />
        <Route path="" element={<Dealer />} />
        <Route path="calculator" element={<Calculator />} />
      </Route>
      <Route exact path="/AdminDashboard/" element={<AdminDashboard />}>
        <Route path="" element={<PropertyType />} />
        <Route path="PropertyType" element={<PropertyType />} />
        <Route path="ApprovalReason" element={<ApprovalReason />} />
        <Route path="RejectionReason" element={<RejectionReason />} />
        <Route path="AssetBanking" element={<AssetsBanking />} />
      </Route>
    </>
  )
);
