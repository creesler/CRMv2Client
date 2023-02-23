import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import { useValue } from '../../context/ContextProvider';

const ClientDetails = () => {
    const { state: { currentUser } } = useValue();

    return (
        <div>
            <h2>Client Details</h2>
                
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
                        <p>Website: <a href={currentUser.link} target="_blank" rel="noopener noreferrer">{currentUser.link}</a></p>
                        <p>Name: {currentUser.name}</p>
                        <p>Email: {currentUser.email}</p>
                        <p>Company Name: {currentUser.companyname}</p>
                        <p>Address: {currentUser.address}</p>
                        <p>Phone: {currentUser.phone}</p>
                        <p>Contract Start: {currentUser.contractstarted}</p>
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
                        <p>Areas: {currentUser.areas}</p>
                        {/* <p>Date Hired: {currentUser.contractstarted}</p>  */}
                        <p>Special Instruction: {currentUser.specialinstruction}</p>
                        <p>Color Scheme: {currentUser.colorscheme}</p>
                        <p>Tagline: {currentUser.tagline}</p>
                        <p>Mission Statement: {currentUser.missionstatement}</p>
                        {/* <p>Department: {currentUser.department}</p> */}
                        {/* <p>Position: {currentUser.jobtitle}</p> */}
                        {/* <p>Date Hired: {currentUser.datehired}</p>   */}
                        </Typography>
                    </Box>
                </Paper>
                <Paper elevation={3} sx={{p:2, gridColumn:3, gridRow:'1/4'}}>
                    <Box>
                    <Typography variation='h1' sx={{fontSize:'24px'}}>Your Links</Typography>
                        
                        <p>Facebook: <a href={currentUser.linkfacebook} target="_blank" rel="noopener noreferrer">{currentUser.linkfacebook}</a></p>
                        <p>Youtube: <a href={currentUser.linkyoutube} target="_blank" rel="noopener noreferrer">{currentUser.linkyoutube}</a></p>
                        <p>Twitter: <a href={currentUser.linktwitter} target="_blank" rel="noopener noreferrer">{currentUser.linktwitter}</a></p>
                        <p>Instagram: <a href={currentUser.linkinstagram} target="_blank" rel="noopener noreferrer">{currentUser.linkinstagram}</a></p>
                        <p>Pinterest: <a href={currentUser.linkpinterest} target="_blank" rel="noopener noreferrer">{currentUser.linkpinterest}</a></p>
                        <p>Triller: <a href={currentUser.linktriller} target="_blank" rel="noopener noreferrer">{currentUser.linktriller}</a></p>
                        <p>Snapchat: <a href={currentUser.linksnapchat} target="_blank" rel="noopener noreferrer">{currentUser.linksnapchat}</a></p>
                        <p>LinkedIn: <a href={currentUser.linklinkedin} target="_blank" rel="noopener noreferrer">{currentUser.linklinkedin}</a></p>
                        <p>Tiktok: <a href={currentUser.linktiktok} target="_blank" rel="noopener noreferrer">{currentUser.linktiktok}</a></p>
                    </Box>
                    <Divider sx={{mt:3, mb:3, opacity:0.7}} />
                    <Box>
                    <Typography variation='h1' sx={{fontSize:'24px'}}>Showcase</Typography>

                     
                    <Paper elevation={3} sx={{p:2, gridColumn:'1/3'}}>
                    <iframe
                        title="Gallery"
                        // src="https://jaredstout.ava-247.com/gallery/"
                        src={currentUser.siteshowcase}
                        width="100%"
                        height="900px"
                        frameborder="0"
                    />
                    </Paper>    
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
                    </Box>
                </Paper>
                <Paper elevation={3} sx={{p:2, gridColumn:'1/3'}}>
                    <p><Typography variation='h1' sx={{fontSize:'24px'}}>About Your Business:</Typography> {currentUser.paragraphbusiness}</p>
                    
                </Paper>
                <Paper elevation={3} sx={{p:2, gridColumn:'1/3'}}>
                <p><Typography variation='h1' sx={{fontSize:'24px'}}>About Yourself:</Typography> {currentUser.paragraphyourself}</p>
                </Paper>
                </Box>
        </div>
        
        



      
  
    
  





    );
}

export default ClientDetails;
