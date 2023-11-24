import Image from "next/image";
import spotify from '../icons/spotify.png'
import facebook from '../icons/facebook.png'
import pinterest from '../icons/pinterest.png'
import instagram from '../icons/instagram.png'
import youtube from '../icons/youtube.png'
import twitter from '../icons/twitter.png'

const Footer = () => {

    const aTagBottom = ['text-[14px] tracking-wider font-semibold  transition duration-300 hover:text-black hover:underline hover:underline-offset-2 decoration-[1.2px]	'];

    return (
        <footer className="flex flex-col px-4 ">
            <div className="flex w-[1440px] h-[450px] py-5">
                <div className="footer-col ml-3">
                    <h3 className="title-footer__col">About Us</h3>
                    <ul className="ul-box">
                        <li>
                            <a href="/">Our Company</a>
                        </li>
                        <li>
                            <a href="/">Our Coffee</a>
                        </li>
                        <li>
                            <a href="/">Stories and News</a>
                        </li>
                        <li>
                            <a href="/">Starbucks Archive</a>
                        </li>
                        <li>
                            <a href="/">Investor Relations</a>
                        </li>
                        <li>
                            <a href="/">Customer Service</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-col ml-5">
                    <h3 className="title-footer__col">Careers</h3>
                    <ul className="ul-box">
                        <li>
                            <a href="/">Culture and Values</a>
                        </li>
                        <li>
                            <a href="/" className="leading-relaxed">Inclusion, Diversity, and Equity</a>
                        </li>
                        <li>
                            <a href="/">College Achievement <br /> Plan</a>
                        </li>
                        <li>
                            <a href="/">Alumni Community</a>
                        </li>
                        <li>
                            <a href="/">U.S. Careers</a>
                        </li>
                        <li>
                            <a href="/">International Careers</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-col ml-5">
                    <h3 className="title-footer__col">Social Impact</h3>
                    <ul className="ul-box">
                        <li>
                            <a href="/">People</a>
                        </li>
                        <li>
                            <a href="/" className="leading-relaxed">Planet</a>
                        </li>
                        <li>
                            <a href="/">Environmental and Social Impact Reporting</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-col ml-5">
                    <h3 className="title-footer__col">For Business Partners</h3>
                    <ul className="ul-box">
                        <li>
                            <a href="/">Landlord Support Center</a>
                        </li>
                        <li>
                            <a href="/" className="leading-relaxed">Suppliers</a>
                        </li>
                        <li>
                            <a href="/">Corporate Gift Card Sales</a>
                        </li>
                        <li>
                            <a href="/">Office and Foodservice Coffee</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-col ml-5">
                    <h3 className="title-footer__col">Order and Pick Up</h3>
                    <ul className="ul-box">
                        <li>
                            <a href="/">Order on the App</a>
                        </li>
                        <li>
                            <a href="/" className="leading-relaxed">Order on the Web</a>
                        </li>
                        <li>
                            <a href="/">Delivery</a>
                        </li>
                        <li>
                            <a href="/">Order and Pick Up Options</a>
                        </li>
                        <li>
                            <a href="/">Explore and Find Coffee for Home</a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="border " />

            <div className="flex flex-col pl-3">

                <div className="flex justify-between w-[280px] py-8 pb-3 ">
                    <a href="/"><Image src={spotify} width={32} /></a>
                    <a href="/"><Image src={facebook} width={32} /></a>
                    <a href="/"><Image src={pinterest} width={32} /></a>
                    <a href="/"><Image src={instagram} width={32} /></a>
                    <a href="/"><Image src={youtube} width={32} /></a>
                    <a href="/"><Image src={twitter} width={32} /></a>
                </div>

                <div className="pb-5">
                    <ul className="flex tracking-wide pb-3 text-darkGray text-[24px]">
                        <li>
                            <a className={aTagBottom} href="">Privacy Notice</a>
                        </li>
                        <li>
                            <span className="px-4">|</span>
                            <a className={aTagBottom} href="/">Terms of Use</a>
                        </li>
                        <li>
                            <span className="px-4">|</span>
                            <a className={aTagBottom} href="/">Do Not Share My Personal Information</a>
                        </li>
                        <li>
                            <span className="px-4">|</span>
                            <a className={aTagBottom} href="/">CA Supply Chain Act</a>
                        </li>
                        <li>
                            <span className="px-4">|</span>
                            <a className={aTagBottom} href="/">Cookie Preferences</a>
                        </li>
                    </ul>
                    <p className="text-sm tracking-wide	text-gray-500 pb-2">
                        © 2023 Starbucks Coffee Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;