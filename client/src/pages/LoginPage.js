import React, {useContext, useState} from 'react';
import {AuthContext} from "../context";

const LoginPage = () => {

    const [authInput, setAuthInput] = useState({
        username: "",
        password: ""
    })

    const {setAuthData} = useContext(AuthContext)

    const login = () => {
        // TODO: POST /login
        setAuthData({
            isAuth: true,
            username: authInput.username,
            roles: ['admin']
        })
    }


    return (
        <div>
            <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
                <div className="w-1/2">
                    <h1 className="mb-1 font-bold text-3xl flex gap-1 items-baseline font-mono">Авторизация<span
                        className="text-sm text-purple-700">27unc.</span></h1>
                    <div
                        className=" max-w-3xl gap-2 py-10 px-8  bg-white rounded-md border-t-4 border-purple-400">
                        <div className="">
                            <div
                                className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                <input type="text" name="first-name" id="first-name"
                                       className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                                       placeholder="Логин"
                                       onChange={e => setAuthInput({...authInput, username: e.target.value})}
                                       value={authInput.username}
                                />
                                <label
                                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">
                                    Логин
                                </label>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div
                                className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                <input type="password" name="last-name" id="last-name"
                                       className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                                       placeholder="Пароль"
                                       onChange={e => setAuthInput({...authInput, password: e.target.value})}
                                       value={authInput.password}
                                />
                                <label
                                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Пароль</label>
                            </div>
                        </div>
                        <div className="flex">
                            <button type="button"
                                    onClick={login}
                                    className="mx-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-md px-5 py-2.5 text-center mt-4">
                                Войти
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;