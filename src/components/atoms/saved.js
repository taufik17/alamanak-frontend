/* eslint-disable no-unused-vars */
import style from "./likesave.module.css";
import React, { useState, useEffect } from "react";
import Loading from "./spineer";
import Swal from "sweetalert2";
import axios from "axios";
import { FiBookmark, FiAward } from "react-icons/fi";
function Saved() {
    return (
        <>
            <FiBookmark
                className={`${style.icon}  mx-1 cursor`}
            />
        </>
    );
}

export default Saved;
