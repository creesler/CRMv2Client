import { Close, Send } from '@mui/icons-material'
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material'
import React, { useRef } from 'react'
import { useValue } from '../../context/ContextProvider'

const Profilee = () => {
    const {state:{profilee, currentUser}, dispatch} = useValue()
    const nameRef = useRef()

    const handleClose = () =>{
        dispatch({type:'UPDATE_PROFILEE', payload:{...profilee, open:false}})
    }
     
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    const handleChange = (e)=>{
        const file = e.target.files[0]
        if(file){
            const photoURL = URL.createObjectURL(file)
            dispatch({type:'UPDATE_PROFILEE', payload:{...profilee, file, photoURL}})
        }
    }
  return (
    <Dialog
    open={profilee.open}
    onClose={handleClose}
    >
        <DialogTitle>
            Add new Project
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
                
                



                <TextField 
                autoFocus
                margin='normal'
                variant='standard'
                id='name'
                label='Project Name'
                type='text'
                fullWidth
                inputRef={nameRef}
                inputProps={{minLength:2}}
                required
                defaultValue={currentUser?.name}
                />
                <label htmlFor='profilePhoto'>
                    <input 
                    accept='image/*'
                    id='profilePhoto'
                    type='file'
                    style={{display:'none'}}
                    onChange={handleChange}
                    />
                    <Avatar
                    src={profilee.photoURL}
                    sx={{width:75, height:75, cursor:'pointer'}}
                    />
                </label>
                
            </DialogContent>
            <DialogActions sx={{px:'19px'}}>
                <Button type='submit' variant='contained' endIcon={<Send />}>
                    Submit
                </Button>
            </DialogActions>
        </form>
        
    </Dialog>
  )
}

export default Profilee