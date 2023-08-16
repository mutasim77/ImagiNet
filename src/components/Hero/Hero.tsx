import { useEffect, useState } from 'react';

import './Hero.scss';

const data = [
    {
        id: 1,
        image: '/src/assets/spiderman.jpeg'
    },
    {
        id: 2,
        image: '/src/assets/bear.jpeg'
    },
    {
        id: 3,
        image: '/src/assets/sky.jpeg'
    },
    {
        id: 4,
        image: '/src/assets/stars.jpeg'
    },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(
            () =>
                setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
            4000
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">
            <div className='container'>
                <div className="content">
                    <div className="hero-item">
                        <h1>
                            Search & Discover ❤️ <br />
                            your favorite images effortlessly.
                        </h1>
                        <p>ImagiNet: Where Every Image You Desire Awaits</p>
                    </div>
                    <div className="hero-item">
                        <div className="image-container">
                            <img src={data[currentSlide].image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
