import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Notification = ({ setOpen, open, message, severity }) => {
  const vertical = 'top'
  const horizontal = 'right'

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(!open)
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        key={vertical + horizontal}
        // message="Note archived"
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Notification
