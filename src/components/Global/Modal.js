import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Modal({ modalName, children, maxWidth = "568px", title }) {
    const stateSelector = useSelector(state => state);
    const modalManage = useDispatch();

    // TODO | Böyle bir modal daha önce üretilmemişse, bu isimde bir modal üretir
    if (stateSelector[modalName] == undefined) {
        modalManage({
            type: "MODAL",
            payload: { modalName: modalName, modalOpen: false }
        })
    }

    // TODO | Modal open=false ise modal null döner, open=true ise bu if çalışmaz ve createPortal döner
    if (stateSelector[modalName] != undefined) {
        if (!stateSelector[modalName].open) return null
    }

    var onCloseFunction = () => {
        modalManage({
            type: "MODAL",
            payload: { modalName: modalName, modalOpen: false }
        })
    }

    return ReactDOM.createPortal(
        <>
            <div className="w-[100vw] h-full bg-[rgba(34,34,34,0.5)] flex items-center justify-center z-[2000] absolute top-0">
                <div className="p-10 items-center fixed inset-0 flex justify-center">

                    <div style={{ maxWidth: maxWidth }} className="w-full rounded-xl bg-white relative max-h-full flex-col shadow-[rgb(0_0_0/28%)_0px_8px_28px]">

                        {/* <div className="p-10">
                            <button className="w-8 h-8 hover:bg-[rgb(247,247,247)] rounded-[50%]">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block fill-none h-4 w-4 stroke-[3] stroke-current fill-current overflow-visible text-black m-auto" aria-hidden="true" role="presentation" focusable="false"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                            </button>
                        </div> */}

                        <div className="min-h-[64px] flex flex-[0_0_auto] items-center justify-between py-0 px-6 border-b-[1px] border-solid border-[rgb(235,235,235)] text-[rgb(34,34,34)] text-base font-semibold">
                            <div className="flex-[0_0_16px] text-left">
                                <button onClick={onCloseFunction} className="w-8 h-8 hover:bg-[rgb(247,247,247)] rounded-[50%]">
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="block fill-none h-4 w-4 stroke-[3] stroke-current fill-current overflow-visible text-black m-auto" aria-hidden="true" role="presentation" focusable="false"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                </button>
                            </div>
                            <div className="overflow-hidden flex-[0_1_auto] text-center ml-4 mr-4 font-bold">
                                <p>{title}</p>
                            </div>
                            <div className="flex-[0_0_16px] text-right"></div>
                        </div>

                        <div className="overflow-auto p-[0px_24px] h-[85vh] max-h-[65vh]">
                            {children}
                        </div>

                    </div>
                </div>
            </div>
        </>, document.getElementById('portal')
    )
}