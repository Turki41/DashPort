import React from 'react'
import Sidebar from '../Sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex w-screen h-screen'>
            <div>
                <Sidebar />
            </div>

            <div className='flex flex-col w-full h-full'>
                <div className='max-sm:flex max-sm:items-center max-sm:justify-center p-10 sm:p-3'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout