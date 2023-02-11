import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import { useValue } from '../../context/ContextProvider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

                
                

const UserDetails = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const { state: { currentUser } } = useValue();

    return (
        <div>
            <h2>Users Details</h2>
                
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

                <Paper elevation={3}>
                    <Tabs value={value} onChange={handleChange} aria-label="tabs example">
                        <Tab label="Facebook" />
                        <Tab label="Twitter" />
                        <Tab label="Instagram" />
                    </Tabs>
                    {value === 0 && (
                        <iframe
                        title="Facebook Embed"
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fanimalplanet&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="500"
                        height="500"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                      />
                    )}
                    {value === 1 && (
                        <iframe
                        title="Twitter Embed"
                        srcDoc={`
                        <a class="twitter-timeline" href="https://twitter.com/AnimalPlanet?ref_src=twsrc%5Etfw">Tweets by AnimalPlanet</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        `}
                        width="500"
                        height="500"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                      />
                      
                    )}
                    {value === 2 && (
                        <iframe
                        title="Instagram Embed"
                        src={`https://www.instagram.com/animalplanet/`}
                        width="500"
                        height="500"
                        style={{ border: "none" }}
                      />
                    )}
                    
                </Paper>
                {/* <Paper elevation={3} sx={{p:2, gridColumn:'1/3'}}>
                <iframe  width="300" height="300">

                <div class="fb-page" data-href="https://www.facebook.com/roblox" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/roblox" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/roblox">Roblox</a></blockquote></div>
                </iframe>
                </Paper>
                <Paper elevation={3} sx={{p:2, gridColumn:'1/3'}}>
            
                <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
                <Tab icon={<PhoneIcon />} aria-label="phone">
                <iframe src="https://www.moisesmari.com" style={{height: '100px', width: '100px'}} />
                </Tab>
                <Tab icon={<FavoriteIcon />} aria-label="favorite">
                <iframe src="https://www.twitter.com" style={{height: '100%', width: '100%'}} />
                </Tab>
                <Tab icon={<PersonPinIcon />} aria-label="person">
                <iframe src="https://www.instagram.com" style={{height: '100%', width: '100%'}} />
                </Tab>
                </Tabs>
                
                </Paper> */}
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
                        <p>Active: {currentUser.active ? 'Yes' : 'No'}</p>
                        <p>Name: {currentUser.name}</p>
                        <p>Email: {currentUser.email}</p>
                        <p>Company Name: {currentUser.companyname}</p>
                        <p>Address: {currentUser.address}</p>
                        <p>Phone: {currentUser.phone}</p>
                        <p>Role: {currentUser.role}</p>
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
                        <p>Date Hired: {currentUser.contractstarted}</p> 
                        <p>Special Instruction: {currentUser.specialinstruction}</p>
                        <p>Color Scheme: {currentUser.colorscheme}</p>
                        <p>Tagline: {currentUser.tagline}</p>
                        <p>Mission Statement: {currentUser.missionstatement}</p>
                        <p>Department: {currentUser.department}</p>
                        <p>Position: {currentUser.jobtitle}</p>
                        <p>Date Hired: {currentUser.datehired}</p>  
                        </Typography>
                    </Box>
                </Paper>
                <Paper elevation={3} sx={{p:2, gridColumn:3, gridRow:'1/4'}}>
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
                    <Typography>Helpful Links</Typography>
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
                    <p>1 to 2 Paragraphs telling us about your Business: {currentUser.paragraphbusiness}</p>
                    
                </Paper>
                <Paper elevation={3} sx={{p:2, gridColumn:'1/3'}}>
                    <p>1 to 2 Paragraphs telling us about your Yourself: {currentUser.paragraphyourself}</p>
                </Paper>
                </Box>
        </div>
        
        



      
  
    
  





    );
}

export default UserDetails;
