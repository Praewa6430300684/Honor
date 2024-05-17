import { Link } from "react-router-dom";
import "./edit.css";

const Edit = () => {
    return (
        <>
            <div className="main-container">
                <div className="row1">
                    <div className="backbutton">
                        <button>
                            <Link to='/uplode'>BACK</Link>
                        </button>
                    </div>

                    <div className="container3">
                        <div className="text85">
                            <header className="translation">
                                <span >Zoom in</span>
                                &nbsp;&nbsp;
                                <span>Zoom out</span>
                                &nbsp;&nbsp;
                                <span>fit</span>
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
                                <span className="translation">icon world ภาษาไทย</span>

                            </header>
                        </div>

                        <div className="column2">
                            <div className="divider"></div>
                            <div className="placeholder">
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