import { useSelector } from 'react-redux'
import './Dropdown.css'

const Dropdown = ({children}) =>{
    const {dropdown} = useSelector((state)=>state.dropdown)
    return(
        <div className={`dropdown ${dropdown ? "visibale":""}`} >
            {
                children
            }
        </div>

    )
}

export default Dropdown