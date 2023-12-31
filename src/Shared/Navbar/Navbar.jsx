import { useState } from "react"
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)

return (
    <>

        {/*<!-- Header --> */}
        <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
            <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                <nav
                    aria-label="main navigation"
                    className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                    role="navigation"
                >
                    {/*      <!-- Brand logo --> */}
                    <a
                        id="logo"
                        aria-label="logo"
                        className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
                        href="/"
                    >
                        <svg
                            width="300"
                            height="300"
                            viewBox="0 0 300 300"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 bg-[#fe0800]"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M88.1121 88.1134L150.026 150.027L150.027 150.027L150.027 150.027L150.028 150.027L150.027 150.026L88.1133 88.1122L88.1121 88.1134ZM273.878 273.877C272.038 274.974 196.128 319.957 165.52 289.349L88.1124 211.942L26.1434 273.911C26.1434 273.911 -20.3337 196.504 10.651 165.519L88.1121 88.1134L26.1417 26.1433C26.1417 26.1433 69.6778 0.00338007 104.519 0H0V300H300V0H104.533C116.144 0.00112664 126.789 2.90631 134.534 10.651L211.941 88.1123L273.877 26.177C274.974 28.0159 319.957 103.926 289.349 134.535L211.942 211.942L273.878 273.877ZM273.878 273.877L273.912 273.857V273.911L273.878 273.877ZM273.877 26.177L273.911 26.1429H273.857C273.857 26.1429 273.863 26.1544 273.877 26.177Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 0H300V300H0V0ZM150.026 150.025C121.715 99.731 88.1131 88.1122 88.1131 88.1122L10.6508 165.519C10.6508 165.519 26.143 150.027 150.026 150.027H150.027C150.026 150.027 150.026 150.027 150.026 150.027L150.026 150.027C99.731 178.339 88.1124 211.941 88.1124 211.941L165.52 289.348C165.52 289.348 150.032 273.86 150.027 150.027H150.029C178.341 200.323 211.944 211.942 211.944 211.942L289.352 134.535C289.352 134.535 273.864 150.023 150.027 150.027V150.027L150.027 150.027C200.322 121.715 211.941 88.1125 211.941 88.1125L134.534 10.651C134.534 10.651 150.026 26.1431 150.026 150.025ZM150.027 150.027L150.026 150.027C150.026 150.026 150.026 150.026 150.026 150.025C150.026 150.025 150.027 150.026 150.027 150.027ZM150.027 150.027L150.027 150.026L150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027L150.027 150.027ZM150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027H150.027L150.027 150.027Z"
                                fill="rgba(255,255,255,.2)"
                            />
                        </svg>
                        Brand
                    </a>
                    {/*      <!-- Mobile trigger --> */}
                    <button
                        className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                                : ""
                            }
              `}
                        onClick={() => setIsToggleOpen(!isToggleOpen)}
                        aria-expanded={isToggleOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                            <span
                                aria-hidden="true"
                                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                            ></span>
                            <span
                                aria-hidden="true"
                                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                            ></span>
                            <span
                                aria-hidden="true"
                                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                            ></span>
                        </div>
                    </button>
                    {/*      <!-- Navigation links --> */}
                    <ul
                        role="menubar"
                        aria-label="Select page"
                        className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                            ? "visible opacity-100 backdrop-blur-sm"
                            : "invisible opacity-0"
                            }`}
                    >
                        <li role="none" className="flex items-stretch">
                            <Link to={'/'} role="menuitem"
                                
                                className="flex items-center gap-2 py-4  uppercase transition-colors duration-300 hover:text-[#fe0800] focus:text-[#fe0800] focus:outline-none  lg:px-8">
                                Home
                            </Link>
                        </li>
                        <li role="none" className="flex items-stretch">
                            <Link
                                to="/products-page"
                                role="menuitem"
                                className="flex items-center gap-2 py-4  uppercase transition-colors duration-300 hover:text-[#fe0800] focus:text-[#fe0800] focus:outline-none  lg:px-8"
                            >
                                <span>Products</span>
                            </Link>
                        </li>
                        <li role="none" className="flex items-stretch">
                            <Link to='/about'
                                role="menuitem"
                                className="flex items-center gap-2 py-4  uppercase transition-colors duration-300 hover:text-[#fe0800] focus:text-[#fe0800] focus:outline-none  lg:px-8"
                            >
                                <span>About</span>
                            </Link>
                        </li>
                        <li role="none" className="flex items-stretch">
                            <Link to='/accounts'
                                role="menuitem"
                                className="flex items-center gap-2 py-4  uppercase transition-colors duration-300 hover:text-[#fe0800] focus:text-[#fe0800] focus:outline-none  lg:px-8"
                                href="#"
                            >
                                <span>Accounts</span>
                            </Link>
                        </li>
                    </ul>
                    {/*      <!-- Actions --> */}
                    <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
                        <a
                            href="#"
                            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-lg text-[#fe0800]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                aria-labelledby="title description"
                                role="graphics-symbol"
                            >
                                <title id="title">Cart</title>
                                <desc id="description">Cart icon with items</desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                            <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 px-1.5 text-sm text-white">
                                0<span className="sr-only"> new emails </span>
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
        {/*<!-- End Navbar with Topbar--> */}
    </>
)
};
export default Navbar
