import React from 'react'

const Farmer = (props) => {
    const { isActive, name, id } = props

    return (
        <div className="dashboard-item col-lg-3">
            <div className="box">
                <h4 className="dashboard-item-header">
                    {name} ({id})
                </h4>

                <div className="dashboard-item-footer">
                    {isActive ?
                        <button className="btn btn-update">Deactivate</button>
                        :
                        <button className="btn btn-delete">Activate</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Farmer