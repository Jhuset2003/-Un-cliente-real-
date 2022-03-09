import "../SectionHome/SectionHome.css"


import demo from "../../Source/Img/pexels-arthur-brognoli-3343621.jpg"
function SectionHome(){
    return(
        <section className="section-home">
            <div className="titleC">
                <h1>Bienvenido a <strong>Delicias Mary</strong></h1>
            </div>
            <div className="img-container">
                <div className="img1"><img src={demo} alt="" /></div>
                <div className="img2"><img src={demo} alt="" /></div>
                <div className="img3">
                    <img src={demo} alt="" />
                    <span><h2>Disfrutalo</h2></span>
                </div>
            </div>
        </section>
    )
}

export default SectionHome;