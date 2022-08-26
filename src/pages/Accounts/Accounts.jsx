import "./accounts.css"
import Navbar from "../../components/Nav/Navbar";
import { useFetch } from "../../hooks/useFetch"
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/Auth";
import { useState } from "react";
import api from "../../services/api";

function Accounts() {
    const [select, setSelect] = useState("Complete")
    const {deleteAccount, updateAccount} = useContext(AuthContext);
    const {data} = useFetch(`/accounts/search/pending`);

    if(data) {
        console.log(data)
    }

    function handleAprovedAccount(id, email) {
            const status = "active";

            updateAccount(id, email, status)
        }

        function handleDeleteAccount(id, email) {
            console.log(id)
            deleteAccount(id, email);
        }



        if(!data) {
            return (
                <h2>Carregando...</h2>
            )
        }
    return (
        <div className="content">
        <div className="accounts">
            <Navbar />
            <h1>Contas de Usuário!!!</h1>
            <h5>Total: {data?.length}</h5>

            <div className="accounts-list">
                    {data?.map((account) => {
                        return (

                            <div className="unic" key={account.id}>
                                <div className="avatar">
                                    <img src={account.avatar} alt="" />
                                </div>
                                <div className="text">
                                    <h4>Nickname: {account.nickname}</h4>
                                    <h5>Username: {account.username}</h5>
                                    <h5>Email: {account.email}</h5>
                                    <h5>Tipo de conta: {account.sex}</h5>
                                </div>
                                <div className="text">
                                    <h4>Cidade: {account.city}</h4>
                                    <h5>Estado: {account.uf}</h5>
                                    <h5>País: {account.país}</h5>
                                    <h5>Patron: {account.patron}</h5>
                                </div>
                                <div className="buttons">
                                   <button onClick={() => handleAprovedAccount(account.id, account.email)}>Aprovar</button>
                                   <button onClick={() => handleDeleteAccount(account.id, account.email)}className="delete">Reprovar</button>
                                </div>
                            </div>

                            )
                        })
                    }

            </div>
        </div>
        </div>
    )
}

export {Accounts}