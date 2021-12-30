import Footer from "./Footer.js";
export default function Productos() {
  return (
    <div className="divTop">
      <h2 className="title2">PRODUCTOS</h2>
      <hr className="linet" />
      <div className="divFlex">
        <div className="cardProyect">
          <img className="imgCardProduct" src="images/maiz.jpg" alt="" />
          <div className="boxCardProd">
            <h4 className="titCardBlueProduct">PRODUCTO 1</h4>
            <p className="parrCard">
              Lorem ipsum dolor sit amet consectetur adipiscing elit nullam,
              mauris conubia odio sed montes mollis vehicula, ac
            </p>
            <button type="button" name="button" className="btnS">
              <p className="pBtnCardProduct">VER MÁS</p>
            </button>
          </div>
        </div>
        <div className="cardProyect">
          <img className="imgCardProduct" src="images/maiz.jpg" alt="" />
          <div className="boxCardProd">
            <h4 className="titCardBlueProduct">PRODUCTO 2</h4>
            <p className="parrCard">
              Lorem ipsum dolor sit amet consectetur adipiscing elit nullam,
              mauris conubia odio sed montes mollis vehicula, ac
            </p>
            <button type="button" name="button" className="btnS">
              <p className="pBtnCardProduct">VER MÁS</p>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
