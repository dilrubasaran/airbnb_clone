import React from "react";

const getChildrenOnDisplayName = (children, displayName) =>
    React.Children.map(children, (child) =>
        child.type.displayName === displayName ? child : null
    );


const Layout = ({ children, className, style }) => {
    const header = getChildrenOnDisplayName(children, "Header");
    const body = getChildrenOnDisplayName(children, "Body");
    const footer = getChildrenOnDisplayName(children, "Footer");

    return (
        <div className={className} style={{ ...style }}>
            {header}
            {body}
            {footer}
        </div>
    );
}

const Header = ({ children, style, className, ...other }) => (
    <div style={{ ...style }} className={className} {...other}>
        {children}
    </div>
);
Header.displayName = "Header";
Layout.Header = Header;

const Body = ({ children, style, className, ...other }) => (
    <div style={{ ...style }} className={className} {...other}>
        {children}
    </div>
);
Body.displayName = "Body";
Layout.Body = Body;

const Footer = ({ children, style, className, ...other }) => (
    <div style={{ ...style }} className={className} {...other}>
        {children}
    </div>
);
Footer.displayName = "Footer";
Layout.Footer = Footer;

export default Layout;