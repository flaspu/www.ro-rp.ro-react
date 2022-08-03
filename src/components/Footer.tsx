import React from 'react';

import Logo from '../assets/media/logos/logo-1.png';

export default function Footer() {
    return (
        <div className="container mx-auto mt-auto">
            <div className="footer font-poppins flex flex-col 2xl:flex-row justify-between py-10 px-[30px] xl:px-0">
                <div className="branding flex flex-col gap-2 justify-start">
                    <div className="flex gap-4 flex-col">
                        <img src={Logo} width="40" alt="Romania Roleplay" />
                    </div>
                    <p className="leading-3 mt-4">Copyright 2011 - 2022 © România Roleplay</p>
                    <a href="mailto:contact@ro-rp.ro" className="contact font-light text-sm text-slate-800">HOME OF ROLEPLAY S.R.L. J40/19017/2021</a>
                    <div className="flex flex-row gap-4">
                        <a href="https://ucp.ro-rp.ro/register" className="btn-sm bg-primary text-sm text-slate-800 outline-primary w-max mt-5">Înregistrare</a>
                        <a href="https://ucp.ro-rp.ro/login" className="btn-sm bg-white text-sm text-slate-800 outline-primary w-max mt-5">Autentificare</a>
                    </div>
                </div>
                <div className="footer-content flex flex-col md:flex-row gap-10 md:gap-[200px] text-slate-700 mt-10 2xl:mt-0">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <p className="font-semibold">
                                Legal
                            </p>
                        </li>
                        <li className="hover:text-black ease-in-out duration-300">
                            <a href="https://ucp.ro-rp.ro/legal/terms">Termeni și confidențialitate</a>
                        </li>
                        <li className="hover:text-black ease-in-out duration-300">
                            <a href="https://ucp.ro-rp.ro/legal/cookies">Politica privind fișierele cookies</a>
                        </li>
                        <li className="hover:text-black ease-in-out duration-300">
                            <a href="https://anpc.ro/">A.N.P.C.</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <p className="font-semibold">
                                Comunitate
                            </p>
                        </li>
                        <li className="hover:text-black ease-in-out duration-300">
                            <a href="https://ro-rp.ro/forum/">Forums</a>
                        </li>
                        <li className="hover:text-black ease-in-out duration-300">
                            <a href="https://wiki.ro-rp.ro/">Wikipedia</a>
                        </li>
                        <li className="hover:text-black ease-in-out duration-300">
                            <a href="https://ucp.ro-rp.ro/">User Control Panel</a>
                        </li>
                        <li className="hover:text-black ease-in-out duration-300">
                            <a href="https://ro-rp.ro/discord/">Discord</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <p className="font-semibold">
                                Facțiuni
                            </p>
                        </li>
                        <li className="hover:text-black ease-in-out duration-300">
                            <a href="https://lspd.ro-rp.ro/">Los Santos Police Site</a>
                        </li>
                        <li className="hover:text-black ease-in-out duration-300">
                            <a href="https://lsfd.ro-rp.ro/">Los Santos Fire Site</a>
                        </li>
                        <li className="hover:text-black ease-in-out duration-300">
                            <a href="https://lsgov.ro-rp.ro/">Los Santos Government Site</a>
                        </li>
                        <li className="hover:text-black ease-in-out duration-300">
                            <a href="https://jsa.ro-rp.ro/">Judiciary San Andreas Site</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}