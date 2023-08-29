import React from 'react';
import "./footer.css";
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer container'>
      <p>&copy; 2023, Made with ❤️ by <Link to='https://themeselection.com/' target={"_blank"} className='link-pl'>ThemeSelection</Link></p>
      <div className='footer--links'>
      <Link to='https://themeselection.com/license/' target={"_blank"} className='link-pl'><p>License</p></Link>
      <Link to='https://themeselection.com/' target={"_blank"} className='link-pl'><p>More Themes</p></Link>
      <Link to='https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/documentation/' target={"_blank"} className='link-pl'><p>Documentation</p></Link>
      <Link to='https://themeselection.com/support/' target={"_blank"} className='link-pl'><p>Support</p></Link>
      </div>
    </div>
  )
}
