import * as React from "react";

const Uplode = () => {
    return (
        <>
            <div className="div">
                <div className="div-2">อัปโหลดไฟล์ภาพหรือเอกสาร</div>
                <div className="div-3">
                    <div className="div-4">
                        <div className="div-5">
                            <div className="div-6">เลือกประเภทเอกสาร</div>
                            <div className="div-7">กรุณาเลือกประเภทเอกสาร</div>
                        </div>
                        <div className="div-8">
                            <div className="div-9">0 file (0 B / 10.0 Mb)</div>
                            <div className="div-10">ยืนยัน</div>
                        </div>
                    </div>
                    <div className="div-11" />
                    <div className="div-12">
                        วางหลายไฟล์พร้อมกันได้ที่นี่
                        <br />
                        (รองรับ .pdf,.................)
                        <br />
                        หรือคลิกเพื่อเลือกไฟล์
                        <br />
                        *จำกัดขนาดอัปโหลดไฟล์ที่ ...Mb
                    </div>
                </div>
            </div>
            <style jsx>{`
        .div {
          border-radius: 16px;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          display: flex;
          flex-direction: column;
          text-align: center;
          padding: 27px 20px;
        }
        @media (max-width: 991px) {
          .div {
            max-width: 100%;
          }
        }
        .div-2 {
          color: #19a5ca;
          align-self: start;
          margin-left: 22px;
          font: 600 32px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-2 {
            margin-left: 10px;
          }
        }
        .div-3 {
          border-radius: 16px;
          border-color: rgba(198, 198, 198, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          display: flex;
          margin-top: 39px;
          flex-direction: column;
          font-weight: 400;
          padding: 12px 0 76px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
          }
        }
        .div-4 {
          display: flex;
          gap: 20px;
          font-size: 20px;
          justify-content: space-between;
          margin: 0 22px;
          padding: 0 1px;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            margin-right: 10px;
            flex-wrap: wrap;
          }
        }
        .div-5 {
          display: flex;
          gap: 19px;
          white-space: nowrap;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-6 {
          color: #19a5ca;
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .div-7 {
          font-family: Poppins, sans-serif;
          border-radius: 8px;
          border-color: rgba(198, 198, 198, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          align-items: start;
          color: #c6c6c6;
          justify-content: center;
          flex-grow: 1;
          width: fit-content;
          padding: 9px 15px;
        }
        @media (max-width: 991px) {
          .div-7 {
            padding-right: 20px;
            white-space: initial;
          }
        }
        .div-8 {
          display: flex;
          gap: 16px;
        }
        .div-9 {
          color: #c6c6c6;
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .div-10 {
          font-family: Poppins, sans-serif;
          border-radius: 16px;
          background-color: #19a5ca;
          color: #fff;
          white-space: nowrap;
          justify-content: center;
          padding: 16px 23px;
        }
        @media (max-width: 991px) {
          .div-10 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-11 {
          border-color: rgba(198, 198, 198, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #c6c6c6;
          margin-top: 9px;
          height: 1px;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
          }
        }
        .div-12 {
          color: #b6b6b6;
          margin-top: 99px;
          font: 10px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-12 {
            margin-top: 40px;
          }
        }
      `}</style>
        </>
    );
}

export default Uplode


