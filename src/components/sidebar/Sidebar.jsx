import './sidebar.css';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MainContext from '../../context/MainContext';
import React, { useContext } from 'react';
import {
  ChevronLeft, ChevronRight, ExpandMore, HorizontalRuleOutlined,
  DashboardCustomizeOutlined, QueryStatsOutlined, DonutLargeOutlined, ShoppingCartOutlined,
  MailOutlined, ChatBubbleOutlineOutlined, CalendarMonth,
  DescriptionOutlined, AccountBoxOutlined, GppGoodOutlined,
  ArticleOutlined, LockPersonOutlined, ListAltOutlined,
  OpenInBrowserOutlined, TextFieldsOutlined, CategoryOutlined, AspectRatioOutlined,
  ShapeLineOutlined, InsertChartOutlinedOutlined, ShieldOutlined, MoreHorizOutlined
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),

});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [dashSub, setDashSub] = React.useState(false);
  const { sideFixed, setSideFixed } = useContext(MainContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMouseLeave = () => {
    if (!sideFixed) {
      handleDrawerClose();
    }
  }

  const openDashboardSub = () => {
    setDashSub(true);
  }

  const closeDashboardSub = () => {
    setDashSub(false);
  }

  const navigate = useNavigate();
  const handle = (path) => {
    navigate(path)
  }

  const dashboards = [{ text: 'Dashboards', icon: <DashboardCustomizeOutlined />, path: '' },
  { text: 'Analytics', icon: <QueryStatsOutlined />, path: '/dashboards/analytics' },
  { text: 'CRM', icon: <DonutLargeOutlined />, path: '/dashboards/crm' },
  { text: 'eCommerce', icon: <ShoppingCartOutlined />, path: '/dashboards/ecommerce' },]

  const appsNPages = [{ text: 'Email', icon: <MailOutlined />, path: '/email' },
  { text: 'Chat', icon: <ChatBubbleOutlineOutlined />, path: '' },
  { text: 'Calendar', icon: <CalendarMonth />, path: '' },
  { text: 'Invoice', icon: <DescriptionOutlined />, path: '' },
  { text: 'User', icon: <AccountBoxOutlined />, path: '' },
  { text: 'Roles & Permissions', icon: <GppGoodOutlined />, path: '' },
  { text: 'Pages', icon: <ArticleOutlined />, path: '' },
  { text: 'Auth Pages', icon: <LockPersonOutlined />, path: '' },
  { text: 'Wizard Examples', icon: <ListAltOutlined />, path: '' },
  { text: 'Dialog Examples', icon: <OpenInBrowserOutlined />, path: '' },]

  const ui = [{ text: 'Typography', icon: <TextFieldsOutlined />, path: '/typography' },
  { text: 'Icons', icon: <CategoryOutlined />, path: '' },
  { text: 'Cards', icon: <AspectRatioOutlined />, path: '' },
  { text: 'Components', icon: <ShapeLineOutlined />, path: '' },]

  const misc = [{ text: 'Charts', icon: <InsertChartOutlinedOutlined />, path: '/charts' },
  { text: 'Access Control', icon: <ShieldOutlined />, path: '' },
  { text: 'Others', icon: <MoreHorizOutlined />, path: '' },]

  return (

    <Drawer className='sidebar' variant="permanent" open={open} onMouseEnter={handleDrawerOpen} onMouseLeave={handleMouseLeave}>
      <DrawerHeader className="sidebar--title">
        <div onClick={() => handle('/dashboards/analytics')}>
          <img src="assets/logo.png" alt="logo" />
          {open && <h2>sneat</h2>}
        </div>
        {open &&
          <button className='sidebar--control'>
            {sideFixed
              ? <ChevronLeft onClick={() => setSideFixed(false)} />
              : <ChevronRight onClick={() => setSideFixed(true)} />}
          </button>}
      </DrawerHeader>
      <div className='sidebar--content'>
        <List>
          {dashboards.slice(0, 1).map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 4,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                {(open && !dashSub) && <ChevronRight onClick={openDashboardSub} />}
                {(open && dashSub) && <ExpandMore onClick={closeDashboardSub} />}
              </ListItemButton>
            </ListItem>
          ))}
          {dashSub && dashboards.slice(1).map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 4,
                }}
                onClick={() => handle(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {open ? <p className='sectionTitle'>APPS & PAGES</p>
            : <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 4,
              }}
            >
              <HorizontalRuleOutlined fontSize="small" />
            </ListItemButton>}
          {appsNPages.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 4,
                }}
                onClick={() => handle(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {open ? <p className='sectionTitle'>USER INTERFACE</p>
            : <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 4,
              }}
            >
              <HorizontalRuleOutlined fontSize="small" />
            </ListItemButton>}
          {ui.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 4,
                }}
                onClick={() => handle(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {open ? <p className='sectionTitle'>CHARTS & MISC</p>
            : <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 4,
              }}
            >
              <HorizontalRuleOutlined fontSize="small" />
            </ListItemButton>}
          {misc.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 4,
                }}
                onClick={() => handle(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>

  )
}
