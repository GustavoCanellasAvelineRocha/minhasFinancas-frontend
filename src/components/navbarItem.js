import React from "react";

function NavbarItem(props){
    return(
        <li className="nav-item">
              <a href={props.href} className="nav-link">
                {props.label}
              </a>
        </li>
    )
}

export default NavbarItem;