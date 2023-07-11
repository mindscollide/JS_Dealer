import React, { Fragment, useState, useEffect } from 'react'
import { mqttConnection } from './../../../assets/common/functions/mqttConnection'
import Helper from './../../../assets/common/functions/history_logout'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from '../../../components/layout/Header/Header'
import Sidebar from '../../../components/layout/Sidebar/Sidebar'

const Dashboard = () => {
  const [client, setClient] = useState(null)

  let RandomNumber = Math.random()

  let newClient = Helper.socket

  const [notification, setNotification] = useState({
    notificationShow: false,
    message: '',
  })

  const [notificationID, setNotificationID] = useState(0)

  const closeNotification = () => {
    setNotification({
      notificationShow: false,
      message: '',
    })
  }

  const onMessageArrived = (msg) => {
    var min = 10000
    var max = 90000
    var id = min + Math.random() * (max - min)
    let data = JSON.parse(msg.payloadString)
    // if (data.action.toLowerCase() === 'Meeting'.toLowerCase()) {
    //   if (
    //     data.payload.message.toLowerCase() ===
    //     'NEW_MEETING_CREATION'.toLowerCase()
    //   ) {
    //     setNotification({
    //       ...notification,
    //       notificationShow: true,
    //       message: `You have been added as a ${data.payload.meetingTitle} Role in a new Meeting. Refer to Meeting List for details`,
    //     })
    //     dispatch(allMeetingsSocket(data.payload.meeting))
    //     setNotificationID(id)
    //   }
    // }
  }

  const onConnectionLost = () => {
    setTimeout(mqttConnection, 3000)
  }

  useEffect(() => {
    if (Helper.socket === null) {
      let userID = localStorage.getItem('userID')
      mqttConnection(userID)
    }
    if (newClient != null) {
      console.log('onMessageArrived 1')

      newClient.onConnectionLost = onConnectionLost
      newClient.onMessageArrived = onMessageArrived
    }
  }, [newClient])

  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Outlet />
    </Fragment>
  )
}

export default Dashboard
