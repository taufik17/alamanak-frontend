/* eslint-disable no-unused-vars */
import style from "./likesave.module.css";
import { BiLike } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import Loading from "./spineer";
import Swal from "sweetalert2";
import axios from "axios";

function Like() {
    return (
        <>
            <BiLike
                className={`${style.icon}  mx-1 cursor`}
            />
        </>
    );
}

export default Like;
