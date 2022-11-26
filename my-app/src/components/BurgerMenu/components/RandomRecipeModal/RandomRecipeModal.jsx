import React from 'react';
import styles from "./RandomRecipeModal.module.scss";
import Modal from "../../../Modal/Modal";
import PropTypes from "prop-types";
import IconButton from "../../../IconButton/IconButton";
import Loading from "../../../Loading/Loading";


function RandomRecipeModal({handleSwitchModal}) {
    return <Modal backgroundColor={'rgba(51,51,51, 0.7)'}>
        <div className={styles.wrapper}>
            <IconButton src={'/closeIcon.svg'} width={30} height={30} onClick={handleSwitchModal}/>
            <div className={styles.circle}>
                <Loading color={"#000"}/>
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