import React from 'react';
import images from './images/busterminal.jpg';
import img from './img/personel.jpg';
import img1 from './img1/seal.png';
import img2 from './img2/logoguru.png';
import './About.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import FlagSharpIcon from '@mui/icons-material/FlagSharp';
import BuildSharpIcon from '@mui/icons-material/BuildSharp';
import DirectionsBusFilledSharpIcon from '@mui/icons-material/DirectionsBusFilledSharp';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import Stack from '@mui/system/Stack';
import { styled } from '@mui/system';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';



function About() {

    
    const Item = styled('div')(({ theme }) => ({
        
        padding: theme.spacing(0),
        textAlign: 'left',
        borderRadius: 4,
        fontWeight: '500',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        fontSize: 20,
        }));

    return (
    <div className='about-section-container'>   
        <div className='about-section-text-container'>
            <p className="primary-subheading" >PARAÑAQUE INTEGRATED TERMINAL EXCHANGE</p>
        </div>
        <div className='about-images'>
            <img src={images} alt=''/>
        </div>
        <div className='About-text'>
            <p className='p1' > ABOUT PITX</p>
            <Typography fontFamily="Poppins" fontWeight="bold">
            <p className='p2' >PITX is the first-ever landport in the country</p>
            </Typography>
            <Typography fontFamily="Poppins">  Parañaque Integrated Terminal Exchange (PITX) is a modern transport hub that connects commuters from the South to the different cities of Metro Manila. As the first integrated and multi-modal terminal in the country, it also provides interconnectivity between different transport modes and services to ensure efficient and seamless travel for the riding public.</Typography>
        </div> 

        {/* Timeline */}
        <div className='timeline'>
        <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            >
            <h2>2015</h2>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
                <DescriptionSharpIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '50px', px: 2 }}>
            <Typography variant="h6" component="span">

            </Typography>
            <Typography className='typo' fontFamily="Poppins">PPP awarded Southwest Terminal of the integrated Transport System (ITS) project to MWM Terminals, Inc. with the 35-year contract of Build-Operate-Transfer (BOT)</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            <h2>2018</h2>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
                <FlagSharpIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '50px', px: 2 }}>
            <Typography className='typo1' fontFamily="Poppins">On December 2018, PITX finally opened its terminals to the riding public, signaling the start of its operations as the country's first-ever landport</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            <h2>2019</h2>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
                <BuildSharpIcon />
            </TimelineDot>
            <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '50px', px: 2 }}>
            <Typography className='typo2' fontFamily="Poppins">On November 2019, PITX was formally inaugurated by President Rodrigo Duterte, along with other key officials from the government and the private sector.</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            <h2>2019</h2>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
                <DirectionsBusFilledSharpIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '50px', px: 2 }}>
            <Typography className='typo3' fontFamily="Poppins">On August 2019, PITX opened the PITX-Baguio route which led the way for the expansion of its provincial trips to more destinations in Luzon.</Typography>
            </TimelineContent>
        </TimelineItem>
        </Timeline>
        

            <div className='personel'>
                <img src={img} alt=''/>
            </div>

        <Timeline>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
        </TimelineOppositeContent>
        <TimelineDot color="secondary"><VisibilityIcon />
        </TimelineDot>
        <TimelineContent sx={{ py: '0px', px: 2 }}>
        </TimelineContent>
        </TimelineItem>
        <Typography variant="h4" fontFamily="Poppins">
                OUR VISION
        </Typography>
        <br></br>
        <Typography variant="h5" fontFamily="Poppins">First-world mobility for passengers through PITX</Typography>
        </Timeline>

        <Timeline>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="secondary"><SettingsInputAntennaIcon />
        </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '100px', px: 2 }}>
        </TimelineContent>
        </TimelineItem>
        <Typography variant="h4" fontFamily="Poppins">
                OUR MISSION
        </Typography>
        <Typography variant="h5" fontFamily="Poppins">To improve the quality of commute by providing comfort, convenience, and reliability for passengers.</Typography>   
        </Timeline>

        </div>

        <Timeline className='timeline4'>
        <Stack
            direction={{ xs: 'row', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 2 }}
        >
            <TimelineContent sx={{ py: '50px', px: 1 }}>
            </TimelineContent>
            <FiberManualRecordRoundedIcon className='fiber'/>
            <Item>Warm & Friendly<br/> Customer Service </Item>
            <FiberManualRecordRoundedIcon className='fiber'/>
            <Item>Strong Engagement with Stakeholders (Regulators, <br/>Transport Options, Drivers, and Conductors)</Item>
            <FiberManualRecordRoundedIcon className='fiber'/>
            <Item>Modern Landport Features, <br/>Facilities, And Amenities</Item>
            <FiberManualRecordRoundedIcon />
            <Item>Value-driven Learning and Development<br/> for PITX Employees and Workers</Item>
        </Stack>
        </Timeline>
        
        <Timeline >
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary" fontFamily='Poppins'>VALUE
        </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '100px', px: 2 }}>
        </TimelineContent>
        </TimelineItem>
        </Timeline>
        <Timeline className='timeline4' >
        <Stack
            direction={{ xs: 'row', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 2 }}
        >   
        <FiberManualRecordRoundedIcon />
            <Item>Passenger-centricity</Item>
            <FiberManualRecordRoundedIcon />
            <Item>Ingenuity in Planning and Execution</Item>
            <FiberManualRecordRoundedIcon />
            <Item>Inclusive Community Building</Item>
            <FiberManualRecordRoundedIcon />
            <Item>Strong Collaborative Spirit</Item>
            <FiberManualRecordRoundedIcon />
            <Item>Malasakit Attitude</Item>
        </Stack>     
        </Timeline>

        <Timeline className='Recognitions'>
        <TimelineItem>
        <TimelineSeparator>
        <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '100px', px: 2 }}>
        </TimelineContent>
        </TimelineItem>
        <Typography variant="h4" fontFamily="Poppins" fontWeight="bold">
        Our Recognitions
        </Typography>
        <br></br>
        <Typography fontFamily="Poppins">See the awards we received from respected organizations around the world, recognizing PITX as a landmark project and a landport like no other.</Typography>   
        </Timeline>

        <div className='imgrecog'>
            <div>
                <img src={img1} alt='' className='image1'/>
                <p>PITX won the Golden Kubeta Award in 2019 for its clean and comfortable restrooms, and friendly wastewater management practices.</p>
            </div>
            <div>
            <img src={img2} alt='' className='image2'/>
            <p>PITX was recognized by PropertyGuru at the 2019 Philippine Property Awards for its development,design, and innovation as a public facility.</p>
            </div>
        </div>


    </div>
    
    );
    
}

export default About;
