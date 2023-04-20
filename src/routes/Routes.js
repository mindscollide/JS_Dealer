import {
  Route,
  createRoutesFromElements,
  createHashRouter,
} from "react-router-dom";

import Dealer from "../container/dealer/Dealer";
import Calculator from "../container/Calculator/Calculator";
import Dashboard from "../container/Pages/dashboard/Dashboard";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<Dashboard />}>
        <Route path="" element={<Dealer />} />
        <Route path="client" element={<Dealer />} />
        <Route path="calculator" element={<Calculator />} />
      </Route>
    </>
  )
);
