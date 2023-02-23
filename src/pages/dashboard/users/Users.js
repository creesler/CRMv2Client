import { Avatar, Box, MenuItem, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { DataGrid, gridClasses, useFirstRender } from '@mui/x-data-grid'
import { useValue } from '../../../context/ContextProvider'
import { getUsers } from '../../../actions/user'
import moment from 'moment'
import { grey } from '@mui/material/colors'
import UsersActions from './UsersActions'



const Users = ({setSelectedLink, link}) => {
  const {state:{users, currentUser}, dispatch} = useValue()


  const [pageSize, setPageSize] = useState(5)
  const [rowId, setRowId] = useState(null)
  useEffect(()=>{
    setSelectedLink(link)
    if(users.length === 0) getUsers(dispatch, currentUser) 
}, [])


const columns = useMemo(()=>[
  {
    field:'photoURL', 
    headerName:'Avatar', 
    width:60,
    renderCell: (params) => <Avatar src={params.row.photoURL} />,
    sortable: false,
    filterable: false,  
  },
  {field:'name', headerName:'Name', width:170},
  {field:'email', headerName:'Email', width:200},
  {
    field:'role', 
    headerName:'Role', 
    width:100, 
    type:'singleSelect', 
    valueOptions:['basic', 'editor', 'admin'], 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'active', 
    headerName:'Active', 
    width:100,
    type:'boolean',  
    editable:currentUser?.role === 'admin',
  },
  {
    field:'createdAt', 
    headerName:'Created At', 
    width:200,
    renderCell: params=>moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')
  },
  {
    field:'link', 
    headerName:'Link', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'companyname', 
    headerName:'Company Name', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'address', 
    headerName:'Address', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'phone', 
    headerName:'Phone', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'contractstarted', 
    headerName:'Contract Started', 
    type: 'text',
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'specialinstruction', 
    headerName:'Special Instructions', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'colorscheme', 
    headerName:'Color Scheme', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'tagline', 
    headerName:'Tagline', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'missionstatement', 
    headerName:'Mission Statement', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'paragraphbusiness', 
    headerName:'1 to 2 Paragraphs telling us about your Business ', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'paragraphyourself', 
    headerName:'1 to 2 Paragraphs telling us about your Yourself', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'areas', 
    headerName:'Areas', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'siteshowcase', 
    headerName:'Showcase', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'linkfacebook', 
    headerName:'Facebook', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'linkyoutube', 
    headerName:'Youtube', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'linktwitter', 
    headerName:'Twitter', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'linkinstagram', 
    headerName:'Instagram', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'linkpinterest', 
    headerName:'Pinterest', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'linktriller', 
    headerName:'Triller', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'linksnapchat', 
    headerName:'Snapchat', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'linklinkedin', 
    headerName:'LinkedIn', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'linktiktok', 
    headerName:'Tiktok', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'department', 
    headerName:'Department', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'jobtitle', 
    headerName:'Job Title / Position', 
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {
    field:'datehired', 
    headerName:'Date Hired', 
    type: 'date',
    width:400, 
    editable: currentUser?.role === 'admin',
  },
  {field:'_id', headerName:'Id', width:220},
  {
    field:'actions', 
    headerName:'Actions', 
    type:'actions', 
    renderCell:params=> (
      <UsersActions {...{params, rowId, setRowId}}/>
    ),
  },
], [rowId])
  return (
    
    <Box
    sx={{
      height:400,
      width:'100%'
    }}
    >
      <Typography
      variant='h3'
      component='h3'
      sx={{textAlign:'center', mt:3, mb:3}}
      >
        Manage Users
        
      </Typography>
      
      <DataGrid 
      columns={columns}
      rows={users}
      getRowId={row=>row._id}
      rowsPerPageOptions={[5,10,20]}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize)=>setPageSize(newPageSize)}
      getRowSpacing={params=>({
        top:params.isFirstVisible ? 0 : 5,
        bottom: params.isLastVisible ? 0 : 5
      })}
      sx={{
        [`& .${gridClasses.row}`]:{
          bgcolor:theme=>theme.palette.mode === 'light' ? grey[200] : grey[900],
        }
      }}
      onCellEditCommit={params=>setRowId(params.id)}
      />

    
    
    </Box>
  )
}

export default Users