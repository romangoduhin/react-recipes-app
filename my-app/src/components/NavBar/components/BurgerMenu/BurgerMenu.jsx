import React, {useState} from 'react';
import styles from "./BurgerMenu.module.scss";
import PropTypes from "prop-types";
import IconButton from "../../../IconButton/IconButton";
import RandomButton from "./components/RandomButton/RandomButton";
import MenuList from "./components/MenuList/MenuList";
import RandomRecipeModal from "./components/RandomRecipeModal/RandomRecipeModal";


function BurgerMenu({isOpen, handleSwitch}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleSwitchModal() {
        isOpen && handleSwitch();
        setIsModalOpen(!isModalOpen);
    }

    return <>
        <div className={styles.burgerMenuButton}>
            <IconButton src={'/burgerIcon.svg'} width={25} height={25} onClick={handleSwitch}/>
        </div>

        <div className={isOpen ? `${styles.burgerMenu} ${styles.opened}` : `${styles.burgerMenu}`}>
            <IconButton src={'/closeIcon.svg'} width={25} height={25} onClick={handleSwitch}/>

            <RandomButton handleSwitchModal={handleSwitchModal}/>
            {isModalOpen && <RandomRecipeModal handleSwitchModal={handleSwitchModal}/>}

            <MenuList onClick={handleSwitch}/>
        </div>
    </>
}

BurgerMenu.defaultProps = {
    isOpen: false,
    handleSwitch: () => {
    },
}

BurgerMenu.propTypes = {
    isOpen: PropTypes.bool,
    handleSwitch: PropTypes.func,
}

export default BurgerMenu;