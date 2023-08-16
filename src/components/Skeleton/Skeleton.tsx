import { useContext } from 'react';
import { PictureContext } from '../../context/PictureProvider';
import { Blurhash } from "react-blurhash";

import './Skeleton.scss';

const Skeleton = () => {
    const { data } = useContext(PictureContext);

    return (
        <ul className='skeleton'>
            {
                data.results.map((item) => (
                    <Blurhash
                        key={item.id}
                        hash={item.blur_hash}
                        width={350}
                        height={400}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                        className='animate-pulse skeleton-item'
                    />
                ))
            }
        </ul>
    )
};

export default Skeleton;