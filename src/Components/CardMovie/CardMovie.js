import {Link} from "react-router-dom";
import {Card} from "../../Styles.style";
import linkGenerate from "../../Utils/linkGenerate";

export const CardMovie = (props) => {
    const {title, director, producer, release_date} = props.movie
    return (
        <>
            <Card>
                <Link to={linkGenerate(title)}><h1>{title}</h1></Link>
                <h4>Director:{director}</h4>
                <h4>Producer:{producer}</h4>
                <p>Release Date:{release_date}</p>
            </Card>

        </>
    );
}

