
import Style from "../assets/css/Footer.module.css";
const Footer = () => {
    return (
        <div className={Style.body}>

            <footer>
                <div className={Style.footer_col}>
                    <h4>products</h4>
                    <ul>
                        <li><a href="#">teams</a></li>
                        <li><a href="#">advertising</a></li>
                        <li><a href="#">talent</a></li>
                    </ul>
                </div>
                <div className={Style.footer_col}>
                    <h4>network</h4>
                    <ul>
                        <li><a href="#">technology</a></li>
                        <li><a href="#">science</a></li>
                        <li><a href="#">business</a></li>
                        <li><a href="#">professional</a></li>
                        <li><a href="#">API</a></li>
                    </ul>
                </div>
                <div className={Style.footer_col}>
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about</a></li>
                        <li><a href="#">legal</a></li>
                        <li><a href="#">contact us</a></li>
                    </ul>
                </div>
                <div className={Style.footer_col}>
                    <h4>follow us</h4>
                    <div >
                        
                        <button className={Style.links}>facebook</button>
                        
                    </div>
                 
                </div>
            </footer>

        </div>
    );
};

export default Footer;