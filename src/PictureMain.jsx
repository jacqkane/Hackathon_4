import { Link } from "react-router-dom";
import './PictureMain.scss'
import Context from "./Context";
import { useContext } from "react";

export default function PictureMain(props) {

    const { state: { barHeight, barWidth }, dispatch } = useContext(Context);

    console.log(barWidth)

    return (

        <div className="picturemain" style={{'--barWidthstyle': barWidth +'px'}}>
            <img  src={props.imgUrl} />
            <div>
                <p>First Name: <b>{props.authorFirstName}</b></p>
                <p>Last Name: <b>{props.authorLastName}</b></p>
            </div>
            <Link className="picturemain-link" to={'/detail/' + props.username}>See detail{'>>'}</Link>
        </div>
    )
}