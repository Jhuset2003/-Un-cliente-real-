import demo from "../../Source/Img/pexels-arthur-brognoli-3343621.jpg"
import "./SectionMap.css"
function SectionMap() {
    return (
        <section className="section-map">
            <div className="TitleM"><h1>Nos Ubicamos Aqui</h1></div>
            <div className="map-container">
                <img src={demo} alt="" />
                <span>
                    <p>Domicilios solo a las cercanias</p>
                </span>
            </div>
        </section>
    )
}
export default SectionMap;