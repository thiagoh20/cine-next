"use client"
import { React, Fragment, useState } from 'react'
import {
  AppBar,
  IconButton,
  Avatar,
  Popover,
  List,
  ListSubheader,
  ListItemButton
} from '@mui/material'
import OnlineIndicator from './OnlineIndicator'
import logo from '@/images/logo_eslogan.png'
import Image from 'next/image'

//import AuthModal from './AuthModal'
//import { useAuth } from '@/AuthContext'

export default function Header() {
  // const { isLoggedIn, account, logout } = useAuth()

  const [anchorEl, setAnchorEl] = useState(null)
  const [popover, setPopover] = useState(false)
  const [authModal, setAuthModal] = useState(false)
  const [register, setRegister] = useState(false)

  const openPopover = (e) => {
    setPopover(true)
    setAnchorEl(e.currentTarget)
  }

  const closePopover = () => {
    setPopover(false)
    setAnchorEl(null)
  }

  const clickLogin = () => {
    setRegister(false)
    setAuthModal(true)
    closePopover()
  }

  const clickRegister = () => {
    setRegister(true)
    setAuthModal(true)
    closePopover()
  }

  return (
    <AppBar className="header " position="fixed">
      <Image className=" w-[50%] sm:w-[30%] md:w-[30%] lg:w-[20%]" src={logo}
        alt={"Logo Nexus"}
        width={300}
        height={760} 
        unoptimized
        priority={true}
      />

      <IconButton onClick={openPopover}>
        <OnlineIndicator online={false}>
          <Avatar />
        </OnlineIndicator>
      </IconButton>

      <Popover
        anchorEl={anchorEl}
        open={popover}
        onClose={closePopover}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <List style={{ minWidth: '90px' }}>

          <ListSubheader >
            {/* Hello, {isLoggedIn ? account.username : 'Guest'} */}
            Hello,
          </ListSubheader>
{/* 
          {true
            ? (
              <Fragment>
                <ListSubheader >
                 Rol: {isLoggedIn ? account.role : ''} 
                </ListSubheader>
                 <ListItemButton onClick={logout}>Logout</ListItemButton> 
              </Fragment>

            )
            : (
              <Fragment>
                <ListItemButton onClick={clickLogin}>Login</ListItemButton>
                <ListItemButton onClick={clickRegister}>Reigster</ListItemButton>
              </Fragment>
            )}
             */}
        </List>
      </Popover>

      {/* <AuthModal
        open={authModal}
        close={() => setAuthModal(false)}
        isRegisterMode={register}
        toggleRegister={() => setRegister((prev) => !prev)}
      />*/}
    </AppBar>
  )
}
