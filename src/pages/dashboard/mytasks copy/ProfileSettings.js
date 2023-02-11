import { AddLocationAlt, Bed, LocationOn, Lock, Send } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Box, Button, Paper } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import AddRoom from '../../../components/addRoom/AddRoom'
import ClusterMap from '../../../components/map/ClusterMap'
import AddProject from '../../../components/projects/AddProject'
import Protected from '../../../components/protected/Protected'
import Rooms from '../../../components/rooms/Rooms'
import Profile from '../../../components/user/Profile'
import Profilee from '../../../components/user/Profilee'
import { useValue } from '../../../context/ContextProvider'






const ProfileSettings = ({setSelectedLink, link}) => {

    const {
        state:{currentUser, section},
        dispatch
    } = useValue()

    const ref = useRef()

  useEffect(()=>(
    setSelectedLink(link)
  ), [])




  return (
    <>
    {/* <Button 
      type='submit' 
      variant='contained' 
      onClick={()=> dispatch({
        type:'UPDATE_PROFILEE', 
        payload:{open:true, 
          file:null, 
          photoURL:currentUser?.photoURL,
        },
      })} 
    endIcon={<Send />}>
    Add New Projects
    </Button> */}
    <div>
      Profile Settings
    <Profile />

    </div>
    <br></br>
    <br></br>
    <br></br>
    
    <AddProject />
    
{/* 
    <Box ref={ref}>
            {{
                0: <ClusterMap />,
                1: <Rooms />,
                2: (
                    
                        <AddRoom />
                   
                ),   
            }[section]}
        <Paper
        elevation={3}
        sx={{position:'fixed', bottom:0, left:0, right:0, zIndex:2}}
        >
            <BottomNavigation
            showLabels
            value={section}
            onChange={(e, newValue)=>dispatch({type:'UPDATE_SECTION',payload:newValue})}
            >
                <BottomNavigationAction label='Map' icon={<LocationOn />} />
                <BottomNavigationAction label='Rooms' icon={<Bed />} />
                <BottomNavigationAction label='Add' icon={<AddLocationAlt />} />
            </BottomNavigation>
        </Paper>
    </Box> */}

    </>
  )
}


export default ProfileSettings