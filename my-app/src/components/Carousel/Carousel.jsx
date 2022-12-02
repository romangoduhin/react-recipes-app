import React, {useEffect, useRef, useState} from 'react';
import styles from "./Carousel.module.scss";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import Slide from "./components/Slide/Slide";
import IconButton from "../IconButton/IconButton";


function Carousel({slidersCount, recipes}) {
    const [offset, setOffset] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);

    const visibleWindowRef = useRef();

    function handleSwipeLeft() {
        const newOffset = offset + slideWidth;
        setOffset(Math.min(newOffset, 0));
    }

    function handleSwipeRight() {
        const newOffset = offset - slideWidth;
        const maxOffset = -(slideWidth * (slidersCount - 1));
        setOffset(Math.max(maxOffset, newOffset))
    }

    function getSlides(recipes) {
        if (recipes) {
            return <div className={styles.slidersContainer}
                        style={{
                            transform: `translateX(${offset}px)`
                        }}>
                {recipes.map(el => <Slide key={el.id} data={el}/>)}
            </div>
        }
    }

    useEffect(() => {
        if (recipes) {
            const resizeHandler = () => {
                const width = visibleWindowRef.current.clientWidth;
                setSlideWidth(width);
                setOffset(0);
            }
            resizeHandler();

            window.addEventListener('resize', resizeHandler)

            return () => {
                window.removeEventListener('resize', resizeHandler)
            }
        }
    }, [recipes])

    return recipes ? <div className={styles.carousel}>
            <div className={styles.buttons}>
                <div>
                    <IconButton src={'/arrowLeft.png'} width={30} height={30} onClick={handleSwipeLeft}/>
                </div>

                <div>
                    <IconButton src={'/arrowRight.png'} width={30} height={30} onClick={handleSwipeRight}/>
                </div>
            </div>

            <div className={styles.visibleWindow} ref={visibleWindowRef}>
                {getSlides(recipes)}
            </div>
        </div>
        :
        <Loading color={'#ffff'}/>
}

Carousel.defaultProps = {
    slidersCount: 3,
    recipes: null,
}

Carousel.propTypes = {
    slidersCount: PropTypes.number,
    recipes: PropTypes.array,
}

export default Carousel;