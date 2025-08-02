import { Box, Button, Typography } from '@mui/material'
import logo from '../src/assets/logo_practo (1).jpg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import './Homesrc.css'
import backimg from '../src/assets/home.svg'

const navitem = [
    "Find Doctors", "Video Consult", "Surgeries"
]
const options = ["For Corporates", "For Providers", "Sequrity & Help"]
const Homesrc = () => {
    return (
        <>
            <Box sx={{ width: "100vw", paddingTop: "10px" }}>
                <Box sx={{
                    display: "flex", justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Box sx={{
                        display: "flex",
                        gap: "20px",
                        width: "50%",
                        paddingLeft: "100px",
                        paddingRight: "200px",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Box>
                            <img src={logo} style={{ height: "50px", width: "160px" }} />
                        </Box>
                        <Box sx={{
                            display: "inherit",
                            gap: "15px",
                            fontFamily: 'Poppins3',
                            fontSize: "15px",
                            justifyContent: 'center',
                            alignItems: "center"
                        }}>
                            {navitem.map((item) => (
                                <Box sx={{

                                    '&:hover': {
                                        borderBottom: '6px solid rgba(57, 112, 224, 1)',
                                    },
                                }}>{item}</Box>

                            ))}
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        gap: "20px",
                        width: "50%",
                        paddingLeft: "70px",
                        paddingRight: "100px"
                    }}>
                        <Box sx={{ display: "flex", gap: "10px", fontFamily: 'Poppins2', fontSize: '13px', alignItems: "center" }}>
                            {options.map((item) => (
                                <Box sx={{ display: "flex", gap: "5px" }}>
                                    <Box>
                                        {item}
                                    </Box>
                                    <ExpandMoreIcon />
                                </Box>
                            ))}
                        </Box>
                        <Box>
                            <Button sx={{
                                fontSize: "11px", fontFamily: "Poppins2", border: "1px solid rgba(170, 170, 170, 1)", color: "rgba(170, 170, 170, 1)", borderRadius: "5px", height: "30px"
                            }}>Login/SingUp</Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "100%", height: "40px", backgroundColor: "rgba(236, 236, 236, 1)" }}></Box>
            </Box>
            <Box sx={{
                width: '100%',
                // backgroundColor: "rgba(6, 92, 177, 1)",
                height: "73vh",
                overflowX: "hidden",
                position: "relative",
                backgroundImage:`url(${backimg})`,
                backgroundSize: "cover",
                backgroundPosition: 'bottom',
                scrollBehavior: "smooth" // 👈 Smooth scroll enabled

            }}>
                <Box sx={{
                    height: '30%',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Typography sx={{ fontSize: '40px', fontFamily: "Poppins3", color: "white" }}>Your home for health</Typography>
                </Box>
                <Box sx={{
                    height: '70%',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'start',
                    alignItems: "center",
                    gap: '15px'

                }}>
                    <Typography sx={{ fontSize: '28px', fontFamily: "Poppins3", color: "white" }}> Find the book</Typography>
                    <Box sx={{
                        width: "60%",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", backgroundColor: "white", p: 1, borderRight: "1px solid gray" }}><LocationOnOutlinedIcon /><input type="text" className='inputs' placeholder='Banglore' /></Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", backgroundColor: "white", p: 1 }}><SearchIcon /><input type="text" className='inputs' placeholder='Search Doctors' /></Box>
                    </Box>
                    <Typography sx={{
                        fontSize: "16px", fontFamily: "Poppins2"
                    }}>Popular Search: Dermatologist Pediatrician Gynocologist Other</Typography>
                </Box>
            </Box>
            <Box sx={{
                height: "130px",
                backgroundColor: "rgba(0, 7, 77, 1)",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Box sx={{
                    display: "flex",
                }}>
                    <Box sx={{
                        borderRight: "1px solid rgba(166, 166, 166, 1)",
                        paddingLeft: "40px",
                        paddingRight: "40px"
                    }}>
                        <ForumOutlinedIcon sx={{ color: "rgba(166, 166, 166, 1)" }} />
                        <Typography sx={{ fontSize: "12px", color: "rgba(166, 166, 166, 1)", fontFamily: "Poppins2" }}>Consuit with a Doctor</Typography>
                    </Box>
                    <Box sx={{
                        borderRight: "1px solid rgba(166, 166, 166, 1)",
                        paddingLeft: "40px",
                        paddingRight: "40px"
                    }}>
                        <ShoppingCartOutlinedIcon sx={{ color: "rgba(166, 166, 166, 1)" }} />
                        <Typography sx={{ fontSize: "12px", color: "rgba(166, 166, 166, 1)", fontFamily: "Poppins2" }}>Consuit with a Doctor</Typography>
                    </Box>
                    <Box sx={{
                        borderRight: "1px solid rgba(166, 166, 166, 1)",
                        paddingLeft: "40px",
                        paddingRight: "40px"
                    }}>
                        <MedicalServicesOutlinedIcon sx={{ color: "rgba(166, 166, 166, 1)" }} />
                        <Typography sx={{ fontSize: "12px", color: "rgba(166, 166, 166, 1)", fontFamily: "Poppins2" }}>Consuit with a Doctor</Typography>
                    </Box>
                    <Box sx={{
                        borderRight: "1px solid rgba(166, 166, 166, 1)",
                        paddingLeft: "40px",
                        paddingRight: "40px"
                    }}>
                        <ScienceOutlinedIcon sx={{ color: "rgba(166, 166, 166, 1)" }} />
                        <Typography sx={{ fontSize: "12px", color: "rgba(166, 166, 166, 1)", fontFamily: "Poppins2" }}>Consuit with a Doctor</Typography>
                    </Box>
                    <Box sx={{
                        borderRight: "1px solid rgba(166, 166, 166, 1)",
                        paddingLeft: "40px",
                        paddingRight: "40px"
                    }}>
                        <MenuBookOutlinedIcon sx={{ color: "rgba(166, 166, 166, 1)" }} />
                        <Typography sx={{ fontSize: "12px", color: "rgba(166, 166, 166, 1)", fontFamily: "Poppins2" }}>Consuit with a Doctor</Typography>
                    </Box>
                    <Box sx={{

                        paddingLeft: "40px",
                        paddingRight: "40px"
                    }}>
                        <WorkOutlineOutlinedIcon sx={{ color: "rgba(166, 166, 166, 1)" }} />
                        <Typography sx={{ fontSize: "12px", color: "rgba(166, 166, 166, 1)", fontFamily: "Poppins2" }}>Consuit with a Doctor</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Homesrc