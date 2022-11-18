import React, {useEffect, useRef, useState} from 'react';
import styles from "./Carousel.module.scss";
import RecipeCard from "../RecipeCard/RecipeCard";
import PropTypes from "prop-types";

function Carousel({slidersCount, recipes}) {
    const [offset, setOffset] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);

    const visibleWindowRef = useRef();

    function handleArrowCLick(direction) {
        if (direction === "left") {
            const newOffset = offset + slideWidth;
            setOffset(Math.min(newOffset, 0));
        } else if (direction === 'right') {
            const newOffset = offset - slideWidth;
            const maxOffset = -(slideWidth * (slidersCount - 1));
            setOffset(Math.max(maxOffset, newOffset))
        }
    }

    useEffect(() => {
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
    }, [])

    return (
        <div className={styles.carousel}>
            <div className={styles.carouselHeader}>
                <div className={styles.title}>
                    <h2>Popular recipes this week</h2>

                    <p>Here are the top recipes customers are cooking this week</p>
                </div>

                <div className={styles.buttons}>
                    <div className={styles.buttonLeft} onClick={() => handleArrowCLick("left")}>
                        <img src={'/arrow.png'}/>
                    </div>

                    <div className={styles.buttonRight} onClick={() => handleArrowCLick("right")}>
                        <img src={'/arrow.png'}/>
                    </div>
                </div>
            </div>

            <div className={styles.visibleWindow} ref={visibleWindowRef}>
                <div className={styles.slidersContainer}
                     style={{
                         transform: `translateX(${offset}px)`
                     }}>
                    {recipes && recipes.map(el => <RecipeCard size={'medium'} key={el.id} recipe={el}/>)}
                </div>
            </div>

        </div>
    );
}

Carousel.defaultProps = {
    slidersCount: 3,
    recipes: {},
}

Carousel.propTypes = {
    slidersCount: PropTypes.number,
    recipes: PropTypes.object,
}

export default Carousel;