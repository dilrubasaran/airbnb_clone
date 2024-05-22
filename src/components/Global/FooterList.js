import React from 'react'

const  FooterList = ({ title, list = [] }) => {
    var footer_index = 0;
    const Links = list.map(
        (element) => {
            footer_index++;
            var target = element.target == null || undefined ? "_self" : element.target;
            return ( 
                <li className='pb-4' key={"footer_key_" + footer_index}>
                    <div className='font-semibold text-[#191919] text-sm'>
                        <a href={element.url} target={target} className='font-normal relative outline-0 no-underline'>
                            {element.text}
                        </a>
                    </div>
                </li>
            )
        }
    );

    return (
        <div className='mr-6 flex-1 p-0 font-semibold text-inherit font-light'>

            <div className='pb-0 mb-4 font-semibold	 rounded rounded-b-0 font-normal text-lg text-black'>{title}</div>

            <ol className='pt-0 pb-0 m-0 p-0 cursor-pointer '>
                {Links}
            </ol>

        </div>
    )
}

export default FooterList