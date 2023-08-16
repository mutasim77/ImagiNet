import NoResultImg from '../../assets/no-result.png';
import { useContext } from "react";
import { PictureContext } from "../../context/PictureProvider";

import './NoDataFound.scss';

const NoDataFound = () => {
    const { currentSearch } = useContext(PictureContext);

    return (
        <div className="container">
            <div className="no-results-container">
                <div className="image-container">
                    <img src={NoResultImg} alt="No Result Found" />
                </div>
                <p className="message">
                    We searched far and wide and couldn't find any images matching your search for
                    <span className="search-term"> "{currentSearch}" </span>.
                </p>
            </div>
        </div>
    );
}

export default NoDataFound
