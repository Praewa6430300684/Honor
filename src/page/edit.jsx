import * as React from "react";
import "./edit.css";

function Edit2() {
  return (
    <>
      <section className="container3">
        <div className="row1">
          <div className="column1">
            <div className="content">

              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc97fbb1ff13357b60840cd40d9016ab815517897f5643c8272f355c15428aee?apiKey=64a41043fded4a06b16a3297810379da&"
                className="document-image"
                alt="Document icon"
              />
              
                <div className="container2">

                  <h2 className="document-title">เอกสารทั่วไป</h2>
                  <div className="page-info">
                    <span className="page-count">Page 1 / 1</span>
                    <span className="page-separator">|</span>
                  </div>
                  <div className="translation">ภาษาไทย</div>
                </div>

              


            </div>
            <hr className="divider" />
          </div>

        </div>


        <div className="main-section">
          <div className="main-content">
            <section className="document-preview">
              <div className="placeholder"></div>
            </section>
            <section className="details-section">
              <div className="details-content">
                <h3 className="details-title">ทั่วไป</h3>
                <div className="details-placeholder"></div>
              </div>
            </section>
          </div>
        </div>

        <footer className="footer">
          <button className="confirm-button">ยืนยัน</button>
        </footer>


      </section>


    </>
  );
}

export default Edit2