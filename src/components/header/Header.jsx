import React, { useState, useContext } from 'react';
import { useNavigate} from 'react-router-dom';
import Search from '../search/Search';
import MainContext from '../../context/MainContext';
import './header.css';
import { MagnifyingGlass, Translate, Moon, SquaresFour, Bell } from '@phosphor-icons/react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  AccountBoxOutlined, MailOutlined, ChatBubbleOutlineOutlined,
  Settings, AttachMoney, HelpOutline, Logout
} from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: theme.palette.text.secondary,
}));

export default function Header() {

  const { showSearch, setShowSearch, setToken } = useContext(MainContext);
  const [showUserMenu, setShowUserMenu] = useState(false);


  const navigate = useNavigate();
  const handle = (path) => {
    navigate(path)
  }

  const accountP1 = [{ text: 'Profile', icon: <AccountBoxOutlined fontSize='small'/>, path: '' },
  { text: 'Inbox', icon: <MailOutlined fontSize='small'/>, path: '/email' },
  { text: 'Chat', icon: <ChatBubbleOutlineOutlined fontSize='small'/>, path: '' },];

  const accountP2 = [{ text: 'Settings', icon: <Settings fontSize='small'/>, path: '' },
  { text: 'Pricing', icon: <AttachMoney fontSize='small'/>, path: '/email' },
  { text: 'FAQ', icon: <HelpOutline fontSize='small'/>, path: '' },];

  const accountP3 = [{ text: 'Sign Out', icon: <Logout fontSize='small'/>, path: '/login' },]

  return (
    <div className='header container'>
      <Item sx={{ height: 80, width: '100%', px: 2 }}>
        {showSearch && <div className='backdrop' onClick={() => setShowSearch(false)}></div>}
        {showSearch && <Search />}
        <div className='header--left' onClick={() => setShowSearch(true)}>
          <MagnifyingGlass className='icon' size={24} />
          <input type='search' id='searchbar' placeholder='Search (ctrl+/)'></input>
        </div>
        <div className='header--right'>
          <Translate className='icon' size={24} />
          <Moon className='icon' size={24} />
          <SquaresFour className='icon' size={24} />
          <Bell className='icon' size={24} />
          <img src="/assets/avatar.png" alt="avatar" onClick={() => setShowUserMenu(true)} />
        </div>
        {showUserMenu && <div className='backdrop' style={{ backgroundColor: 'transparent' }} onClick={() => setShowUserMenu(false)}></div>}
        {showUserMenu && <div className='header--userMenu'>
            <div className='header--userMenu--top'>
              <img src="/assets/avatar.png" alt="avatar" />
              <div>
                <p className='userName'>John Doe</p>
                <p>Admin</p>
              </div>
            </div>
            <Divider />
            <List>
              {accountP1.map((item) => (
                <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      height: 36,
                      justifyContent: 'initial',
                      px: 2,
                    }}
                    onClick={() => {
                      handle(item.path)
                      setShowUserMenu(false)}}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 1.5,
                        justifyContent: 'center',
                      }}
                      className='header--userMenu--icon'
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {accountP2.map((item) => (
                <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      height: 36,
                      justifyContent: 'initial',
                      px: 2,
                    }}
                    onClick={() => {
                      handle(item.path)
                      setShowUserMenu(false)}}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 1.5,
                        justifyContent: 'center',
                      }}
                      className='header--userMenu--icon'
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {accountP3.map((item) => (
                <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      height: 36,
                      justifyContent: 'initial',
                      px: 2,
                    }}
                    onClick={() => {
                      handle(item.path)
                      setShowUserMenu(false)
                      setToken(() => {
                        sessionStorage.removeItem('token');
                        return null;
                      });
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 1.5,
                        justifyContent: 'center',
                      }}
                      className='header--userMenu--icon'
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
        </div>}
      </Item>
    </div>
  )
}
