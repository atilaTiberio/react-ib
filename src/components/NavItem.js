import {Link,withRouter} from 'react-router-dom'
import React from "react";


const NavItem =(props) => {
    const {children,to,location:{pathname}} = props
    const activeClass = pathname===to ? 'active': '';
    return (
        <li className={activeClass}> <Link to={to}>{children}</Link></li>
    )

}

export  default withRouter(NavItem);