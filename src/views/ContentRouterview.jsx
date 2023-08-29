import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import Analytics from '../components/dashboard/Analytics';
import CRM from '../components/dashboard/CRM';
import ECommerce from '../components/dashboard/ECommerce';
import Email from '../components/apps/Email';
import Typography from '../components/ui/Typography';
import Charts from '../components/misc/Charts';
import LogIn from "../components/login/LogIn";
import SignUp from '../components/login/SignUp';
import NotFound from '../components/notfound/NotFound';
import MainContext from "../context/MainContext";

export default function ContentRouterview() {
  const { setToken } = useContext(MainContext);
  
  return (
    <Routes>
      <Route path='/dashboards' element={<Dashboard/>}>
        <Route index element={<Analytics/>}></Route>
        <Route path='analytics' element={<Analytics/>}></Route>
        <Route path='crm' element={<CRM/>}></Route>
        <Route path='ecommerce' element={<ECommerce/>}></Route>
      </Route>
      <Route path='/email' element={<Email/>}></Route>
      <Route path='/typography' element={<Typography/>}></Route>
      <Route path='/charts' element={<Charts/>}></Route>
      <Route path='/login' element={<LogIn setToken={setToken} />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}
