import React from "react";


const Header = () => {

    const links = [
        {url: '/schedule', name: 'Расписание', isActive: false},
        {url: '/selftraining', name: 'Запись на самоподготовку', isActive: false},
    ]

    return (
        <nav className="relative z-50 h-24 select-none">
            <div
                className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
                <div className="flex items-center justify-start w-1/4 h-full pr-4">
                    <a className="inline-block py-4 md:py-0 hover:no-underline">
                        <span className="p-1 text-xl font-black leading-none text-gray-900">27unc.</span>
                    </a>
                </div>
                <div
                    className="top-0 left-0 items-start w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex hidden">
                    <div
                        className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                        <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            {links.map(link => (
                                <a
                                    key={link.name}
                                    className={
                                        link.isActive ? (
                                            "inline-block w-full py-2 mx-0 font-bold text-left text-indigo-600 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                                        ) : (
                                            "inline-block w-full py-2 mx-0 ml-6 font-bold text-left text-gray-900 md:ml-0 md:w-auto md:px-0 md:mx-2 hover:text-indigo-900 lg:mx-3 md:text-center"
                                        )
                                    }
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div
                            className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                            <button
                                className="inline-flex disabled items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 text-sm font-bold rounded-lg text-sm px-5 py-2.5 text-center mt-4 mr-2 mb-2">
                                @20350125
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;