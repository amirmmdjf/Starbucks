import Image from "next/image";
import spotify from '../icons/spotify.png'
import facebook from '../icons/facebook.png'
import pinterest from '../icons/pinterest.png'
import instagram from '../icons/instagram.png'
import youtube from '../icons/youtube.png'
import twitter from '../icons/twitter.png'
import Link from "next/link";

const Footer = () => {

    const aTagBottom = ['text-[14px] tracking-wider font-semibold  transition duration-300 hover:text-black hover:underline hover:underline-offset-2 decoration-[1.2px]	'];

    return (
        <footer className="flex flex-col px-4 ">
            <div className="flex w-[1440px] h-[450px] py-5">
                <div className="footer-col ml-3">
                    <h3 className="title-footer__col">About Us</h3>
                    <ul className="ul-box">
                        <li>
                            <Link href="/">Our Company</Link>
                        </li>
                        <li>
                            <Link href="/">Our Coffee</Link>
                        </li>
                        <li>
                            <Link href="/">Stories and News</Link>
                        </li>
                        <li>
                            <Link href="/">Starbucks Archive</Link>
                        </li>
                        <li>
                            <Link href="/">Investor Relations</Link>
                        </li>
                        <li>
                            <Link href="/">Customer Service</Link>
                        </li>
                        <li>
                            <Link href="/">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col ml-5">
                    <h3 className="title-footer__col">Careers</h3>
                    <ul className="ul-box">
                        <li>
                            <Link href="/">Culture and Values</Link>
                        </li>
                        <li>
                            <Link href="/" className="leading-relaxed">Inclusion, Diversity, and Equity</Link>
                        </li>
                        <li>
                            <Link href="/">College Achievement <br /> Plan</Link>
                        </li>
                        <li>
                            <Link href="/">Alumni Community</Link>
                        </li>
                        <li>
                            <Link href="/">U.S. Careers</Link>
                        </li>
                        <li>
                            <Link href="/">International Careers</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col ml-5">
                    <h3 className="title-footer__col">Social Impact</h3>
                    <ul className="ul-box">
                        <li>
                            <Link href="/">People</Link>
                        </li>
                        <li>
                            <Link href="/" className="leading-relaxed">Planet</Link>
                        </li>
                        <li>
                            <Link href="/">Environmental and Social Impact Reporting</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col ml-5">
                    <h3 className="title-footer__col">For Business Partners</h3>
                    <ul className="ul-box">
                        <li>
                            <Link href="/">Landlord Support Center</Link>
                        </li>
                        <li>
                            <Link href="/" className="leading-relaxed">Suppliers</Link>
                        </li>
                        <li>
                            <Link href="/">Corporate Gift Card Sales</Link>
                        </li>
                        <li>
                            <Link href="/">Office and Foodservice Coffee</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col ml-5">
                    <h3 className="title-footer__col">Order and Pick Up</h3>
                    <ul className="ul-box">
                        <li>
                            <Link href="/">Order on the App</Link>
                        </li>
                        <li>
                            <Link href="/" className="leading-relaxed">Order on the Web</Link>
                        </li>
                        <li>
                            <Link href="/">Delivery</Link>
                        </li>
                        <li>
                            <Link href="/">Order and Pick Up Options</Link>
                        </li>
                        <li>
                            <Link href="/">Explore and Find Coffee for Home</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="border " />

            <div className="flex flex-col pl-3">

                <div className="flex justify-between w-[280px] py-8 pb-3 ">
                    <Link href="/"><Image src={spotify} width={32} /></Link>
                    <Link href="/"><Image src={facebook} width={32} /></Link>
                    <Link href="/"><Image src={pinterest} width={32} /></Link>
                    <Link href="/"><Image src={instagram} width={32} /></Link>
                    <Link href="/"><Image src={youtube} width={32} /></Link>
                    <Link href="/"><Image src={twitter} width={32} /></Link>
                </div>

                <div className="pb-5">
                    <ul className="flex tracking-wide pb-3 text-darkGray text-[24px]">
                        <li>
                            <Link className={aTagBottom} href="">Privacy Notice</Link>
                        </li>
                        <li>
                            <span className="px-4">|</span>
                            <Link className={aTagBottom} href="/">Terms of Use</Link>
                        </li>
                        <li>
                            <span className="px-4">|</span>
                            <Link className={aTagBottom} href="/">Do Not Share My Personal Information</Link>
                        </li>
                        <li>
                            <span className="px-4">|</span>
                            <Link className={aTagBottom} href="/">CA Supply Chain Act</Link>
                        </li>
                        <li>
                            <span className="px-4">|</span>
                            <Link className={aTagBottom} href="/">Cookie Preferences</Link>
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