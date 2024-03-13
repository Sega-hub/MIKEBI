import React from "react";
import style from "./Modal.module.css"

function Modal({active, setActive}) {   
    return(
        <>
            {
                active&&(
                    <div className={style.modal} id="modal">
                        <h1>Today we dont have tips!</h1>
                        <button className={style.closeModal} onClick={()=>setActive(false)}>ЗАКРЫТЬ</button>
                    </div>
                )
            }
        </>
    )
}

export default Modal;