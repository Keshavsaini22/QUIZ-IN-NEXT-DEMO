import React from 'react'

async function Dashboard() {
    function delay(milliseconds: number) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    const dd = await delay(2000);
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard