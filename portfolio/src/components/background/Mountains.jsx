import "./Mountains.scss"
import Hej from "./Hej";


export default function Mountains(){
    return(
        <>
        <div id="home" className="background">
            <Hej />
            <div className="mountain-container">
                <div className="mountain1"></div>
                <div className="mountain2"></div>
                    <div className="mountain3"></div>
                    <div className="peak"></div>
            </div>
        </div>
        </>
    );
}