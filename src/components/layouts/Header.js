import React from 'react'

function Header() {
    return (
        <nav ClassName="navbar navbar-expand-sm navbar-light bg-light">
            <div ClassName="container-fluid">
                <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span ClassName="navbar-toggler-icon"></span>
                </button>
            </div>
            <div ClassName="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a ClassName="navbar-brand" href="#">Lead Manager</a>
                <ul ClassName="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
            </div>
        </nav>
    )
}

export default Header;
