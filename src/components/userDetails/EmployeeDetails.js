import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import { useValue } from '../../context/ContextProvider';

const EmployeeDetails = () => {
    const { state: { currentUser } } = useValue();

    return (
        <div>
            <h2>Employee Details</h2>
                
            <Box
                sx={{
                display:{xs:'flex', md:'grid'},
                gridTemplateColumns: 'repeat(3,1fr)',
                gridAutoRows: 'minmax(100px, auto)',
                gap:3,
                // textAlign:'center',
                flexDirection:'column'
                }}
                >
                <Paper elevation={3} sx={{p:3}}>
                    <Typography variation='h1' sx={{fontSize:'24px'}}>Main Info</Typography>
                    <Box
                    sx={{
                    display:'flex',
                    alignItems:'left',
                    // justifyContent:'center'
                    }}
                    >
                    {/* <Group sx={{height:100, width:100, opacity:0.3, mr:1}} /> */}
                    <Typography >
                        {/* {users.length} */}
                        {/* <p>Active: {currentUser.active ? 'Yes' : 'No'}</p> */}
                        <p>Name: {currentUser.name}</p>
                        <p>Email: {currentUser.email}</p>
                        {/* <p>Company Name: {currentUser.companyname}</p> */}
                        {/* <p>Address: {currentUser.address}</p> */}
                        <p>Phone: {currentUser.phone}</p>
                        {/* <p>Role: {currentUser.role}</p> */}
                        </Typography>
                    </Box>
                </Paper>
                <Paper elevation={3} sx={{p:3}}>
                    <Typography variation='h1' sx={{fontSize:'24px'}}>Other Info</Typography>
                    <Box
                    sx={{
                    display:'flex',
                    alignItems:'left',
                    // justifyContent:'center'
                    }}
                    >
                    {/* <MapsHomeWork sx={{height:100, width:100, opacity:0.3, mr:1}} /> */}
                    <Typography>
                        {/* {rooms.length} */}
                        {/* <p>Areas: {currentUser.areas}</p> */}
                        <p>Date Hired: {currentUser.contractstarted}</p> 
                        {/* <p>Special Instruction: {currentUser.specialinstruction}</p> */}
                        {/* <p>Color Scheme: {currentUser.colorscheme}</p>
                        <p>Tagline: {currentUser.tagline}</p>
                        <p>Mission Statement: {currentUser.missionstatement}</p> */}
                        <p>Department: {currentUser.department}</p>
                        <p>Position: {currentUser.jobtitle}</p>
                        <p>Date Hired: {currentUser.datehired}</p>  
                        </Typography>
                    </Box>
                </Paper>
                {/* <Paper elevation={3} sx={{p:2, gridColumn:3, gridRow:'1/4'}}>
                    <Box>
                    <Typography variation='h1' sx={{fontSize:'24px'}}>Your Links</Typography>
                        <p>Website: {currentUser.link}</p>
                        <p>Facebook: {currentUser.linkfacebook}</p>
                        <p>Youtube: {currentUser.linkyoutube}</p>
                        <p>Twitter: {currentUser.linktwitter}</p>
                        <p>Instagram: {currentUser.linkinstagram}</p>
                        <p>Pinterest: {currentUser.linkpinterest}</p>
                        <p>Triller: {currentUser.linktriller}</p>
                        <p>Snapchat: {currentUser.linksnapchat}</p>
                        <p>LinkedIn: {currentUser.linklinkedin}</p>
                        <p>Tiktok: {currentUser.linktiktok}</p>
                    </Box>
                    <Divider sx={{mt:3, mb:3, opacity:0.7}} />
                    <Box>
                    <Typography>Helpful Links</Typography> */}
                    {/* <List>
                        {rooms.slice(0,4).map((room,i)=>(
                        <Box key={room._id}>
                            <ListItem>
                            <ListItemAvatar>
                                <Avatar alt={room?.title} src={room?.images[0]} variant="rounded" />
                            </ListItemAvatar>
                            <ListItemText 
                            primary={room?.title}
                            secondary={`Time Created: ${moment(room?.createdAt).fromNow()}`}
                            />
                            </ListItem>
                            {i !== 3 && <Divider variant='inset' />}
                        </Box>
                        ))}
                    </List> */}
                    {/* </Box>
                </Paper> */}
                <Paper elevation={3} sx={{p:2, gridColumn:'1/3'}}>
                    {/* <p>1 to 2 Paragraphs telling us about your Business: {currentUser.paragraphbusiness}</p> */}
                    
                </Paper>
                <Paper elevation={3} sx={{p:2, gridColumn:'1/3'}}>
                    {/* <p>1 to 2 Paragraphs telling us about your Yourself: {currentUser.paragraphyourself}</p> */}
                </Paper>
                </Box>
        </div>
        
        



      
  
    
  





    );
}

export default EmployeeDetails;
