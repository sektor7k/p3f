import { Link, NavLink } from "react-router-dom";
import React, { useState} from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import ScrollStatus from "../scroll/ScrollStatus";
import { connect, disconnect } from '@argent/get-starknet';
import { useEffect } from 'react';
import './neonbutton.css'





const NavBar = () => {
    const [connected, setConnected] = useState(false);
    const [address, setAddress] = useState("");

    useEffect(() => {
        
        const isConnected = localStorage.getItem("connected") === "true";
        const savedAddress = localStorage.getItem("address");
        if (isConnected && savedAddress) {
            setConnected(true);
            setAddress(savedAddress);
          }
        
        
    }, []);

    const connectWallet = async () => {
        try {
          const connection = await connect();
          if (connection && connection.isConnected) {
            setConnected(true);
            setAddress(connection.selectedAddress);
            localStorage.setItem("connected", "true");
            localStorage.setItem("address", connection.selectedAddress);
          }
        } catch (error) {
          console.error("Failed to connect wallet:", error);
        }
      };

      const disconnectWallet = async () => {
        try {
          await disconnect();
          localStorage.removeItem("connected");
          localStorage.removeItem("address");
          setConnected(false);
          setAddress("");
        } catch (error) {
          console.error("Failed to disconnect wallet:", error);
        }
      };

      const handleConnectButton = () => {
        if (connected) {
          disconnectWallet();
        } else {
          connectWallet();
        }
      };









    const [menu, setMenu] = useState(false);
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 0) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return (
        <div className="fixed top-0 z-10 w-full">
            <div className={`w-[100%] fixed items-center justify-center ${colorChange && " bg-black transition-all delay-100  ease-in-out bg-opacity-20 backdrop-blur-md border-gray-800 shadow-lg"}`}>
                <div className="flex items-center justify-between lg:w-[65rem] md:w-[100%] px-4 md:px-3 py-5 m-auto text-lg">
                    <div className="flex items-center">
                        <Link style={{ textDecoration: "none" }} to="/">
                            <img src="/images/logo4.png" alt="logo" className="h-10" />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <ul className="md:flex gap-8 hidden items-center text-base">
                            <li>
                                <NavLink style={{ textDecoration: "none" }} to="/about">
                                    {({ isActive, isPending }) => (
                                        <span className={`hover:underline underline-offset-4 decoration-pink-500 ${isActive ? "text-sky-500 font-medium" : "text-white"}`}>About</span>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={{ textDecoration: "none" }} to="/team">
                                    {({ isActive, isPending }) => (
                                        <span className={`hover:underline underline-offset-4 decoration-pink-500 ${isActive ? "text-sky-500 font-medium" : "text-white"}`}>Team</span>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={{ textDecoration: "none" }} to="https://project-3-fusion.gitbook.io/project-3-fusion/" target="_blank" rel="noopener noreferrer">
                                    {({ isActive, isPending }) => (
                                        <span className={`hover:underline underline-offset-4 decoration-pink-500 ${isActive ? "text-sky-500 font-medium" : "text-white"}`}>Docs</span>
                                    )}
                                </NavLink>


                            </li>

                            <li>

                                {connected ? (
                                    <div>
                                        <button className="myButton0" onClick={disconnectWallet}>{address}</button>
                                    </div>
                                ) : (
                                    <button className="myButton" onClick={connectWallet}>Connect</button>
                                )}
                            </li>
                        </ul>


                        <button
                            type="button"
                            onClick={() => {
                                if (menu == false) {
                                    setMenu(true);
                                } else {
                                    setMenu(false);
                                }
                            }}
                            className="animate-pulse md:hidden border focus:ring-[2.5px] focus:outline-none font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center focus:ring-gray-500 bg-gray-800 border-gray-900 text-white hover:bg-gray-700 mr-2"
                        >
                            {!menu ? <HiMenuAlt3 /> : <FiX />}
                        </button>
                    </div>
                </div>
                {menu && (
                    <div className="md:hidden fixed top-[4rem] right-0 rounded-xl w-[12rem] py-2 mr-5 shadow-md text-white bg-gray-900 border-gray-700 border">
                        <ul>
                            <li>
                                <NavLink style={{ textDecoration: "none" }} to="/">
                                    <button
                                        onClick={() => {
                                            setMenu(false);
                                            // setFocus(0);
                                        }}
                                        className="hover:underline hover:border-blue-300 border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                    >
                                        Home
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <Link style={{ textDecoration: "none" }} to="/about">
                                    <button
                                        onClick={() => {
                                            setMenu(false);
                                            // setFocus(0);
                                        }}
                                        className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                    >
                                        About
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link style={{ textDecoration: "none" }} to="https://project-3-fusion.gitbook.io/project-3-fusion/">
                                    <button
                                        onClick={() => {
                                            setMenu(false);

                                        }}
                                        className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                    >
                                        Docs
                                    </button>
                                </Link>
                            </li>




                        </ul>
                    </div>
                )}
                <ScrollStatus />
            </div>
        </div>
    );
};

export default NavBar;