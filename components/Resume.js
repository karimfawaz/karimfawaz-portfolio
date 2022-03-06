// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';



const Resume = () => {
    return (

        <Viewer
            fileUrl='/PDF/Karim-Fawaz-CV.pdf'
           
        />
    )
}

export default Resume