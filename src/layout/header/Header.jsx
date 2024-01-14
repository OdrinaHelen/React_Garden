import styles from './header.module.css'
import logo from './img/logo.svg'
import icon from './img/icon.svg'

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
                <nav>
                <a href="#">Main Page</a>
                <a href="#">Categories</a>
                <a href="#">All products</a>
                <a href="#">All sales</a>
                </nav>
            <img src={icon} alt="icon" />

          

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.3120815813036!2d8.36249567701481!3d52.60012963029345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b74d9581180a4d%3A0xc67464702e118855!2sVon-H%C3%BCnefeld-Stra%C3%9Fe%205%2C%2049356%20Diepholz!5e0!3m2!1sru!2sde!4v1703063547991!5m2!1sru!2sde" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}





        </header>
    )
}
