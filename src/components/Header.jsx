import Styles from '../assets/css/Header.module.css';
const header = (props) => {
    return (
        <div className={Styles.header}>

            <h1 className={Styles.title}>{props.title}</h1>
            <ul className={Styles.nav}>
                <li>Home</li>
                <li>Content</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            
        </div>
    );
};

export default header;