import { Close, Send } from '@mui/icons-material'
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material'
import React, { useRef } from 'react'
import { createProject } from '../../actions/project'
import { useValue } from '../../context/ContextProvider'
import AddRoom from '../addRoom/AddRoom'
import Fields from './Fields'

const AddProject = () => {
    const {
        state:{projectDetails:{title, description, client, employee, deadline, remarks}, profilee, currentUser}, dispatch
} = useValue()
    const nameRef = useRef()

    const handleClose = () =>{
        dispatch({type:'UPDATE_PROFILEE', payload:{...profilee, open:false}})
    }
     
    const handleSubmit = ()=>{
        //  const project = {
        //       title:projectDetails.title,
        //       description:projectDetails.description,
        //       client:projectDetails.client,
        //       employee:projectDetails.employee,
        //       deadline:projectDetails.deadline,
        //       remarks:projectDetails.remarks,
        //   }
        //   createProject(project, currentUser, dispatch)
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
    sx={{
        alignItems:'center',
        '& .MuiTextField-root': {width: '100%', maxWidth: 450, m:1},
    }}
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
        <AddRoom />
        
        
    </Dialog>
  )
}

export default AddProject