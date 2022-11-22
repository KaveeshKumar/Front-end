import React, { useState } from 'react'
import CropService from '../services/Crop';

const Crop = (props) => {
    const { name, price, quantity, id, type, refresh, setIsUpdating, setCropName, setCropPrice, setCropQuantity, setShowModal, setCropId, handleBuy } = props;
    const [selectedQuantity, setSelectedQuantity] = useState(0);

    const deleteCrop = () => {
        CropService.deleteCrop(id)
            .then(response => {
                refresh();
            })
    }

    const editCrop = () => {
        console.log("......");
        setShowModal(true);
        setIsUpdating(true);
        setCropName(name);
        setCropPrice(price);
        setCropQuantity(quantity);
        setCropId(id);
    }

    return (
        <div className="dashboard-item col-lg-3">
            <div className="box">
                <h4 className="dashboard-item-header">
                    {name}
                </h4>
                <div className="dashboard-item-body">
                    <div className="price">Price: ₹{price}/kg</div>
                    <div className="quantity">Total Quantity: {quantity}kg</div>
                </div>
                <div className="dashboard-item-footer">
                    {type === 'farmer' ?
                        <>
                            <button className="btn btn-update" onClick={editCrop}>Update</button>
                            <button className="btn btn-delete" onClick={deleteCrop}>Delete</button>
                        </>
                        :
                        type === 'dealer' &&
                        <>
                            <button className="btn btn-update" onClick={() => setSelectedQuantity(selectedQuantity-1)}>-</button>
                            <button className="btn">{selectedQuantity}</button>
                            <button className="btn btn-update" onClick={() => setSelectedQuantity(selectedQuantity+1)}>+</button>
                            <button className="btn btn-delete" onClick={() => handleBuy(selectedQuantity, price)} >Buy</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Crop