import { useEffect, useState } from "react"
import api from "../../services/api"
import { DateFormat } from "../DateFormat/DateFormat";
import { DateFormatPosts } from "../DateFormatPosts/DateFormatPosts";
import './dataUser.css'

function DataUser({avatar, nickname, date}) {

    return (
        <div className="dataUser">
            <div className="image">
            <img src={avatar} alt="Foto de perfil do usuário" />
            </div>
            <div className="text">
            <h4><b>{nickname}</b></h4>
            <DateFormatPosts  date={date}/>
            </div>
        </div>
    )
}

export {DataUser}