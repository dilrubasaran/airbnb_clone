import React from "react";


const DropdownInner = ({ style, list = [] }) => {
    var dropdown_index = 0;
    return (
        <div style={style} className="right-0 bg-white rounded-xl mt-[34px] p-[8px_0] absolute top-[50%] max-h-[calc(100vh-100px)] z-[2] min-w-[240px] text-[#222222] shadow-[0_2px_16px_rgb(0_0_0_/12%)]">
            <div>
                {
                    list.map(
                        (element) => {
                            dropdown_index++;
                            if (element == "divider") {
                                return (
                                    <div key={"dropdown_key_" + dropdown_index} className="bg-[#DDDDDD] m-[8px_0] h-[1px]"></div>
                                )
                            } else {
                                var a_target = element.target == null || undefined ? "_self" : element.target;
                                var a_onclick = element.onclick == false || undefined ? false : element.onclick;
                                var a_url = element.url == false || undefined ? "#" : element.url;
                                var a_divider = element.divider == false || undefined ? false : element.divider;

                                return (
                                    <div key={"dropdown_key_" + dropdown_index}>
                                        <a href={a_url} target={a_target} onClick={a_onclick} className="bg-transparent border-0 cursor-pointer m-0 text-inherit p-[10px_16px] text-[14px] text-[#222222] w-full flex items-center hover:bg-[#F7F7F7]">{element.text}</a>
                                    </div>
                                )
                            }

                        }
                    )
                }

            </div>
        </div>
    )
}

const Dropdown = ({ children, style, className, list = [] }) => {

    const [dropdownInnerDisplay, set_dropdownInnerDisplay] = React.useState("none");

    const handleClick = () => {
        if (dropdownInnerDisplay == "block") {
            set_dropdownInnerDisplay("none");
        } else {
            set_dropdownInnerDisplay("block");
        }
    }

    return (
        <button className={className} onClick={handleClick}>
            {
                React.Children.map(children, child => (
                    React.cloneElement(child, { style: { ...child.props.style } })
                ))
            }
            <DropdownInner style={{ display: dropdownInnerDisplay }} dropdownInnerDisplay={dropdownInnerDisplay} list={list}></DropdownInner>

        </button>
    );

}


export default Dropdown;