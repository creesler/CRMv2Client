import { Avatar, Box, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { DataGrid, gridClasses } from '@mui/x-data-grid'
import { useValue } from '../../../context/ContextProvider'
import { getRooms } from '../../../actions/room'
import moment from 'moment'
import { grey } from '@mui/material/colors'
import RoomsActions from '../rooms/RoomsActions'
import isAdmin from '../utils/isAdmin'

const Rooms = ({setSelectedLink, link}) => {
  const {state:{rooms, currentUser, users}, dispatch} = useValue()

  const [pageSize, setPageSize] = useState(5)
  useEffect(()=>{
    setSelectedLink(link)
    if(rooms.length === 0) getRooms(dispatch) 
}, [])

  

const columns = useMemo(()=>[
  {
    field:'createdAt', 
    headerName:'Created At', 
    width:200,
    renderCell: params=>moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')
  },
  {
    field:'deadline', 
    headerName:'Deadline', 
    width:200,
    renderCell: params=>moment(params.row.deadline).format('YYYY-MM-DD HH:MM:SS')
  },
  {field:'status', headerName:'Status', width:170},
  {field:'task', headerName:'Task', width:170},
  {field:'description', headerName:'Description', width:200}, 
  
  // {field:'client', headerName:'Client', width:200}, 
  {field:'employee', headerName:'VA', width:200}, 
  
  // {
  //   field:'uName', 
  //   headerName:'Added by', 
  //   width:80,
  //   renderCell:params=>(
  //     <Tooltip title={params.row.uName}>
  //       <Avatar src={params.row.uPhoto} />
  //     </Tooltip>
  //   )
  // },
  
  
  {field:'_id', hide:true},
  // {
  //   field:'actions', 
  //   headerName:'Actions', 
  //   type:'actions', 
  //   width:150,
  //   renderCell:params=> (
  //     <RoomsActions {...{params}}/>
  //   ),
  // },
], [])
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
        Tasks
      </Typography>

      <DataGrid 
      columns={columns}
      rows={isAdmin(currentUser) ? rooms : rooms.filter(room=> room.client === currentUser.name)}
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
      />
    </Box>
  )
}

export default Rooms