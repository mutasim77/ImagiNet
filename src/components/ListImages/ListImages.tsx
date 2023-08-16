import Pagination from "../Pagination/Pagination";
import Skeleton from "../Skeleton/Skeleton";
import NoDataFound from "../NoDataFound/NoDataFound";
import { PictureContext } from "../../context/PictureProvider";
import { useContext } from "react";

import './ListImages.scss';

const ListImages = () => {
    const { isLoading, data } = useContext(PictureContext);

    const noDataFound = data.results.length === 0;

    if (noDataFound) {
        return <NoDataFound />
    }

    return (
        <section className="gallery">
            <div className="container">
                <ul className="list-images">
                    {isLoading || !data ? (
                        <Skeleton />
                    ) :
                        data.results.map((item, inx) => (
                            <li className="list-item" key={inx}>
                                <img
                                    src={item.urls.regular}
                                    alt={item.alt_description}
                                />
                            </li>
                        ))}
                </ul>
                <Pagination />
            </div>
        </section>
    )
}

export default ListImages
