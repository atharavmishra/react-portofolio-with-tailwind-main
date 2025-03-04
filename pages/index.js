import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFilePdf,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import oraFinanceMockup from "../public/ora_finance_mockup.png";
import oraFinanceMockup2 from "../public/ora_finance_mockup_2.png";
import oraFinanceMockup3 from "../public/ora_finance_mockup3.png";
import nitr1 from "../public/nitr1.png";
import nitr2 from "../public/nitr2.png";
import nitr3 from "../public/nitr3.png";
import wallpaper_app1 from "../public/wallpaper_app1.png";
import wallpaper_app2 from "../public/wallpaper2.png";
import wallpaper_app3 from "../public/wallpaper3.png";
import nnpic1 from "../public/nnpic5.webp";
import nnpic2 from "../public/nnpic1.webp";
import nnpic3 from "../public/nnpic4.webp";
import ustore1 from "../public/ustore_1.png";
import ustore2 from "../public/ustore_2.png";
import ustore3 from "../public/ustore_3.png";
import Image from "next/image";
import androidStudioIcon from "../public/android_studio_icon.png";
import firebaseIcon from "../public/firebase.png";
import javaIcon from "../public/java.png";
import kotlinIcon from "../public/kotlin_logo.png";
import instagramIcon from "../public/instagram.png";
import flutterIcon from "../public/flutter.png";
import dartIcon from "../public/dart.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const handleRedirect = () => {
    window.open('https://github.com/atharavmishra', '_blank');
  };

  const handleRedirectOraLive = () => {
    window.open('https://play.google.com/store/apps/details?id=com.app.orafinancecustomer&pcampaignid=web_share', '_blank');
  };

  const handleRedirectNitr = () => {
    window.open('https://play.google.com/store/apps/details?id=com.nitrkl.hellonitr&pcampaignid=web_share', '_blank');
  };

  const handleRedirectUstore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.unnatiagro.agripos&pcampaignid=web_share', '_blank');
  };

  const handleRedirectWallpaperApp = () => {
    window.open('https://play.google.com/store/apps/details?id=com.dktlabs.wallpapers&pcampaignid=web_share', '_blank');
  };

  const handleRedirectUnnatiWeb = () => {
    window.open('https://queuebuster.co/', '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/atharv_mishra.pdf';
    link.download = 'AtharvResume.pdf';
    link.click();
  };

  const handleRedirectLinkedIn = () => {
    window.open('https://www.linkedin.com/in/atharv-mishra-1149821a9', '_blank');
  };

  const handleRedirectInstagram = () => {
    window.open('https://www.instagram.com/andro._world/', '_blank');
  };
  const TechStack = () => {
    return (
      <div className="w-full p-6 mx-auto mt-10 shadow-2xl rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white transform transition-all duration-500 hover:scale-105">
        <h3 className="text-3xl py-4 font-semibold text-center">Tech Stack</h3>
        <div className="flex flex-wrap justify-center items-center mt-6 lg:space-x-6">
          <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-4 m-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl w-28 h-32 md:w-32 md:h-36">
            <div className="w-16 h-16">
              <Image src={androidStudioIcon} layout="responsive" objectFit="contain" />
            </div>
            <p className="mt-2 text-gray-900 dark:text-gray-200 font-semibold">Android Studio</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-4 m-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl w-28 h-32 md:w-32 md:h-36">
            <div className="w-16 h-16">
              <Image src={kotlinIcon} layout="responsive" objectFit="contain" />
            </div>
            <p className="mt-3 text-gray-900 dark:text-gray-200 font-semibold">Kotlin</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-4 m-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl w-28 h-32 md:w-32 md:h-36">
            <div className="w-14 h-14">
              <Image src={javaIcon} layout="responsive" objectFit="contain" />
            </div>
            <p className="mt-3 text-gray-900 dark:text-gray-200 font-semibold mt-9">Java</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-4 m-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl w-28 h-32 md:w-32 md:h-36">
            <div className="w-16 h-16 mt-3">
              <Image src={firebaseIcon} layout="responsive" objectFit="contain" />
            </div>
            <p className="mt-3 text-gray-900 dark:text-gray-200 font-semibold">Firebase</p>
          </div>
          {/* Flutter */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-4 m-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl w-28 h-32 md:w-32 md:h-36">
            <div className="w-16 h-16">
              <Image src={flutterIcon} layout="responsive" objectFit="contain" />
            </div>
            <p className="mt-3 text-gray-900 dark:text-gray-200 font-semibold">Flutter</p>
          </div>
          {/* Dart */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-4 m-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl w-28 h-32 md:w-32 md:h-36">
            <div className="w-16 h-16">
              <Image src={dartIcon} layout="responsive" objectFit="contain" />
            </div>
            <p className="mt-3 text-gray-900 dark:text-gray-200 font-semibold">Dart</p>
          </div>
        </div>
      </div>
    );
  };
return (
    <div className={`${darkMode ? "dark" : ""} w-full h-full`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developed by Atharv</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 dark:from-teal-800 dark:via-teal-1000 dark:to-cyan-800 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                  onClick={handleRedirect}
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex justify-center mt-20">
            <div className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
              <Image src={deved} layout="responsive" objectFit="cover" />
            </div>
          </div>
          <div className="text-center md:p-10 md:py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-black bg-clip-text text-transparent">
              Atharv Mishra
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Android App developer.
            </h3>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl text-justify">
              Hey there! I'm an Android developer with 3 years of experience of crafting awesome mobile applications. With a passion for turning ideas into stunning apps, I create magic on small screens and bring apps to life with my skills. Apart from virtual world I love working out, singing and making memes I own and manage an Instagram page where I post memes about programming.</p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <div className="flex justify-center">
                <AiFillFilePdf
                  className="text-5xl text-gray-600 dark:text-gray-400 cursor-pointer cursor-pointer transition-transform transform hover:scale-110 hover:shadow-xl"
                  onClick={handleDownload}
                />
              </div>
              <div className="flex justify-center">
                <AiFillLinkedin
                  className="text-5xl text-gray-600 dark:text-gray-400 cursor-pointer cursor-pointer transition-transform transform hover:scale-110 hover:shadow-xl"
                  onClick={handleRedirectLinkedIn}
                />
              </div>

              <div className="flex justify-center">
                <AiFillGithub
                  className=" cursor-pointer cursor-pointer transition-transform transform hover:scale-110 hover:shadow-xl"
                  onClick={handleRedirect}
                />
              </div>
            </div>
            <div className="w-full p-6 mt-10 shadow-2xl rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white transform transition-all duration-500 hover:scale-105">
              <h3 className="text-3xl py-4 font-semibold text-center">Currently</h3>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🏠</span>
                  <p>Living in <span className="font-semibold">Noida</span></p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">💼</span>
                  <p>Working for <a className="text-cyan-300 hover:underline cursor-pointer" onClick={handleRedirectUnnatiWeb}
                  >QueueBuster</a>

                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">⏰</span>
                  <p>Developing <a className="text-purple-300">a social service app using JetPack Compose</a></p>
                </div>
                <div className="flex items-center space-x-4">
                  <div style={{ width: '28px', height: '28px', position: 'relative' }}>
                    <Image src={instagramIcon} layout="responsive" objectFit="contain" />
                  </div>
                  <p>My <a href="#" className="text-green-300 hover:underline" onClick={handleRedirectInstagram} >page</a></p>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-3">
            <h3 className="text-3xl py-1 dark:text-white ">My Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I've been developing Android apps for over 4 years now, and I really enjoy creating mobile applications that users love to interact with. I'm skilled in languages like Java and Kotlin, and I use tools like Android Studio to bring ideas to life. From designing how apps look and feel to connecting them with online services, I focus on making sure everything works smoothly. I'm always learning new ways to improve user experiences and make apps more reliable and efficient.
            </p>

          </div>
          <div className="lg:flex gap-5">
            <div className="text-start md:p-10 rounded-xl mt-10 flex-1 flex flex-wrap" style={{ height: 'auto' }}>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={oraFinanceMockup2} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={oraFinanceMockup} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={oraFinanceMockup3} layout="responsive" objectFit="cover" />
                </div>
              </div>


              <div className="w-full p-6 mx-auto mt-10 shadow-2xl rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white transform transition-all duration-500 hover:scale-105">
                <h3 className="text-4xl py-2 text-gray-300 font-medium dark:text-gray-400 md:text-3xl">
                  Ora Finance App
                </h3>
                <p className="py-2 text-white">
                  Developed end-to-end loan application by following best practices with almost no code warnings.The app streamlines the process of KYC, e-Sign, loan repayments, loan status, customer ledger and much more with really elegant and user friendly UI design.
                </p>
                <div className="flex justify-center mt-6">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
                    href="#"
                    onClick={handleRedirectOraLive}
                  >
                    Live App
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="lg:flex gap-5">
            <div className="text-start md:p-10 rounded-xl mt-10 flex-1 flex flex-wrap" style={{ height: 'auto' }}>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={nitr3} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={nitr1} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={nitr2} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full p-6 mx-auto mt-10 shadow-2xl rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white transform transition-all duration-500 hover:scale-105">
                <h3 className="text-3xl text-gray-300 font-medium dark:text-gra-400 md:text-3xl">
                  Hello NITR(NIT Rourkela) Flutter App
                </h3>
                <p className="py-2 text-white">
                  Built an app usign Flutter for NIT Rourkela that bridges the communication gap between faculty and students.
                </p>
                <div className="flex justify-center mt-6">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
                    href="#"
                    onClick={handleRedirectNitr}
                  >
                    Live App
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="lg:flex gap-5">
            <div className="text-start md:p-10 rounded-xl mt-10 flex-1 flex flex-wrap" style={{ height: 'auto' }}>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={ustore1} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={ustore2} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={ustore3} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full p-6 mx-auto mt-10 shadow-2xl rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white transform transition-all duration-500 hover:scale-105">
                <h3 className="text-3xl text-gray-300 font-medium dark:text-gra-400 md:text-3xl">
                  U-Store App
                </h3>
                <p className="py-2 text-white">
                  U-Store is an e-commerce app with over 100K+ Downloads. Developed multiple modules inside the app, implemented secure payment gateway, migrated the entire code from java to Kotlin and revamped the UI.
                </p>
                <div className="flex justify-center mt-6">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
                    href="#"
                    onClick={handleRedirectUstore}
                  >
                    Live App
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="lg:flex gap-5">
            <div className="text-start md:p-10 rounded-xl mt-10 flex-1 flex flex-wrap" style={{ height: 'auto' }}>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={wallpaper_app1} layout="responsive" objectFit="cover" />
                </div>
              </div>

              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={wallpaper_app2} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={wallpaper_app3} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className=" w-full p-6 mx-auto mt-10 shadow-2xl rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-100 dark:text-gray-200 transform transition-all duration-500 hover:scale-105">
                <h3 className="text-4xl py-2 text-gray-300 font-medium dark:text-gray-400 md:text-4xl">
                  Wallpaper App
                </h3>
                <p className="py-2 text-white">
                  Developed a wallpaper app where you can browse through millions of High Quality pictures and use them as wallpaper.
                </p>
                <div className="flex justify-center mt-6">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
                    href="#"
                    onClick={handleRedirectWallpaperApp}
                  >
                    Live App
                  </a>
                </div>
              </div>


            </div>
          </div>

          <div className="lg:flex gap-5">
            <div className="text-start md:p-10 rounded-xl mt-10 flex-1 flex flex-wrap" style={{ height: 'auto' }}>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={nnpic1} layout="responsive" objectFit="cover" />
                </div>
              </div>

              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={nnpic2} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ width: '100%', position: 'relative' }}>
                  <Image src={nnpic3} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className=" w-full p-6 mx-auto mt-10 shadow-2xl rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-100 dark:text-gray-200 transform transition-all duration-500 hover:scale-105">
                <h3 className="text-4xl py-2 text-gray-300 font-medium dark:text-gray-400 md:text-4xl">
                  No Names Social Media App
                </h3>
                <p className="py-2 text-white">
                 Led the development of social media app which user can use to socialise anonymously.
                </p>
                <div className="flex justify-center mt-6">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
                    href="#"
                    onClick={handleRedirectWallpaperApp}
                  >
                    Live App
                  </a>
                </div>
              </div>


            </div>
          </div>
        </section>
<TechStack />
        <footer className="text-gray-800 dark:text-gray-200 py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-gray-800 dark:text-gray-200">Atharv Mishra</h2>
                <p className="text-gray-800 dark:text-gray-200">Android App Developer</p>
                <p className="text-gray-800 dark:text-gray-200">
                  Email:
                  <a href="mailto:atharvmishra77@gmail.com" className="hover:text-gray-400 transition-colors duration-300 underline text-blue-500">atharvmishra77@gmail.com</a>
                </p>
                <p className="text-gray-800 dark:text-gray-200">Mobile: +91-8755328239</p>
              </div>
              <div className="flex space-x-6">
                <a href={handleRedirect} className="hover:text-gray-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub
                    className="cursor-pointer"
                    onClick={handleRedirect}
                    size={30} />
                </a>
                <a href={handleRedirectLinkedIn} className="hover:text-gray-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin
                    className="cursor-pointer"
                    onClick={handleRedirectLinkedIn}
                    size={30} />
                </a>
                <a className="hover:text-gray-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  <AiFillFilePdf
                    className="cursor-pointer"
                    onClick={handleDownload}
                    size={30}
                  />
                </a>
              </div>
            </div>
            <div className="text-gray-800 dark:text-gray-200 border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-800 dark:text-gray-200 text-center md:text-left mb-4 md:mb-0">© 2024 Atharv Mishra. All rights reserved.</p>
                <p className="text-gray-800 dark:text-gray-200 text-center md:text-right">Designed with <span className="text-red-500">❤</span> by Atharv</p>
              </div>
            </div>
          </div>
        </footer>





        {/* <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
