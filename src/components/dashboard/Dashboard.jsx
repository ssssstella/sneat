import React from 'react';
import {Outlet} from 'react-router-dom';

export default function dashboard() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}
