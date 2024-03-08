import PictureMain from "./PictureMain"
import './PictureList.scss'
import { useContext, useState } from "react"
import Context from "./Context"

export default function PicturesList(props) {

    const [width, setWidth] = useState(100)

    const { state: { barHeight, barWidth }, dispatch } = useContext(Context);

    console.log(props.pictures)

    const changeBarWidth = (e) => {

        dispatch({
            type: 'picturesList/barwidth',
            payload: width
        })
    }

    const handleChange = (e) => {
        setWidth(e.target.valueAsNumber)
    }


    return (
        <div className="picturelistmain">
            <div className="sliders">
                <div className="sliders-width">
                    <input onChange={handleChange} value={width} type="range" id="slider-width" name="slider-width" min="100" max="600" />
                    <label for="slider-width">{'<<'}Adjust Width</label>
                    <button onClick={changeBarWidth}>confirm</button>
                </div>
                {/* <div className="sliders-height">
                    <input type="range" id="slider-height" name="slider-height" min="100" max="600" />
                    <label for="slider-height">{'<<'}Adjust Height</label>
                </div> */}

            </div>
            <div className="picturelist">
                {
                    props.pictures?.total ?
                        props.pictures.results.map((elem) => {
                            return (
                                <PictureMain key={elem.id} username={elem.user.username} imgUrl={elem.urls.full} authorFirstName={elem.user.first_name} authorLastName={elem.user.last_name} />
                            )
                        })
                        : 'Loading...'

                }



            </div>
        </div >
    )
}