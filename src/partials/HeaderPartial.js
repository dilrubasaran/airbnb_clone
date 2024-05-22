import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Dropdown from "../components/Global/Dropdown";

// Icons
import { AiOutlineSearch } from "react-icons/ai";

// Image
import Image_AirbnbLogo from "../assets/img/Airbnb_Logo.png";
import Image_BurgerMenuIcon from "../assets/img/burgermenu.svg";


const HeaderPartial = (props) => {
    const stateSelector = useSelector(state => state);
    const modalManage = useDispatch();

    return (
        <header className="left h-[80px] w-full z-[100] relative">
            <div className="justify-between items-center flex h-full relative w-full z-[1] px-10">

                <div className="flex-[1_0_140px] px-[40px]">
                    <div>
                        <a href="" className="transition-[color_250ms_ease] text-[#FF385C] outline-none items-center inline-flex h-[80px] relaitve align-middle z-[1]">
                            <div>
                                <img width="102px" height="32px" src={Image_AirbnbLogo} alt="" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="text-center flex-auto min-w-[348px] p-[0_24px]">
                    <div className="text-left bg-white border-[1px] border-[#DDDDDD] rounded-[40px] shadow-[0_1px_2px_rgb(0_0_0/8%),0_4px_12px_rgb(0_0_0/5%)] inline-flex max-w-full items-center text-[#222222] align-middle">
                        <button className="pl-2 text-sm font-semibold flex flex-initial h-[48px] items-center relaitve z-[1] bg-transparent cursor-pointer p-0 text-inherit border-[1px] border-solid border-transparent rounded m-[-1px]"><div className="p-[0_16px]">Herhangi bir yer</div></button>
                        <span className="bg-[#DDDDDD] h-[24px] w-[1px] inline-flex"></span>
                        <button className="text-sm flex font-semibold flex-initial h-[48px] items-center relaitve z-[1] bg-transparent cursor-pointer p-0 text-inherit border-[1px] border-solid border-transparent rounded m-[-1px]"><div className="p-[0_16px]">Herhangi bir hafta</div></button>
                        <span className="bg-[#DDDDDD] h-[24px] w-[1px] inline-flex"></span>
                        <button className="text-sm flex flex-initial h-[48px] items-center relaitve z-[1] bg-transparent cursor-pointer p-0 text-inherit border-[1px] border-solid border-transparent rounded m-[-1px]"><div className="p-[0_16px] text-[#717171]">Misafir ekleyin</div><div className="bg-[#FF385C] m-[7px_7px_7px_0] rounded-[50%] p-[10px] text-white h-[32px] w-[32px]"><AiOutlineSearch /></div></button>
                    </div>
                </div>

                <div className="flex-[1_0_140px]">
                    <nav className="relative flex items-center justify-end h-[80px]">

                        <div className="flex flex-auto justify-end mr-2">
                            <a href="(0)" className="bg-transparent border-0 cursor-pointer m-0 text-inherit p-3 "><div className="items-center flex h-full relative z-[1] text-[14px] font-semibold ">Evinizi Airbnb'ye taşıyın</div></a>
                            <div className="relative inline">
                                <button className="bg-transparent border-0 cursor-pointer m-0 text-inherit p-3">
                                    <div className="items-center flex h-full relative z-[1]">
                                        <div className="items-center flex h-[18px] relative z-[1]">
                                            <svg className="block h-4 w-4 fill-[currentcolor]" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div>
                            <div className="inline relative">
                                {/* <button > */}

                                <Dropdown className="p-[5px_5px_5px_12px] items-center inline-flex h-[42px] relative align-middle z-[1] text-[#222222] bg-transparent cursor-pointer m-0 text-inherit border-[1px] border-solid border-[#DDDDDD] rounded-[21px] transition-[box-shadow_0.2s_ease] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)]" list={[
                                    {
                                        text: <span className="font-semibold">Kaydolun</span>,
                                        url: "#",
                                        onclick: () => {
                                            modalManage({
                                                type: "MODAL",
                                                payload: { modalName: "Login", modalOpen: true }
                                            })
                                        }
                                    }, {
                                        text: "Oturum açın",
                                        url: "#",
                                        onclick: () => {
                                            modalManage({
                                                type: "MODAL",
                                                payload: { modalName: "Login", modalOpen: true }
                                            })
                                        }
                                    }, "divider", {
                                        text: "Evinizde ev sahipliği yapın",
                                        url: "#"
                                    }, {
                                        text: "Bir deneyime ev sahipliği yapın",
                                        url: "#"
                                    }, {
                                        text: "Yardım",
                                        url: "#"
                                    }
                                ]}>
                                    <div>
                                        <img className="w-4 h-4" src={Image_BurgerMenuIcon} alt="" />
                                    </div>

                                    <div className="ml-3  h-[30px] realtive w-[30px] z-[1]">
                                        <svg viewBox="0 0 32 32" className="block w-full h-full fill-[currentcolor] text-[#717171]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path></svg>
                                    </div>
                                </Dropdown>



                                {/* </button> */}
                            </div>
                        </div>

                    </nav>
                </div>

            </div>
        </header>
    )
};

export default HeaderPartial;