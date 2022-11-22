import React, { useEffect } from 'react'
import "../assets/css/Dashboard.css"
import Crop from '../components/Crop'
import CropService from '../services/Crop'

const Farmer = (props) => {
    const { currentUser } = props;

    const [showModal, setShowModal] = React.useState(false)
    const [cropId, setCropId] = React.useState("")
    const [cropName, setCropName] = React.useState("")
    const [cropPrice, setCropPrice] = React.useState("")
    const [cropQuantity, setCropQuantity] = React.useState("")
    const [crops, setCrops] = React.useState([])
    const [isUpdating, setIsUpdating] = React.useState(false)

    const handleCropAdd = (e) => {
        e.preventDefault()
        const newCrop = {
            farmerid: currentUser.id,
            name: cropName,
            cost: cropPrice,
            quantity: cropQuantity
        }
        if (isUpdating) {
            CropService.updateCrop({...newCrop, id: cropId})
                .then(data => {
                    setShowModal(false)
                    setCropName("")
                    setCropPrice("")
                    setCropQuantity("")

                    getCropsOfFarmer();
                })
        }
        else {
            CropService.addCrops(newCrop)
                .then(data => {
                    setShowModal(false)
                    setCropName("")
                    setCropPrice("")
                    setCropQuantity("")

                    getCropsOfFarmer();
                })
        }
    }

    const getCropsOfFarmer = () => {
        CropService.getFarmerCrops(currentUser.id)
            .then(res => {
                setCrops(res.data)
            })
    }

    useEffect(() => {
        getCropsOfFarmer();
    }, [currentUser])

    return (
        <div className='dashboard'>
            {
                showModal &&
                <div className="modal-bg">
                    <div className="modal-box">
                        <div className="modal-header">
                            <h3>{ isUpdating ? "Edit" : "Add" } Crop</h3>
                            <span className="close-modal" onClick={() => setShowModal(false)}>&times;</span>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="crop-name">Crop Name</label>
                                    <input type="text" className="form-control" id="crop-name" placeholder="Enter Crop Name" onChange={(e) => setCropName(e.target.value)} value={cropName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="crop-quantity">Quantity</label>
                                    <input type="text" className="form-control" id="crop-quantity" placeholder="Enter Quantity" onChange={(e) => setCropQuantity(e.target.value)} value={cropQuantity} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="crop-price">Price</label>
                                    <input type="text" className="form-control" id="crop-price" placeholder="Enter Price" onChange={(e) => setCropPrice(e.target.value)} value={cropPrice} />
                                </div>
                                <button type="submit" className="btn submit-btn" onClick={handleCropAdd}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
            <h1 className="title">Your listed Crops
                <div className="nav-bar-item signup-btn" onClick={() => setShowModal(true)}>
                    <span>Add Crops</span>
                </div>
            </h1>
            <div className="dashboard-container row">
                {crops.map(crop => <Crop key={crop.id} name={crop.name} price={crop.cost} quantity={crop.quantity} id={crop.id} type="farmer" refresh={getCropsOfFarmer} setIsUpdating={setIsUpdating} setCropName={setCropName} setCropPrice={setCropPrice} setCropQuantity={setCropQuantity} setShowModal={setShowModal} setCropId={setCropId} />)}
            </div>
        </div>
    )
}

export default Farmer