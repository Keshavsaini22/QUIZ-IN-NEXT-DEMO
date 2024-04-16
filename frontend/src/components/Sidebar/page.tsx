'use client'
import React from 'react'
import Stack from '@mui/material/Stack';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TypographyText from '../TypographyText/page';
import { logoutUser } from '@/features/Auth/auth.action';
import { useAppDispatch } from '@/store/hooks';

function Sidebar() {
    const dispatch = useAppDispatch();
    return (
        <Stack width={'100%'} sx={{ borderRight: ' 2px solid rgb(236, 237, 239)' }} gap={6}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={1} mt={6}>
                <AcUnitIcon sx={{ width: '31px', height: '31px' }} />
                <TypographyText text="Quiz Adda" fontSize="25px" fontWeight="600" />
            </Stack>
            <Stack>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton sx={{ color: 'black' }}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>



                    <ListItemButton sx={{ color: 'black' }}>
                        <ListItemIcon>
                            <DashboardOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>

                    <ListItemButton onClick={() => {
                        console.log("handlelogout1")
                        dispatch(logoutUser())
                    }}>
                        <ListItemIcon>
                            <LogoutOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>

                </List>
            </Stack>
        </Stack>
    )
}

export default Sidebar;