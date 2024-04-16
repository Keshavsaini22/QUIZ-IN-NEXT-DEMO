import { Box, Stack } from "@mui/material";
import Sidebar from "@/components/Sidebar/page";
import Navbar from "@/components/Navbar/page";
import React from 'react'
import ProtectedRoute from "@/components/ProtectedRoute/page";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ProtectedRoute>
            <Box sx={{ display: 'grid', width: "100vw", height: "100vh", gridTemplateColumns: '20% 80%' }}>
                <Sidebar />
                <Stack width={'100%'} sx={{ backgroundColor: 'rgb(246, 248, 255)' }}>
                    <Navbar />
                    <Stack width={'100%'}>
                        <Stack gap={4} p={4}>
                            {children}
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </ProtectedRoute>
    );
}
