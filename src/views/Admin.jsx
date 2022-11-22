import React from 'react'
import Farmer from "../components/Farmer"

const Admin = () => {
    return (
        <div className='dashboard'>
            <h1 className="title">Farmers Status </h1>
            <div className="dashboard-container row">
                <Farmer name="Farmer 1" id="1" isActive={true} />
                <Farmer name="Farmer 2" id="2" isActive={false} />
                <Farmer name="Farmer 3" id="3" isActive={true} />
                <Farmer name="Farmer 4" id="4" isActive={true} />
                {/* <Farmer name="Farmer 5" id="5" isActive={true} />
                <Farmer name="Farmer 6" id="6" isActive={true} />
                <Farmer name="Farmer 7" id="7" isActive={true} />
                <Farmer name="Farmer 8" id="8" isActive={false} /> */}
            </div>
        </div>
    )
}

export default Admin