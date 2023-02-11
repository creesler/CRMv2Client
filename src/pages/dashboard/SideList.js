import { ChevronLeft, Construction, Dashboard, Details, Inbox, KingBed, Logout, Mail, MarkChatUnread, NotificationsActive, PeopleAlt } from '@mui/icons-material';
import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Tooltip, Typography } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { useValue } from '../../context/ContextProvider';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Main from './main/Main'
import Users from './users/Users'
import Rooms from './rooms/Rooms'
import MyTasks from './mytasks/MyTasks'
import Tasks from './tasks/Tasks'
import Requests from './requests/Requests'
import Messages from './messages/Messages'
import { storeRoom } from '../../actions/room';
import { logout } from '../../actions/user';
import useCheckToken from '../../hooks/useCheckToken'
import isAdmin from './utils/isAdmin';
import isEditor from './utils/isEditor';
import isBasic from './utils/isBasic';
import Projects from './projects/Projects';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ProfileSettings from './mytasks copy/ProfileSettings'
import UserDetails from '../../components/userDetails/Details';
import EmployeeDetails from '../../components/userDetails/EmployeeDetails'
import ClientDetails from '../../components/userDetails/ClientDetails'

const drawerWidth = 240;


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
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

const SideList = ({open, setOpen}) => {
  useCheckToken()
    const {
      state:{
        currentUser, 
        location, 
        details, 
        images, 
        updatedRoom, 
        deletedImages, 
        addedImages}, dispatch} = useValue();

    const [selectedLink, setSelectedLink] = useState('')

    const list = useMemo(()=>[
        ...isAdmin(currentUser) ? [
          {title:'Main', icon:<Dashboard/>, link:'', component:<Main {...{setSelectedLink, link:''}}/>},
          {title:'Users', icon:<PeopleAlt/>, link:'users', component:<Users {...{setSelectedLink, link:'users'}}/>},
          {title:'Tasks', icon:<Construction/>, link:'rooms', component:<Rooms {...{setSelectedLink, link:'rooms'}}/>}, 
          {title:'User Details', icon:<ManageAccountsIcon/>, link:'details', component:<UserDetails {...{setSelectedLink, link:'details'}}/>}, 
          // {title:'Projects', icon:<Construction/>, link:'projects', component:<Projects {...{setSelectedLink, link:'projects'}}/>},
        ] : [],
        ...isEditor(currentUser) ? [
          {title:'My Tasks', icon:<ContentPasteIcon/>, link:'mytasks', component:<MyTasks {...{setSelectedLink, link:'mytasks'}}/>},
          {title:'User Details', icon:<ManageAccountsIcon/>, link:'employeedetails', component:<EmployeeDetails {...{setSelectedLink, link:'employeedetails'}}/>}, 
        
        ] : [],
        ...isBasic(currentUser) ? [
          {title:'Tasks', icon:<FactCheckIcon/>, link:'tasks', component:<Tasks {...{setSelectedLink, link:'tasks'}}/>},
          {title:'User Details', icon:<ManageAccountsIcon/>, link:'clientdetails', component:<ClientDetails {...{setSelectedLink, link:'clientdetails'}}/>}, 
        
        ] : [],
        // {title:'Requests', icon:<NotificationsActive/>, link:'requests', component:<Requests {...{setSelectedLink, link:'requests'}}/>},
        // {title:'Messages', icon:<MarkChatUnread/>, link:'messages', component:<Messages {...{setSelectedLink, link:'messages'}}/>},
        // {title:'Profile', icon:<ManageAccountsIcon/>, link:'profile', component:<ProfileSettings {...{setSelectedLink, link:'profile'}}/>},
          
        ], [])

    const navigate = useNavigate()

    const handleLogout = ()=>{
      storeRoom(location, details, images, updatedRoom, deletedImages, addedImages, currentUser.id)
      logout(dispatch)
    }
  return (
    <>
          <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={()=>setOpen(false)}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {list.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={()=>navigate(item.link)}
                selected={selectedLink === item.link}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
            <Box sx={{mx:'auto', mt:3, mb:1}}>
                  <Tooltip title={currentUser?.name || ''}>
                    <Avatar
                    src={currentUser?.photoURL}
                    {...(open && {sx:{width:100, height:100}})}
                    />
                  </Tooltip>
            </Box>
            <Box sx={{textAlign:'center'}}>
                  {open && <Typography>{currentUser?.name}</Typography>}
                  <Typography variant='body2'>{currentUser?.role || 'role'}</Typography>
                  {open && <Typography variant='body2'>{currentUser?.email}</Typography>}
                  <Tooltip title='Logout' sx={{mt:1}}>
                    <IconButton onClick={handleLogout}>
                        <Logout />
                    </IconButton>
                  </Tooltip>
            </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
            {list.map(item=>(
                <Route key={item.title} path={item.link} element={item.component} />
            ))}
           <Route path='*' element={isBasic
              ? <ClientDetails />
              : isEditor
                ? <EmployeeDetails />
                : isAdmin
                  ? <Main {...{ setSelectedLink, link:'' }} />
                  : <UserDetails {...{ setSelectedLink, link:'details' }} />
            } />
            
            {/* <Route path='*' element={ isBasic(currentUser) ? (
              <Tasks {...{setSelectedLink, link:'tasks'}} />
            ) 
            : (
              <MyTasks {...{setSelectedLink, link:'mytasks'}} />
            )
            }
            />
            <Route path='*' element={ isEditor(currentUser) ? (
              <MyTasks {...{setSelectedLink, link:'mytasks'}} />
            ) 
            : (
              <Main {...{setSelectedLink, link:''}} />
            )
            }
            /> */}
            
        </Routes>
      </Box>
    </>
  )
}

export default SideList