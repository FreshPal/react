import React, {useState} from "react";
import './App.css';

function App() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div className="body-wrapper">
            <header>
                <a className="logo" href="/">
                    <img alt="logo" src="/logo192.png" />
                </a>
                <div className="nav-wrapper">
                    <nav>
                        <a href="/link1">Link 1</a>
                        <a href="/link2">Link 2</a>
                        <a href="/link3">Link 3</a>
                    </nav>
                    <button type="button" className="login-button" onClick={handleClick}>Login</button>
                </div>
            </header>
            <main>
                <h1>Project name</h1>
                <h2>Project description</h2>
            </main>
            <footer>
                <div className="source-wrapper">
                    <a target="_blank" rel="noreferrer" href="https://dribbble.com/shots/14800176-Cashbac-Landing-Page-Hero-Section/attachments/6507154?mode=media" className="source-design">Original Design</a>
                </div>
                <div className='author-wrapper'>
                    <span>Author:</span>
                    <a target="_blank" rel="noreferrer" href="https://github.com/FreshPal" className='author-name'>V.Pankratov</a>
                </div>
            </footer>
            {isOpen && (
                <div className='modal-wrapper'>
                    <button className="modal-close-button" type="button" onClick={handleClose}>x</button>
                    <div className="modal">
                        <form className="login-form">
                            <input className="form-input" type="email" placeholder="Email Address" />
                            <input className="form-input" type="password" placeholder="Password" />
                            <button className="form-submit" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;