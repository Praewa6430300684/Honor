import React from 'react';
import './uplode.css';

const Uplode = () => {

    const handleOnclick = (e) => {

    };
    return (
        <>
            <div className='button' onClick={handleOnclick}>
                DOCUMENT
            </div>
            <div className='container'>
                <div className='container2'>
                    <div className='text'>
                        อัปโหลดไฟล์ภาพหรือเอกสาร
                    </div>
                    <div className='text-2'>
                        เลือกประเภทเอกสาร
                    </div>
                    <span >
                        <button>ยืนยัน</button>
                    </span>
                    
                </div>
                
            </div>
        </>
    )

}

export default Uplode