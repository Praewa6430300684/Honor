import * as React from "react";

function Edit() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc97fbb1ff13357b60840cd40d9016ab815517897f5643c8272f355c15428aee?"
              className="img"
            />
            <div className="div-4">เอกสารทั่วไป</div>
            <div className="div-5">
              <div className="div-6">Page 1 / 1</div>
              <div className="div-7">l</div>
            </div>
            <div className="div-8">ภาษาไทย</div>
          </div>
          <div className="div-9" />
        </div>
        <div className="div-10">
          <div className="div-11">
            <div className="column">
              <div className="div-12" />
            </div>
            <div className="column-2">
              <div className="div-13">
                <div className="div-14">ทั่วไป</div>
                <div className="div-15" />
              </div>
            </div>
          </div>
        </div>
        <div className="div-16">ยืนยัน</div>
      </div>
      <style jsx>{`
        .div {
          border-radius: 24px;
          box-shadow: -10px 4px 15px 0px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: end;
          flex-grow: 1;
          flex-basis: 0;
          
          padding: 12px 0 31px 31px;
          width: 1280px;
        }
        @media (max-width: 1440px) {
          .div {
            max-width: 100%;
          }
        }
        .div-2 {
          display: flex;
          width: 702px;
          max-width: 100%;
          flex-direction: column;
          font-size: 24px;
          color: #c6c6c6;
          font-weight: 400;
          text-align: center;
        }
        .div-3 {
          display: flex;
          width: 100%;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 32px;
          align-self: start;
          margin-top: 14px;
        }
        .div-4 {
          border-radius: 16px;
          border-color: rgba(198, 198, 198, 1);
          border-style: solid;
          border-width: 2px;
          background-color: rgba(217, 217, 217, 0);
          white-space: nowrap;
          padding: 11px 23px 18px;
          font: 20px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-4 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-5 {
          display: flex;
          gap: 20px;
          margin: auto 0;
        }
        .div-6 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-7 {
          font-family: Poppins, sans-serif;
          margin: auto 0;
        }
        .div-8 {
          color: #19a5ca;
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-9 {
          border-color: rgba(198, 198, 198, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #c6c6c6;
          align-self: end;
          margin-top: 14px;
          width: 630px;
          max-width: 100%;
          height: 1px;
        }
        .div-10 {
          align-self: stretch;
          margin-top: 20px;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
            margin-right: 3px;
          }
        }
        .div-11 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-11 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-12 {
          border-radius: 16px;
          background-color: #d9d9d9;
          width: 540px;
          max-width: 100%;
          height: 820px;
          margin: 0 auto;
        }
        @media (max-width: 991px) {
          .div-12 {
            margin-top: 40px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-13 {
          border-radius: 16px;
          background-color: #d9d9d9;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 14px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
          width: 100%;
          padding: 11px;
        }
        @media (max-width: 991px) {
          .div-13 {
            max-width: 100%;
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-14 {
          font-family: Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
          }
        }
        .div-15 {
          border-radius: 16px;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          margin-top: 10px;
          height: 775px;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
          }
        }
        .div-16 {
          border-radius: 16px;
          background-color: #19a5ca;
          width: 140px;
          max-width: 100%;
          align-items: start;
          color: #fff;
          white-space: nowrap;
          text-align: center;
          justify-content: center;
          margin: 30px 48px 0 0;
          padding: 16px 60px;
          font: 400 20px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-16 {
            margin-right: 10px;
            white-space: initial;
            padding: 0 20px 0 26px;
          }
        }
      `}</style>
    </>
  );
}


export default Edit