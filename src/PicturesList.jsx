import PictureMain from "./PictureMain"

export default function PicturesList(props) {

    console.log(props.pictures)


    return (
        <div>
            {
                props.pictures?.total?
                    props.pictures.results.map((elem) => {
                        return (
                            <PictureMain key={elem.id} username={elem.user.username} imgUrl={elem.urls.full} authorFirstName={elem.user.first_name} authorLastName={elem.user.last_name} />
                        )
                    })
                    : 'Loading...'

            }



        </div>
    )
}