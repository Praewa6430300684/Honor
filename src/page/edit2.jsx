import { FitScreenOutlined, ZoomInOutlined, ZoomOutOutlined } from '@mui/icons-material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Link } from "react-router-dom";
import "./edit.css";

const Edit = () => {
    return (
        <>
            <div className="main-container">
                <div className="row1">
                    <div className="backbutton">
                        <button >
                            <ArrowBackRoundedIcon/>
                            <Link to='/uplode'>BACK</Link>
                        </button>
                    </div>

                    <div className="container3">
                        <div className="text85">
                            <header className="translation">
                                <ZoomInOutlined/>
                                
                                &nbsp;&nbsp;
                                <ZoomOutOutlined/>
                                
                                &nbsp;&nbsp;
                                <FitScreenOutlined/>
                            </header>
                        </div>

                        <div className="placeholder">

                        </div>
                    </div>


                    <div className="container22">
                        <div className="text86">
                            <header>
                                <span>เอกสารทั่วไป</span>&nbsp;
                                <span>Page 1/1</span>&nbsp;
                                <span>|</span>&nbsp;
                                <span className="translation">
                                    <LanguageOutlinedIcon/> 
                                    <span>ภาษาไทย</span>
                                </span>

                            </header>
                        </div>

                        <div className="column2">
                            <div className="divider"></div>
                            <div className="placeholder">
                            &nbsp;&nbsp;
                            ทั่วไป
                                <div className="details-placeholder"></div>
                                
                            </div>
                            <br/>
                        
                                <button className="confirm-button">ยืนยัน</button>
                            
                            
                        </div>

                    </div>
                </div>
                <div>
                </div>


            </div>

        </>
    )

}
export default Edit