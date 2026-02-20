import {Reack} from 'react';
import './index.css';

function Home() {
    return (
        <div className='home-container'>
            <nav className='nav-container'>
                <img src='https://res.cloudinary.com/dk2bbhmdm/image/upload/v1771358530/ChatGPT_Image_Feb_18_2026_01_31_19_AM_wqyg1p.png' alt='logo' className='logo'/>
                {/* <ul className='nav-links'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul> */}
            </nav>
            <div className='content'>
                <h1>Welcome to ChatGPT</h1>
                <p>Experience the power of AI-driven conversations with ChatGPT. Whether you need assistance, want to brainstorm ideas, or just want to chat, ChatGPT is here to help. Start your conversation today and discover the endless possibilities of AI communication.</p>
                <button className='get-started-btn'>Get Started</button>
            </div>
        </div>
    )
}

export default Home;

