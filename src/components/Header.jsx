import hero2 from "../images/image_hero-removebg-preview.png";
import hero_primary from "../images/primary_hero.png";
import hero_alt from "../images/alt_hero.png"

function Header() {


    return (
        <div id="header" className="mx-auto row">
            {/* <div className="row justify-content-center" id="headshot" style={{backgroundImage: `url(${hero_alt})`}}>
                <img id="hero_img" className="bordered img-fluid col-9" src={hero_primary} alt="Image of Jonathan Pruitt"/>    

            </div> */}
            <div className="row justify-content-center bordered img-fluid w-fit" id="headshot" style={{backgroundImage: `url(${hero_alt})`}}>
                <img id="hero_img" className="col-12" src={hero_primary} alt="Image of Jonathan Pruitt"/>    

            </div>
            <h1 className="col-12 text-center">Jonathan Pruitt</h1>
            <h2 className="col-6 text-center">Junior Developer</h2>
        </div>
    )
}//end method

export default Header;