import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
};

function NavBar() {
    return (
        <div>
            <NavLink
                to="/home"
                /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                exact="true"
                /* add styling to Navlink */
                style={linkStyles}
                /* add prop for activeStyle */
                activestyle={{
                    background: "darkblue",
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                exact="true"
                style={linkStyles}
                activestyle={{
                    background: "darkblue",
                }}
            >
                About
            </NavLink>
            <NavLink
                to="/login"
                exact="true"
                style={linkStyles}
                activestyle={{
                    background: "darkblue",
                }}
            >
                Login
            </NavLink>
        </div>

    )
}

export default NavBar