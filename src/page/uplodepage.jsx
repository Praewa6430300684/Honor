import * as React from "react";
import { Link } from "react-router-dom";
import "./uplode.css"; // Import the CSS file

const Uplode = () => {
  return (
    <>
    <div className="row">
      <div className="column">
        <div className="container2">อัปโหลดไฟล์</div>
      </div>
      <div className="col-md-6">
        
        <div className="container">
        <div className="header">อัปโหลดไฟล์ภาพหรือเอกสาร</div>
        <div className="uploadSection">
          <div className="uploadHeader">
            <div className="documentType">
              <div className="typeLabel">เลือกประเภทเอกสาร</div>
              <div className="typePlaceholder">กรุณาเลือกประเภทเอกสาร</div>
            </div>
            <div className="uploadInfo">
              <div className="fileInfo">0 file (0 B / 10.0 Mb)</div>
              <div className="confirmButtonContainer">
                <button className="button">ยืนยัน</button>
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="dropZone">
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
      
      <div className="container">
        <div className="header1">รายชื่อเอกสาร</div>
        <div className="documentSearch">
          <div className="searchLabel">ค้นหาชื่อไฟล์</div>
          <div className="searchPlaceholder">
            <input type="text" placeholder="กรอกที่นี่" className="input1"></input>
          </div>
        </div>
        <table border={1}>
          <thead>
            <tr>
              <th>ชื่อไฟล์</th>
              <th>จำนวนหน้า</th>
              <th>ประเภทเอกสาร</th>
              <th>วันที่อัปโหลด</th>
              <th>สถานะ</th>
              <th>แก้ไข</th>
              <th>:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ชื่อไฟล์</td>
              <td>1</td>
              <td>เอกสารทั่วไป</td>
              <td>May 13, 2024</td>
              <td>สำเร็จ</td>
              <td>
               <Link to='/edit'>แก้ไข</Link> 
              </td>
              <td>:</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      
      
    </div>
      
    </>
  );
}

export default Uplode;
