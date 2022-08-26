import { useEffect, useState } from "react"
import api from "../../services/api"
import './dataUser.css'

function DataUser({idAccount, id, avatar, nickname}) {

    return (
        <div className="dataUser">
            <div className="image">
            <img src={avatar} alt="Foto de perfil do usuário" />
            </div>
            <h4>{nickname}</h4>
        </div>
    )
}

export {DataUser}