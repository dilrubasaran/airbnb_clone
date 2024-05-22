//#region Imports

import React, { useState } from "react";
import Modal from "../components/Global/Modal";
import { useSelector, useDispatch } from "react-redux";

//Components
import Layout from "../components/Global/Layout";

//Partials
import FooterPartial from "../partials/FooterPartial";
import HeaderPartial from "../partials/HeaderPartial";
import ContentCardData from "../components/Global/ContentCardData";
import FilterData from "../components/FilterData";
//#endregion

function HomePage() {
    return (
        <>
            <Layout>
                <Layout.Header>
                    <HeaderPartial />
                </Layout.Header>

                <Layout.Body>
                    <FilterData></FilterData>
                    <ContentCardData></ContentCardData>
                    <div>
                        <Modal modalName="Login" title="Oturum açın veya kaydolun">
                            <div className="pt-[24px] flex-auto overflow-auto outline-none">
                                <div className="">
                                    <div className="mt-2 mb-5"><h3 className="mt-0 text-[22px] font-semibold">Airbnb'ye Hoş Geldiniz</h3></div>

                                    <form action="">
                                        <div className="rounded-lg">
                                            <div className="flex">
                                                <div className="flex-1 relative">
                                                    <div className="relative flex w-full m-0 text-[rgb(34,34,34)] text-md ">
                                                        <label>
                                                            <select>
                                                                <option value="">Türkiye</option>
                                                                <option value="">Amerika</option>
                                                            </select>
                                                        </label>
                                                    </div>
                                                    <div className="relative flex w-full m-0 text-[rgb(34,34,34)] text-md ">
                                                        <label>
                                                            <input type="text" placeholder="Telefon Numarası" />
                                                        </label>
                                                    </div>

                                                    <div className="mt-2 text-[rgb(34,34,34)] text-[12px] leading-3">
                                                        Numaranızı doğrulamak için sizi arayacağız veya bir kısa mesaj göndereceğiz. Standart mesaj ve veri ücretleri uygulanır. <a target="_blank" href="#" class="underline font-semibold">Gizlilik Politikası</a>
                                                    </div>

                                                    <div className="mb-6 mt-4">
                                                        <button style={{ background: "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)" }} className="cursor-pointer inline-block m-0 relative text-center text-md font-semibold rounded-lg px-6 py-[14px] text-white w-full">
                                                            Devam et
                                                        </button>
                                                    </div>

                                                    <div class="text-divider">veya</div>

                                                    <div className="flex flex-wrap justify-between">
                                                        <div className="w-full mb-4">
                                                            <button className="cursor-pointer inline-block margin-0 relative text-center decoration-none text-base font-semibold rounded-lg border-[1px] border-solid border-[#222222] px-[23px] py-[13px] w-full">
                                                                <div className="flex items-center">
                                                                    <div className="flex-[0_1_0%] text-[#1877F1]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="flex-[1_1_0%]">
                                                                        Facebook ile devam et
                                                                    </div>
                                                                </div>
                                                            </button>


                                                        </div>

                                                        <div className="w-full mb-4">
                                                            <button className="cursor-pointer inline-block margin-0 relative text-center decoration-none text-base font-semibold rounded-lg border-[1px] border-solid border-[#222222] px-[23px] py-[13px] w-full">
                                                                <div className="flex items-center">
                                                                    <div className="flex-[0_1_0%] text-[#E94335]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="flex-[1_1_0%]">
                                                                        Google ile devam et
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>

                                                        <div className="w-full mb-4">
                                                            <button className="cursor-pointer inline-block margin-0 relative text-center decoration-none text-base font-semibold rounded-lg border-[1px] border-solid border-[#222222] px-[23px] py-[13px] w-full">
                                                                <div className="flex items-center">
                                                                    <div className="flex-[0_1_0%] text-[#222222]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                                                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="flex-[1_1_0%]">
                                                                        Apple ile devam et
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>

                                                        <div className="w-full mb-4">
                                                            <button className="cursor-pointer inline-block margin-0 relative text-center decoration-none text-base font-semibold rounded-lg border-[1px] border-solid border-[#222222] px-[23px] py-[13px] w-full">
                                                                <div className="flex items-center">
                                                                    <div className="flex-[0_1_0%] text-[#222222]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="flex-[1_1_0%]">
                                                                        E-posta ile devam et
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </Modal>

                    </div>
                </Layout.Body>

                <Layout.Footer>
                    <FooterPartial />
                </Layout.Footer>

            </Layout>

        </>
    )
}

export default HomePage