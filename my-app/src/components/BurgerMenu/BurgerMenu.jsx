import React, {useEffect, useState} from 'react';
import styles from "./BurgerMenu.module.scss";
import IconButton from "../IconButton/IconButton";
import RandomButton from "./components/RandomButton/RandomButton";
import MenuList from "./components/MenuList/MenuList";
import RandomRecipeModal from "./components/RandomRecipeModal/RandomRecipeModal";
import {firebaseAPI} from "../../services/firebase/api";
import {useDispatch, useSelector} from "react-redux";
import {setIsBurgerMenuOpen} from "../../redux/actions/appActions";
import {useLocation} from "react-router-dom";


function BurgerMenu() {
    const dispatch = useDispatch();
    const {pathname} = useLocation();

    const {isBurgerMenuOpen} = useSelector((state) => state.app);

    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleSwitchBurgerMenu() {
        dispatch(setIsBurgerMenuOpen(!isBurgerMenuOpen))
    }

    function handleSwitchModal() {
        isBurgerMenuOpen && handleSwitchBurgerMenu();
        setIsModalOpen(!isModalOpen);
    }

    function handleSignOut() {
        firebaseAPI.signOutUser()
    }

    useEffect(() => {
        if (isBurgerMenuOpen) {
            handleSwitchBurgerMenu()
        }
    }, [pathname]);

    return <>
        <div className={styles.burgerMenuButton}>
            <IconButton src={'/burgerIcon.svg'} width={25} height={25} onClick={handleSwitchBurgerMenu}/>
        </div>

        <div className={isBurgerMenuOpen ? `${styles.burgerMenu} ${styles.opened}` : `${styles.burgerMenu}`}>
            <IconButton src={'/closeIcon.svg'} width={25} height={25} onClick={handleSwitchBurgerMenu}/>

            <RandomButton handleSwitchModal={handleSwitchModal}/>
            {isModalOpen && <RandomRecipeModal handleSwitchModal={handleSwitchModal}/>}

            <MenuList onClick={handleSwitchBurgerMenu} onSignOut={handleSignOut}/>
        </div>
    </>
}

export default BurgerMenu;