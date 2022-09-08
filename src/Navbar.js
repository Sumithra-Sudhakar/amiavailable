import React from "react"
 

export default function Navbar(props) {
    return (
         <nav 
            className={props.darkMode ? "dark": ""}
        >
          
          
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Busy</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Available</p>
            </div>
        </nav>
    )
}