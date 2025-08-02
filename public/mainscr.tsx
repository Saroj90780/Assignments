import {Box} from '@mui/material'
import Homesrc from './Homesrc'
import './mainsrc.css'

const Mainscreen=()=>{
    return(
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"start",
            height:"100vh",
            width:"100vw"
        }}>
            <Homesrc/>
            
        </Box>
    )
}
export default Mainscreen