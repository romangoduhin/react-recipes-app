import React, {useEffect, useState} from 'react';
import styles from "./RandomRecipeModal.module.scss";
import Modal from "../../../Modal/Modal";
import PropTypes from "prop-types";
import IconButton from "../../../IconButton/IconButton";
import Loading from "../../../Loading/Loading";
import spoonacularAPI from "../../../../services/spoonacularApi/api";
import {NavLink} from "react-router-dom";


function RandomRecipeModal({handleSwitchModal}) {
    const [randomRecipe, setRandomRecipe] = useState(null);

    function getCuttedText(text) {
        text = text.split(' ')
        if(text.length === 1) {
            return text
        }
        text = text.slice(0, 4);
        text.push('...');
        return text.join(' ');
    }

    async function getRandomRecipe() {
        const data = await spoonacularAPI.getRandomRecipes(1);
        if (data) {
            setRandomRecipe(data[0])
        }
    }

    useEffect(() => {
        setTimeout(getRandomRecipe, 2000);
    }, []);

    return <Modal backgroundColor={'rgba(51,51,51, 0.9)'}>
        <div className={styles.wrapper}>
            <IconButton src={'/closeIcon.svg'} width={30} height={30} onClick={handleSwitchModal}/>
            <div className={styles.circle}>
                {randomRecipe
                    ? <div className={styles.result}>
                        <NavLink className={styles.logo} to={'/'}>simply</NavLink>
                        <h1>{getCuttedText(randomRecipe.title)}</h1>
                        <NavLink to={`/recipe/${randomRecipe.id}`} onClick={handleSwitchModal}>
                            <div className={styles.button}>
                                Check it
                            </div>
                        </NavLink>
                        <p onClick={getRandomRecipe}>Get new random recipe</p>
                    </div>
                    : <div className={styles.loadingWrapper}>
                        <h1>Finding some recipe for you</h1>
                        <Loading height={'100px'} width={'100px'} color={"#000"}/>
                    </div>
                }
            </div>
        </div>
    </Modal>
}

RandomRecipeModal.defaultProps = {
    handleSwitchModal: () => {
    },
}

RandomRecipeModal.propTypes = {
    handleSwitchModal: PropTypes.func,
}

export default RandomRecipeModal;