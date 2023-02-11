import { 
    AppBar, 
    Avatar, 
    Box, 
    Button, 
    Container, 
    Dialog, 
    IconButton, 
    Rating, 
    Slide, 
    Stack, 
    TextField, 
    Toolbar, 
    Tooltip, 
    Typography, 
} from '@mui/material';
import React, { forwardRef, useEffect, useState } from 'react';
import { useValue } from '../../context/ContextProvider';
import { Close, StarBorder } from '@mui/icons-material';
import { List, ListItem, ListItemAvatar, ListItemText, Paper } from '@material-ui/core';
  
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow, Lazy, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/lazy';
import 'swiper/css/zoom';
import './swiper.css';
import Rooms from './Rooms';
import moment from 'moment';
import axios from 'axios'
import { width } from '@mui/system';

  const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" {...props} ref={ref} />;
  });

const Room = () => {
    const { state, dispatch} = useValue();
    const { currentUser, room, comments, newComment } = state;

    const handleChange = (e) => {
    dispatch({ type: 'UPDATE_COMMENT', payload: e.target.value });
    };
    

    const [place, setPlace] = useState(null);
    // const [comments, setComments] = useState([]);
    // const [newComment, setNewComment] = useState('');
    const [commentsHistory, setCommentsHistory] = useState([]);

    const handleSubmit = async () => {
        if (!newComment) return;
    
        const comment = {
            message: state.newComment,
            name: currentUser?.name,
            timestamp: new Date().toLocaleString(),
            roomId: room._id
        };
        const updatedCommentsHistory = [comment, ...commentsHistory];
        setCommentsHistory(updatedCommentsHistory);


        

        // setComments([...comments, comment]);
        // setNewComment('');
    
        dispatch({ type: 'ADD_COMMENT', payload: comment });

        try {
            await axios.post('http://localhost:5000/comments', comment);
        } catch (err) {
            console.error(err);
        }
        
        };


        
    useEffect(() => {
        axios.get('http://localhost:5000/comments')
            .then(res => {
            const filteredComments = res.data.filter(comment => comment.roomId === room._id);
            setCommentsHistory(filteredComments.sort((a, b) => b.timestamp - a.timestamp));
            })
            .catch(err => console.error(err));
    }, [room]);


    useEffect(() => {
      if (room) {
            const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${room.lng},${room.lat}.json?access_token=${process.env.REACT_APP_MAP_TOKEN}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => setPlace(data.features[0]));
        }
    }, [room]);
    
    const handleClose = () => {
        dispatch({ type: 'UPDATE_ROOM', payload: null });
    };
  return (
    <Dialog
    fullScreen
    open={Boolean(room)}
        onClose={handleClose}
    TransitionComponent={Transition}
    >

        <AppBar position="relative">
            <Toolbar>
            <Typography variant="h6" component="h3" sx={{ ml: 2, flex: 1 }}>
                    {/* {room?.title} */}
                </Typography>
            <IconButton color="inherit" onClick={handleClose}>
                    <Close />
                </IconButton>
            </Toolbar>
        </AppBar>
        <Container sx={{ pt: 5 }}>
          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow, Lazy, Zoom]}
            centeredSlides
            slidesPerView={2}
            grabCursor
            navigation
            autoplay
            lazy
            zoom
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            >
            {room?.images?.map((url) => (
                    <SwiperSlide key={url}>
                <div className="swiper-zoom-container">
                  <img src={url} alt="room" />
                        </div>
                    </SwiperSlide>
                ))}
            <Tooltip
              title={room?.uName || ''}
                sx={{
                position: 'absolute',
                bottom: '8px',
                left: '8px',
                zIndex: 2,
                }}
                >
                    <Avatar src={room?.uPhoto} />
                </Tooltip>
            </Swiper>
          <Stack sx={{ p: 3 }} spacing={2}>
                <Stack
                direction="row"
                sx={{
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                }}
                >
                    <Box>
                        <Typography variant='h6' component='span'>
                            {'Date Created:'}
                        </Typography>
                        <Typography component='span'>
                            {room?.createdAt}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' component='span'>
                            {'Deadline:'}
                        </Typography>
                        <Typography component='span'>
                            {room?.deadline}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' component='span'>
                            {'Status:'}
                        </Typography>
                        <Typography component='span'>
                            {room?.status}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' component='span'>
                            {'Task:'}
                        </Typography>
                        <Typography component='span'>
                            {room?.task}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' component='span'>
                            {'Description:'}
                        </Typography>
                        <Typography component='span'>
                            {room?.description}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' component='span'>
                            {'Client:'}
                        </Typography>
                        <Typography component='span'>
                            {room?.client}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' component='span'>
                            {'VA:'}
                        </Typography>
                        <Typography component='span'>
                            {room?.employee}
                        </Typography>
                    </Box>
                    {/* <Box>
                        <Typography variant='h6' component='span'>
                            {'Price Per Night:'}
                        </Typography>
                        <Typography component='span'>
                            {room?.price ===0 ? 'Free Stay' : '$'+room?.price}
                        </Typography>
                    </Box> */}
                    {/* <Box
                    sx={{
                        display:'flex',
                        alignItems:'center',
                    }}
                    >
                        <Typography variant='h6' component='span'>
                            {'Ratings:'}
                        </Typography>
                        <Rating 
                            name='room-ratings'
                            defaultValue={3.5}
                            precision={0.5}
                            emptyIcon={<StarBorder />}
                        />
                    </Box> */}
                </Stack>
                <Stack
                direction="row"
                sx={{
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    }}
                >
                    {/* <Box>
                        <Typography variant='h6' component='span'>
                            {'Place Name:'}
                        </Typography>
                        <Typography component='span'>
                            {place?.text}
                        </Typography>
                    </Box>
                    <Box
                    sx={{
                        display:'flex',
                        alignItems:'center',
                    }}
                    >
                        <Typography variant='h6' component='span'>
                            {'Address:'}
                        </Typography>
                        <Typography component='span'>
                            {place?.place_name}
                        </Typography>
                    </Box> */}
                </Stack>
                {/* <Stack>
                <Typography variant='h6' component='span'>
                            {'Details: '}
                        </Typography>
                        <Typography component='span'>
                            {room?.description}
                        </Typography>

                        Testing
                        
                </Stack> */}
            </Stack>
        </Container>
        <Paper style={{marginLeft:'300px'}}>
        <Box sx={{ p: 2, justifyContent: 'center' }}>
            <Typography variant="h6">Leave a Comment</Typography>
            <TextField
                    sx={{width:'200px'}}
                    label="Leave a Comment"
                    value={newComment}
                    onChange={handleChange}
                />
            <Button onClick={handleSubmit}>Submit</Button>
            {/* <List>
            {room && comments.filter(comment => comment.roomId === room._id).map((comment) => (
            <ListItem key={comment.timestamp}>
            <ListItemAvatar>
            <Avatar>{comment.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
                    primary={comment.name}
                    secondary={comment.message}
                />
            </ListItem>
            ))}
            </List> */}
            <Box style={{alignItems:'left', width:'700px', position:'center'}}>
            <List>
            {commentsHistory.map(comment => (
            <ListItem key={comment.timestamp} style={{alignItems:'left', justifyContent:'left'}}>
            <ListItemAvatar>
            <Avatar>{comment.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText 
                    primary={comment.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                             {
                                (() => {
                                    try {
                                    return new Date(comment.timestamp).toLocaleString();
                                    } catch (error) {
                                    return "Invalid date";
                                    }
                                })()
                                }
                            </Typography>
                        </React.Fragment>
                    }
                />
                <br></br>
                <Typography component="p">{comment.message}</Typography>
            </ListItem>
            ))}
        </List>
        </Box>
        </Box>

        </Paper>


    </Dialog>
    );
  };

  export default Room;
