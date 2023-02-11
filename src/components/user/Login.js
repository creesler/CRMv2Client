import { Close, Send } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { register, login } from '../../actions/user'
import { useValue } from '../../context/ContextProvider'
import GoogleOneTapLogin from './GoogleOneTapLogin'
import PasswordField from './PasswordField'


const Login = () => {
    const {state:{openLogin}, dispatch} = useValue()
    const [title, setTitle] = useState('Login')
    const [isRegister, setIsRegister] = useState(false)
    const linkRef = useRef();
    const [link, setLink] = useState('https://  ')
    const companynameRef = useRef();
    const [companyname, setCompanyName] = useState('None')
    const addressRef = useRef();
    const [address, setAddress] = useState('None')
    const phoneRef = useRef();
    const [phone, setPhone] = useState('None')
    const contractstartedRef = useRef();
    const [contractstarted, setContractstarted] = useState('None')
    const specialinstructionRef = useRef();
    const [specialinstruction, setSpecialinstruction] = useState('None')
    const colorschemeRef = useRef();
    const [colorscheme, setColorscheme] = useState('None')
    const taglineRef = useRef();
    const [tagline, setTagline] = useState('None')
    const missionstatementRef = useRef();
    const [missionstatement, setMissionstatement] = useState('None')
    const paragraphbusinessRef = useRef();
    const [paragraphbusiness, setParagraphbusiness] = useState('None')
    const paragraphyourselfRef = useRef();
    const [paragraphyourself, setParagraphyourself] = useState('None')
    const areasRef = useRef();
    const [areas, setAreas] = useState('None')
    const linkfacebookRef = useRef();
    const [linkfacebook, setLinkfacebook] = useState('None')
    const linkyoutubeRef = useRef();
    const [linkyoutube, setLinkyoutube] = useState('None')
    const linktwitterRef = useRef();
    const [linktwitter, setLinktwitter] = useState('None')
    const linkinstagramRef = useRef();
    const [linkinstagram, setLinkinstagram] = useState('None')
    const linkpinterestRef = useRef();
    const [linkpinterest, setLinkpinterest] = useState('None')
    const linktrillerRef = useRef();
    const [linktriller, setLinktriller] = useState('None')
    const linksnapchatRef = useRef();
    const [linksnapchat, setLinksnapchat] = useState('None')
    const linklinkedinRef = useRef();
    const [linklinkedin, setLinklinkedin] = useState('None')
    const linktiktokRef = useRef();
    const [linktiktok, setLinktiktok] = useState('None')
    const departmentRef = useRef();
    const [department, setDepartment] = useState('None')
    const jobtitleRef = useRef();
    const [jobtitle, setJobtitle] = useState('None')
    const datehiredRef = useRef();
    const [datehired, setDatehired] = useState('None')

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const handleClose = ()=>{
        dispatch({type:'CLOSE_LOGIN' })
    }



    const handleSubmit = (e)=>{
        e.preventDefault();
        const link = isRegister ? linkRef.current.value : '';
        const companyname = isRegister ? companynameRef.current.value : '';
        const address = isRegister ? addressRef.current.value : '';
        const email = emailRef.current.value
        const phone = isRegister ? phoneRef.current.value : '';  
        
        const contractstarted = isRegister ? contractstartedRef.current.value : ''; 
        const specialinstruction = isRegister ? specialinstructionRef.current.value : ''; 
        const colorscheme = isRegister ? colorschemeRef.current.value : ''; 
        const tagline = isRegister ? taglineRef.current.value : ''; 
        const missionstatement = isRegister ? missionstatementRef.current.value : ''; 
        const paragraphbusiness = isRegister ? paragraphbusinessRef.current.value : ''; 
        const paragraphyourself = isRegister ? paragraphyourselfRef.current.value : ''; 
        const areas = isRegister ? areasRef.current.value : ''; 
        const linkfacebook = isRegister ? linkfacebookRef.current.value : ''; 
        const linkyoutube = isRegister ? linkyoutubeRef.current.value : ''; 
        const linktwitter = isRegister ? linktwitterRef.current.value : ''; 
        const linkinstagram = isRegister ? linkinstagramRef.current.value : ''; 
        const linkpinterest = isRegister ? linkpinterestRef.current.value : ''; 
        const linktriller = isRegister ? linktrillerRef.current.value : ''; 
        const linksnapchat = isRegister ? linksnapchatRef.current.value : ''; 
        const linklinkedin = isRegister ? linklinkedinRef.current.value : ''; 
        const linktiktok = isRegister ? linktiktokRef.current.value : ''; 
        const department = isRegister ? departmentRef.current.value : ''; 
        const jobtitle = isRegister ? jobtitleRef.current.value : ''; 
        const datehired = isRegister ? datehiredRef.current.value : ''; 

        const password = passwordRef.current.value
        if(!isRegister) return login ({email, password}, dispatch);
        const name = nameRef.current.value
        const confirmPassword = confirmPasswordRef.current.value
        if(password !== confirmPassword) 
            return dispatch({
                type:'UPDATE_ALERT', 
                payload: {
                    open: true, 
                    severity: 'error', 
                    message: 'Passwords do not match',
                },
            });
            register({
                name, 
                email, 
                password, 
                link,
                companyname,
                address,
                phone,
                    
                contractstarted,
                specialinstruction,
                colorscheme,
                tagline,
                missionstatement,
                paragraphbusiness,
                paragraphyourself,
                areas,
                linkfacebook,
                linkyoutube,
                linktwitter,
                linkinstagram,
                linkpinterest,
                linktriller,
                linksnapchat,
                linklinkedin,
                linktiktok,
                department,
                jobtitle,
                datehired,
            }, dispatch);
    };

    useEffect(()=>{
        isRegister ? setTitle('Register') : setTitle('Login')
    }, [isRegister])
  return (
    <Dialog
    open={openLogin}
    onClose={handleClose}
    >
        <DialogTitle>
            {title}
            <IconButton
            sx={{
                position:'absolute',
                top:8,
                right:8,
                color:(theme)=> theme.palette.grey[500]
            }}
            onClick={handleClose}
            >
                <Close />
            </IconButton>
        </DialogTitle>
        <form onSubmit={handleSubmit}>
            <DialogContent dividers>
                <DialogContentText>
                    Please fill your information in the fields below:
                </DialogContentText>
                {isRegister &&
                <TextField 
                autoFocus
                margin='normal'
                variant='standard'
                id='name'
                label='Name'
                type='text'
                fullWidth
                inputRef={nameRef}
                inputProps={{minLength:2}}
                required
                />
                }
                <TextField 
                autoFocus={!isRegister}
                margin='normal'
                variant='standard'
                id='email'
                label='Email'
                type='email'
                fullWidth
                inputRef={emailRef}
                required
                />
                <PasswordField {...{passwordRef}} />
                {isRegister &&
                <PasswordField passwordRef={confirmPasswordRef} id='confirmPassword' label='Confirm Password' />
                }
                
                <br></br><br></br><br></br>
                {isRegister &&
                <p>Client more details:</p>
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='link'
                label='Do you have an existing website? - skip this if none'
                type='text'
                fullWidth
                inputRef={linkRef}
                value={link}
                onChange={(e) => setLink(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='companyname'
                label='Company Name'
                type='text'
                fullWidth
                inputRef={companynameRef}
                value={companyname}
                onChange={(e) => setCompanyName(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='address'
                label='Address'
                type='text'
                fullWidth
                inputRef={addressRef}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='phone'
                label='Phone'
                type='text'
                fullWidth
                inputRef={phoneRef}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='contractstarted'
                label='Contract Date'
                type='date'
                fullWidth
                inputRef={contractstartedRef}
                value={contractstarted}
                onChange={(e) => setContractstarted(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='specialinstruction'
                label='Special Instruction'
                type='text'
                fullWidth
                inputRef={specialinstructionRef}
                value={specialinstruction}
                onChange={(e) => setSpecialinstruction(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='colorscheme'
                label='Color Scheme'
                type='text'
                fullWidth
                inputRef={colorschemeRef}
                value={colorscheme}
                onChange={(e) => setColorscheme(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='tagline'
                label='Tagline'
                type='text'
                fullWidth
                inputRef={taglineRef}
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='missionstatement'
                label='Mission Statement'
                type='text'
                fullWidth
                inputRef={missionstatementRef}
                value={missionstatement}
                onChange={(e) => setMissionstatement(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='paragraphbusiness'
                label='1 to 2 Paragraphs telling us about your Business'
                type='text'
                fullWidth
                inputRef={paragraphbusinessRef}
                value={paragraphbusiness}
                onChange={(e) => setParagraphbusiness(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='paragraphyourself'
                label='1 to 2 Paragraphs telling us about your Yourself'
                type='text'
                fullWidth
                inputRef={paragraphyourselfRef}
                value={paragraphyourself}
                onChange={(e) => setParagraphyourself(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='areas'
                label='Areas'
                type='text'
                fullWidth
                inputRef={areasRef}
                value={areas}
                onChange={(e) => setAreas(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='linkfacebook'
                label='Do you have Facebook Account?'
                type='text'
                fullWidth
                inputRef={linkfacebookRef}
                value={linkfacebook}
                onChange={(e) => setLinkfacebook(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='linkyoutube'
                label='Do you have Youtube Channel?'
                type='text'
                fullWidth
                inputRef={linkyoutubeRef}
                value={linkyoutube}
                onChange={(e) => setLinkyoutube(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='linktwitter'
                label='Do you have Twitter Account?'
                type='text'
                fullWidth
                inputRef={linktwitterRef}
                value={linktwitter}
                onChange={(e) => setLinktwitter(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='linkinstagram'
                label='Do you have Instagram Account?'
                type='text'
                fullWidth
                inputRef={linkinstagramRef}
                value={linkinstagram}
                onChange={(e) => setLinkinstagram(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='linkpinterest'
                label='Do you have Pinterest Account?'
                type='text'
                fullWidth
                inputRef={linkpinterestRef}
                value={linkpinterest}
                onChange={(e) => setLinkpinterest(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='linktriller'
                label='Do you have Triller Account?'
                type='text'
                fullWidth
                inputRef={linktrillerRef}
                value={linktriller}
                onChange={(e) => setLinktriller(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='linksnapchat'
                label='Do you have Snapchat Account?'
                type='text'
                fullWidth
                inputRef={linksnapchatRef}
                value={linksnapchat}
                onChange={(e) => setLinksnapchat(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='linklinkedin'
                label='Do you have LinkedIn Account?'
                type='text'
                fullWidth
                inputRef={linklinkedinRef}
                value={linklinkedin}
                onChange={(e) => setLinklinkedin(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='linktiktok'
                label='Do you have Tiktok Account?'
                type='text'
                fullWidth
                inputRef={linktiktokRef}
                value={linktiktok}
                onChange={(e) => setLinktiktok(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='department'
                label='Department'
                type='text'
                fullWidth
                inputRef={departmentRef}
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='jobtitle'
                label='Position'
                type='text'
                fullWidth
                inputRef={jobtitleRef}
                value={jobtitle}
                onChange={(e) => setJobtitle(e.target.value)}
                />
                }
                {isRegister &&
                <TextField 
                margin='normal'
                variant='standard'
                id='datehired'
                label='Date Hired'
                type='date'
                fullWidth
                inputRef={datehiredRef}
                value={datehired}
                onChange={(e) => setDatehired(e.target.value)}
                />
                }
            </DialogContent>
            <DialogActions sx={{px:'19px'}}>
                <Button type='submit' variant='contained' endIcon={<Send />}>
                    Submit
                </Button>
            </DialogActions>
        </form>
        <DialogActions sx={{justifyContent:'left', p:'5px 24x'}}>
            {isRegister?'Do you have an account? Sign in now ' : "Don't you have an account? Create one now "}
            <Button onClick={()=> setIsRegister(!isRegister)}> 
                {isRegister ? 'Login' : 'Register'}
            </Button>
        </DialogActions>
        <DialogActions sx={{justifyContent:'center', py:'24px'}}>
            <GoogleOneTapLogin />
        </DialogActions>
    </Dialog>
  )
}

export default Login;