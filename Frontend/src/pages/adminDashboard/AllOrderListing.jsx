import { Outlet, useParams } from 'react-router-dom'
import OrderListing from '../../components/adminDashboard/OrderListing'

const AllOrderListing = () => {
    const { orderId } = useParams()
    return (
        <>
            <div className='w-full h-full'>
                {!orderId && <OrderListing />}
                <Outlet />
            </div>
        </>
    )
}

export default AllOrderListing