import "./Mountains.scss"
import Hej from "./Hej";


export default function Mountains(){
    return(
        <>
        <div className="background">
            <Hej />
            <div className="triangle-container">
                <div className="triangle1"></div>
                <div className="triangle2"></div>
                <div className="triangle3"></div>
            </div>
        </div>
        </>
    );
}