import React, { Component } from 'react'
import Image from "next/image";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class index extends Component {
  render() {
    return (

      <>
        <header className="App-header p-3">
          <nav className="navbar navbar-expand-lg" aria-label='Main navigation'>
            <div className="container">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="row justify-content-start">
                  <div className="col">
                    <Image src='/logo.png' width={70} height={32} alt="joker" />
                  </div>
                  <div className="col text-white">
                    <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                  <div className="col text-white">
                    <a className="btn btn-light" href="#" role="button">Subscribe</a>
                  </div>
                  <div className="col text-white">
                    <a className="btn btn-light" href="#" role="button">19:00</a>
                  </div>
                  <div className="col text-white">
                    <Link href="/dns">DNS</Link>
                  </div>
                  <div className="col text-white">
                    <Link href="/sitemap">Sitemap</Link>
                  </div>
                  <div className="col text-white">
                    <Link href={"/webmasters"}>For webmasters</Link>
                  </div>
                  <div className="col text-white">
                    <a className="btn btn-success" href="#" role="button">Add your stream</a>
                  </div>
                  <div className="col text-white">
                    <a className="btn btn-light" href="#" role="button">Subscribe</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="bg-darkBlueOpacity">
            <div className="container">
              <div className='navbar'>
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <Link href="/football">
                      <a className='nav-link' aria-current="page" href="/football">
                        <svg width="16.5" height="16.5" xmlns="http://www.w3.org/2000/svg" className="fill-violet h-[16px] w-[16px]" viewBox="0 0 20 20" fill="currentColor">
                          <path d="m17 2.9c-3.9-3.9-10.2-3.9-14.1 0s-3.9 10.2 0 14.1c2.5 2.5 6.2 3.5 9.6 2.6s6.1-3.6 7-7c1-3.5 0-7.2-2.5-9.7zm.4 2.8c.6 1.1 1 2.2 1.1 3.4l-1.8-1zm-1.4-1.8c.1.1.3.3.4.4l-1.1 3.6-1.3.4-3.3-2.4v-1.4l3.2-2.2c.7.4 1.5.9 2.1 1.6zm-6-2.5c.8 0 1.6.1 2.3.3l-2.3 1.6-2.3-1.6c.7-.2 1.5-.3 2.3-.3zm-6.1 2.5c.6-.7 1.4-1.2 2.2-1.6l3.2 2.2v1.4l-3.3 2.4-1.4-.4-1.1-3.6c.1-.1.3-.3.4-.4zm-1.4 1.8.7 2.4-1.8 1c.1-1.2.5-2.4 1.1-3.4zm1.4 10.3c-.1-.1-.1-.2-.2-.2h2l.7 1.9c-1-.4-1.8-1-2.5-1.7zm2-1.6h-3.3c-.7-1.1-1.1-2.4-1.2-3.7l2.8-1.5 1.4.4 1.3 3.9zm6 3.9c-1.3.3-2.7.3-4 0l-1-3 1.1-1.1h3.8l1.1 1.1zm0-5.4h-3.9l-1.1-3.7 3.1-2.2 3.1 2.3zm4.1 3.1c-.7.7-1.5 1.3-2.4 1.7l.7-1.9h2c-.1.1-.2.2-.3.2zm-2-1.6-.9-.9 1.3-3.9 1.4-.4 2.8 1.5c-.1 1.3-.5 2.6-1.2 3.7z">
                          </path></svg>
                        <span className="sport_nav_link">Football</span></a></Link>

                  </li>

                  <li className='nav-item'>
                    <Link href="/nfl">
                      <a className='nav-link' href="/nfl">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.6328 8.2299C17.9158 7.08086 16.9486 6.10847 15.8035 5.38522C14.6583 4.66197 13.3647 4.20651 12.0191 4.05279C10.6734 3.89906 9.31037 4.05104 8.03161 4.49739C6.75285 4.94374 5.59132 5.67295 4.6336 6.63067C3.67588 7.58839 2.94667 8.74992 2.50032 10.0287C2.05397 11.3074 1.90199 12.6705 2.05572 14.0161C2.20944 15.3618 2.6649 16.6554 3.38815 17.8006C4.1114 18.9457 5.08379 19.9128 6.23283 20.6299C6.89619 20.3136 7.61808 20.1387 8.35266 20.1163C9.08724 20.0939 9.81845 20.2245 10.4998 20.4999C11.0169 20.784 11.5993 20.9276 12.1892 20.9164C12.779 20.9052 13.3556 20.7396 13.8615 20.436C14.3674 20.1325 14.7849 19.7017 15.0723 19.1865C15.3598 18.6713 15.5072 18.0898 15.4998 17.4999" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M20.5 9.5C20.5 9.5 13.5 10.5 12.5 15.5H20.5C20.7652 15.5 21.0196 15.6054 21.2071 15.7929C21.3946 15.9804 21.5 16.2348 21.5 16.5V19.5C21.5 19.7652 21.3946 20.0196 21.2071 20.2071C21.0196 20.3946 20.7652 20.5 20.5 20.5H19.5C19.5 20.5 16.5 20.5 16.5 12.5" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M10.4789 15.8779C10.2065 16.0473 9.88992 16.1321 9.5693 16.1215C9.24867 16.111 8.93837 16.0057 8.67762 15.8188C8.41688 15.6319 8.2174 15.3719 8.10442 15.0717C7.99143 14.7714 7.97002 14.4444 8.04288 14.132C8.11574 13.8196 8.2796 13.5358 8.51374 13.3165C8.74789 13.0973 9.0418 12.9523 9.35831 12.9001C9.67482 12.8478 9.99972 12.8906 10.2919 13.023C10.5841 13.1554 10.8305 13.3715 10.9999 13.6439" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="sport_nav_link">NFL</span></a></Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/basketball"><a className='nav-link' href="/basketball">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.833C17.2467 21.833 21.5 17.5797 21.5 12.333C21.5 7.0863 17.2467 2.83301 12 2.83301C6.75329 2.83301 2.5 7.0863 2.5 12.333C2.5 17.5797 6.75329 21.833 12 21.833Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.13721 13.3662C7.08721 14.6662 15.5042 15.0572 20.0082 13.6052" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.0178 4.66113C9.00864 9.67443 8.93309 15.2553 10.8058 20.3211" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.6809 6.979C10.0979 10.627 10.9299 17.479 16.6559 18.76" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.50586 8.22998C6.56686 9.64298 8.59586 13.18 5.83486 16.877" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="sport_nav_link">Basketball</span></a></Link>
                  </li>

                  <li className='nav-item'>
                    <Link href="/handball"><a className='nav-link' href="/handball">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7502 7.72508C16.3436 7.72508 17.6352 6.43342 17.6352 4.84008C17.6352 3.24674 16.3436 1.95508 14.7502 1.95508C13.1569 1.95508 11.8652 3.24674 11.8652 4.84008C11.8652 6.43342 13.1569 7.72508 14.7502 7.72508Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.6111 2.47776C18.9396 2.1567 19.3699 1.96049 19.8277 1.92306C20.2854 1.88563 20.7419 2.00932 21.1181 2.27276L22.6071 3.76076C22.8713 4.1366 22.9959 4.5929 22.9594 5.05082C22.9228 5.50875 22.7275 5.93954 22.4071 6.26876C20.9021 7.84176 17.5481 11.3138 16.0911 12.5468C13.8631 14.4348 10.6351 16.1068 6.80314 20.0578C6.69936 20.1656 6.62029 20.2947 6.57142 20.4361C6.52255 20.5775 6.50505 20.7279 6.52014 20.8768V20.8768C6.54092 21.0495 6.51627 21.2247 6.44862 21.385C6.38098 21.5453 6.27268 21.6852 6.13442 21.7908C5.99617 21.8964 5.83274 21.9642 5.6603 21.9873C5.48785 22.0105 5.31235 21.9882 5.15114 21.9228C4.67789 21.6905 4.25065 21.3744 3.89014 20.9898" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.89008 20.99C3.50607 20.6308 3.19001 20.2053 2.95708 19.734C2.89181 19.573 2.86959 19.3978 2.89261 19.2257C2.91562 19.0535 2.98308 18.8903 3.08834 18.7522C3.1936 18.614 3.33303 18.5056 3.49291 18.4377C3.65278 18.3699 3.82757 18.3448 4.00008 18.365C4.14881 18.3801 4.29904 18.3626 4.44032 18.3138C4.5816 18.2649 4.71051 18.1858 4.81808 18.082C8.77008 14.249 10.4421 11.021 12.3291 8.79297" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.58105 18.623L7.30905 19.35" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.8252 14.8838L11.1442 16.2028" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                      </svg> <span className="sport_nav_link">Handball</span></a></Link>
                  </li>

                  <li className='nav-item'>
                    <Link href="/hockey"  ><a className='nav-link' href="/hockey">
                      <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.1998 15.606C3.48853 15.5436 2.82015 15.2392 2.30608 14.7437C1.79201 14.2482 1.46332 13.5915 1.3748 12.883L1.0168 10.014C0.975947 9.68969 1.0121 9.36033 1.12232 9.05262C1.23254 8.74491 1.41372 8.46751 1.65118 8.2429C1.88864 8.0183 2.17569 7.85282 2.48906 7.75988C2.80242 7.66694 3.13328 7.64916 3.4548 7.70798L11.0898 9.09998C12.286 9.31966 13.5214 9.11309 14.5811 8.5162C15.6408 7.91931 16.4577 6.96986 16.8898 5.83298L18.8818 0.60498" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.9994 1.4751L18.5864 11.0301C18.1819 12.1648 17.5019 13.1812 16.6074 13.9881" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.921 16.2827C11.4494 16.3387 10.9749 16.3665 10.5 16.3657C8.015 16.3657 6 15.6337 6 14.7297C6 13.8257 8.015 13.0938 10.5 13.0938C12.985 13.0938 15 13.8257 15 14.7297C15 15.1647 14.532 15.5608 13.769 15.8538" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 14.73V17.759C6 18.659 8.015 19.395 10.5 19.395C12.985 19.395 15 18.663 15 17.759V14.73" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.8145 6.16113L19.7445 7.63213" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.2705 2.3418L21.0455 3.6428" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="sport_nav_link">Hockey</span></a></Link>
                  </li>

                  <li className='nav-item'>
                    <Link href="/motorsport"  ><a className='nav-link' href="/motorsport">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.9528 14.0879C17.2368 16.4589 15.9758 9.44191 12.2598 11.8139L14.3068 3.98991C18.0228 1.61891 19.2838 8.63491 22.9998 6.26391L20.9528 14.0879Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.9081 6.19287L17.8701 13.9839" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.3539 4.07715L15.3179 11.8611" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.3071 7.99014C17.0071 5.63014 18.2711 12.5661 21.9441 10.2991" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.10498 6.18408L6.14498 13.9841" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.66113 4.07715L8.70013 11.8531" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.7082 7.98978C7.00822 5.62678 5.74022 12.5898 2.05322 10.2898" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.98584 20.5068L12.4868 10.9438" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.066 9.23691L9.693 3.98991C5.977 1.61891 4.716 8.63491 1 6.26391L3.047 14.0879C6.04 15.9999 7.44 11.8169 9.814 11.3569" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.0138 20.5069L12.7378 15.6279" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="sport_nav_link">Motorsport</span></a></Link>
                  </li>

                  <li className='nav-item'>
                    <Link href="/rugby"  ><a className='nav-link' href="/rugby">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.34282 6.34282C4.63233 8.09063 3.46943 10.2999 2.9969 12.6993C2.52436 15.0988 2.76276 17.584 3.68282 19.8498C3.7243 19.9556 3.78719 20.0517 3.86755 20.1321C3.94791 20.2124 4.04401 20.2753 4.14982 20.3168C6.41567 21.2369 8.90088 21.4753 11.3003 21.0027C13.6998 20.5302 15.909 19.3673 17.6568 17.6568C19.3673 15.909 20.5302 13.6998 21.0027 11.3003C21.4753 8.90088 21.2369 6.41567 20.3168 4.14982C20.2753 4.04401 20.2124 3.94791 20.1321 3.86755C20.0517 3.78719 19.9556 3.7243 19.8498 3.68282C17.584 2.76276 15.0988 2.52436 12.6993 2.9969C10.2999 3.46943 8.09063 4.63233 6.34282 6.34282Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.3202 9.68007C13.5952 8.54208 12.6299 7.5765 11.4922 6.85107" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.6298 11.37C11.9041 10.2321 10.9382 9.2669 9.7998 8.54199" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.9388 13.0609C10.5807 12.4914 10.1582 11.965 9.67984 11.4919C9.20634 11.0138 8.67995 10.591 8.11084 10.2319" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.91797 12.453C10.3106 10.5634 11.9793 8.89381 13.868 7.5" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.2998 14.0439C4.2998 14.0439 8.6598 15.2659 11.3168 20.9999" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.167 10.1389C18.7692 8.90665 16.7849 6.99913 15.459 4.65186" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="sport_nav_link">Rugby</span></a></Link>
                  </li>

                  <li className='nav-item'>
                    <Link href="/tennis"  ><a className='nav-link' href="/tennis">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.755 7.11307L16.007 6.61307C15.069 6.41568 14.0956 6.46775 13.184 6.76407C12.1052 7.15066 11.1722 7.86106 10.5126 8.79813C9.85304 9.73519 9.49902 10.8531 9.49902 11.9991C9.49902 13.145 9.85304 14.263 10.5126 15.2C11.1722 16.1371 12.1052 16.8475 13.184 17.2341C14.0956 17.5304 15.069 17.5825 16.007 17.3851L18.755 16.8851" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 15.4001C5.45933 14.9642 5.82071 14.4357 6.06019 13.8495C6.29966 13.2633 6.41174 12.6329 6.389 12.0001C6.41187 11.3673 6.29985 10.7368 6.06037 10.1506C5.82089 9.56443 5.45943 9.03588 5 8.6001" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                      </svg><span className="sport_nav_link">Tennis</span></a></Link>
                  </li>

                  <li className='nav-item'>
                    <Link href="/volleyball"  ><a className='nav-link' href="/volleyball">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.498C17.2456 21.498 21.498 17.2456 21.498 12C21.498 6.75435 17.2456 2.50195 12 2.50195C6.75435 2.50195 2.50195 6.75435 2.50195 12C2.50195 17.2456 6.75435 21.498 12 21.498Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.9189 6.97119C14.6023 7.08109 16.2402 7.56382 17.714 8.38446C19.1879 9.20511 20.4609 10.3431 21.4409 11.7162" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 12C13.6248 12.1812 15.1946 12.6968 16.6105 13.5143C18.0263 14.3317 19.2577 15.4334 20.227 16.75" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.0102 12C11.0408 13.3165 9.80942 14.4181 8.39357 15.2356C6.97772 16.053 5.40801 16.5687 3.7832 16.75" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.0002 12C11.3447 10.5022 11.0063 8.88495 11.0063 7.25C11.0063 5.61505 11.3447 3.9978 12.0002 2.5" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.8998 15.311C14.9627 16.7138 13.7255 17.8907 12.2778 18.7566C10.8301 19.6226 9.20795 20.1559 7.52881 20.318" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.18491 13.7178C6.4385 12.2051 6.03773 10.5454 6.01162 8.85882C5.9855 7.17221 6.33469 5.50089 7.03391 3.96582" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="sport_nav_link">Volleyball</span></a></Link>
                  </li>

                  <li className='nav-item'>
                    <Link href="/esports"  ><a className='nav-link' href="/esports">
                      <svg width="21" height="21" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7001 2.37583L13.6591 4.31883C13.6756 4.35139 13.6996 4.37955 13.7292 4.40095C13.7588 4.42234 13.793 4.43636 13.8291 4.44183L15.9731 4.75383C16.0148 4.75979 16.0539 4.77729 16.086 4.80435C16.1182 4.8314 16.1422 4.86693 16.1552 4.90691C16.1682 4.94689 16.1698 4.98971 16.1597 5.03053C16.1496 5.07134 16.1283 5.10851 16.0981 5.13783L14.5491 6.65083C14.5228 6.6763 14.503 6.70786 14.4917 6.74273C14.4804 6.7776 14.4778 6.81472 14.4841 6.85083L14.8501 8.98683C14.8571 9.02825 14.8524 9.07079 14.8365 9.10967C14.8206 9.14856 14.7942 9.18225 14.7602 9.20697C14.7263 9.23168 14.6861 9.24645 14.6442 9.2496C14.6023 9.25276 14.5604 9.24418 14.5231 9.22483L12.6051 8.21483C12.5727 8.19808 12.5367 8.18934 12.5001 8.18934C12.4636 8.18934 12.4276 8.19808 12.3951 8.21483L10.4771 9.22383C10.4399 9.24318 10.3979 9.25176 10.356 9.2486C10.3142 9.24545 10.274 9.23068 10.24 9.20597C10.2061 9.18125 10.1797 9.14756 10.1638 9.10868C10.1479 9.06979 10.1432 9.02725 10.1501 8.98583L10.5161 6.84983C10.5225 6.81372 10.5199 6.7766 10.5086 6.74173C10.4972 6.70686 10.4775 6.6753 10.4511 6.64983L8.90014 5.13783C8.87 5.10851 8.84868 5.07134 8.8386 5.03053C8.82852 4.98971 8.83007 4.94689 8.84308 4.90691C8.8561 4.86693 8.88005 4.8314 8.91223 4.80435C8.9444 4.77729 8.98352 4.75979 9.02514 4.75383L11.1691 4.44183C11.2052 4.43636 11.2395 4.42234 11.2691 4.40095C11.2986 4.37955 11.3227 4.35139 11.3391 4.31883L12.3001 2.37583C12.3191 2.3391 12.3477 2.3083 12.383 2.28679C12.4183 2.26528 12.4588 2.25391 12.5001 2.25391C12.5415 2.25391 12.582 2.26528 12.6173 2.28679C12.6525 2.3083 12.6812 2.3391 12.7001 2.37583V2.37583Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 21.5V14.5H9V21.5" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 21.5V12.5H16V21.5" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 21.5V16.5H23V21.5" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                      </svg><span className="sport_nav_link">eSports</span></a></Link>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Other</a>
                    <ul className="dropdown-menu dropdown-menu-dark mx-0 border-0 shadow w-220px">
                      <li className='nav-item'>
                        <Link href="/darts"  ><a className='nav-link' href="/darts">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1001 9.1772L9.10013 11.3932C9.02967 11.4717 8.98583 11.5704 8.97487 11.6753C8.96392 11.7802 8.98641 11.8859 9.03913 11.9772L10.5301 14.5592C10.5828 14.6508 10.6631 14.7234 10.7596 14.7665C10.8561 14.8096 10.9637 14.8211 11.0671 14.7992L13.9831 14.1792C14.0866 14.1574 14.1804 14.1033 14.2512 14.0248C14.322 13.9463 14.3661 13.8473 14.3771 13.7422L14.6881 10.7762C14.6991 10.6712 14.6766 10.5654 14.6238 10.4739C14.571 10.3825 14.4906 10.3101 14.3941 10.2672L11.6741 9.0552C11.5778 9.01244 11.4704 9.00122 11.3673 9.02313C11.2643 9.04504 11.1707 9.09896 11.1001 9.1772V9.1772Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.6729 6.41504L17.7919 8.40004C17.7965 8.47742 17.819 8.55266 17.8577 8.61982C17.8964 8.68699 17.9502 8.74423 18.0149 8.78704L19.6729 9.88704" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.8458 8.625L14.6318 10.481" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.0642 15.6689L17.2162 16.3949C17.1437 16.4233 17.0789 16.4681 17.0268 16.5259C16.9747 16.5838 16.9368 16.6529 16.9162 16.7279L16.3882 18.6419" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.016 16.5169L14.252 14.0269" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.6931 19.8518L9.43206 18.3178C9.38262 18.2579 9.31992 18.2104 9.24893 18.179C9.17794 18.1476 9.10061 18.1331 9.02306 18.1368L7.03906 18.2248" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.25488 18.1661L10.7679 14.7681" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.12793 13.1841L5.19993 11.5101C5.24179 11.4446 5.26783 11.3703 5.27599 11.2931C5.28415 11.2159 5.2742 11.1378 5.24693 11.0651L4.54693 9.20605" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.28711 11.2939L8.97811 11.6819" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.44189 4.87888L10.3639 5.37888C10.439 5.39832 10.5175 5.40004 10.5934 5.3839C10.6692 5.36776 10.7403 5.3342 10.8009 5.28587L12.3539 4.04688" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.5972 5.39795L11.3662 9.01795" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <use xlinkHref="#files"></use>
                          </svg><span className="sport_nav_link">Darts</span></a></Link>
                      </li>

                      <li className='nav-item'>
                        <Link href="/snooker"  ><a className='nav-link' href="/snooker">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1001 9.1772L9.10013 11.3932C9.02967 11.4717 8.98583 11.5704 8.97487 11.6753C8.96392 11.7802 8.98641 11.8859 9.03913 11.9772L10.5301 14.5592C10.5828 14.6508 10.6631 14.7234 10.7596 14.7665C10.8561 14.8096 10.9637 14.8211 11.0671 14.7992L13.9831 14.1792C14.0866 14.1574 14.1804 14.1033 14.2512 14.0248C14.322 13.9463 14.3661 13.8473 14.3771 13.7422L14.6881 10.7762C14.6991 10.6712 14.6766 10.5654 14.6238 10.4739C14.571 10.3825 14.4906 10.3101 14.3941 10.2672L11.6741 9.0552C11.5778 9.01244 11.4704 9.00122 11.3673 9.02313C11.2643 9.04504 11.1707 9.09896 11.1001 9.1772V9.1772Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.6729 6.41504L17.7919 8.40004C17.7965 8.47742 17.819 8.55266 17.8577 8.61982C17.8964 8.68699 17.9502 8.74423 18.0149 8.78704L19.6729 9.88704" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.8458 8.625L14.6318 10.481" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.0642 15.6689L17.2162 16.3949C17.1437 16.4233 17.0789 16.4681 17.0268 16.5259C16.9747 16.5838 16.9368 16.6529 16.9162 16.7279L16.3882 18.6419" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.016 16.5169L14.252 14.0269" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.6931 19.8518L9.43206 18.3178C9.38262 18.2579 9.31992 18.2104 9.24893 18.179C9.17794 18.1476 9.10061 18.1331 9.02306 18.1368L7.03906 18.2248" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.25488 18.1661L10.7679 14.7681" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.12793 13.1841L5.19993 11.5101C5.24179 11.4446 5.26783 11.3703 5.27599 11.2931C5.28415 11.2159 5.2742 11.1378 5.24693 11.0651L4.54693 9.20605" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.28711 11.2939L8.97811 11.6819" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.44189 4.87888L10.3639 5.37888C10.439 5.39832 10.5175 5.40004 10.5934 5.3839C10.6692 5.36776 10.7403 5.3342 10.8009 5.28587L12.3539 4.04688" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.5972 5.39795L11.3662 9.01795" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <use xlinkHref="#files"></use>
                          </svg><span className="sport_nav_link">Snooker</span></a></Link>
                      </li>

                      <li className='nav-item'>
                        <Link href="/futsal"  ><a className='nav-link' href="/futsal">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1001 9.1772L9.10013 11.3932C9.02967 11.4717 8.98583 11.5704 8.97487 11.6753C8.96392 11.7802 8.98641 11.8859 9.03913 11.9772L10.5301 14.5592C10.5828 14.6508 10.6631 14.7234 10.7596 14.7665C10.8561 14.8096 10.9637 14.8211 11.0671 14.7992L13.9831 14.1792C14.0866 14.1574 14.1804 14.1033 14.2512 14.0248C14.322 13.9463 14.3661 13.8473 14.3771 13.7422L14.6881 10.7762C14.6991 10.6712 14.6766 10.5654 14.6238 10.4739C14.571 10.3825 14.4906 10.3101 14.3941 10.2672L11.6741 9.0552C11.5778 9.01244 11.4704 9.00122 11.3673 9.02313C11.2643 9.04504 11.1707 9.09896 11.1001 9.1772V9.1772Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.6729 6.41504L17.7919 8.40004C17.7965 8.47742 17.819 8.55266 17.8577 8.61982C17.8964 8.68699 17.9502 8.74423 18.0149 8.78704L19.6729 9.88704" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.8458 8.625L14.6318 10.481" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.0642 15.6689L17.2162 16.3949C17.1437 16.4233 17.0789 16.4681 17.0268 16.5259C16.9747 16.5838 16.9368 16.6529 16.9162 16.7279L16.3882 18.6419" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.016 16.5169L14.252 14.0269" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.6931 19.8518L9.43206 18.3178C9.38262 18.2579 9.31992 18.2104 9.24893 18.179C9.17794 18.1476 9.10061 18.1331 9.02306 18.1368L7.03906 18.2248" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.25488 18.1661L10.7679 14.7681" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.12793 13.1841L5.19993 11.5101C5.24179 11.4446 5.26783 11.3703 5.27599 11.2931C5.28415 11.2159 5.2742 11.1378 5.24693 11.0651L4.54693 9.20605" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.28711 11.2939L8.97811 11.6819" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.44189 4.87888L10.3639 5.37888C10.439 5.39832 10.5175 5.40004 10.5934 5.3839C10.6692 5.36776 10.7403 5.3342 10.8009 5.28587L12.3539 4.04688" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.5972 5.39795L11.3662 9.01795" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <use xlinkHref="#files"></use>
                          </svg> <span className="sport_nav_link">Futsal</span></a></Link>
                      </li>

                      <li className='nav-item'>
                        <Link href="/badminton"  ><a className='nav-link' href="/badminton">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1001 9.1772L9.10013 11.3932C9.02967 11.4717 8.98583 11.5704 8.97487 11.6753C8.96392 11.7802 8.98641 11.8859 9.03913 11.9772L10.5301 14.5592C10.5828 14.6508 10.6631 14.7234 10.7596 14.7665C10.8561 14.8096 10.9637 14.8211 11.0671 14.7992L13.9831 14.1792C14.0866 14.1574 14.1804 14.1033 14.2512 14.0248C14.322 13.9463 14.3661 13.8473 14.3771 13.7422L14.6881 10.7762C14.6991 10.6712 14.6766 10.5654 14.6238 10.4739C14.571 10.3825 14.4906 10.3101 14.3941 10.2672L11.6741 9.0552C11.5778 9.01244 11.4704 9.00122 11.3673 9.02313C11.2643 9.04504 11.1707 9.09896 11.1001 9.1772V9.1772Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.6729 6.41504L17.7919 8.40004C17.7965 8.47742 17.819 8.55266 17.8577 8.61982C17.8964 8.68699 17.9502 8.74423 18.0149 8.78704L19.6729 9.88704" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.8458 8.625L14.6318 10.481" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.0642 15.6689L17.2162 16.3949C17.1437 16.4233 17.0789 16.4681 17.0268 16.5259C16.9747 16.5838 16.9368 16.6529 16.9162 16.7279L16.3882 18.6419" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.016 16.5169L14.252 14.0269" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.6931 19.8518L9.43206 18.3178C9.38262 18.2579 9.31992 18.2104 9.24893 18.179C9.17794 18.1476 9.10061 18.1331 9.02306 18.1368L7.03906 18.2248" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.25488 18.1661L10.7679 14.7681" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.12793 13.1841L5.19993 11.5101C5.24179 11.4446 5.26783 11.3703 5.27599 11.2931C5.28415 11.2159 5.2742 11.1378 5.24693 11.0651L4.54693 9.20605" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.28711 11.2939L8.97811 11.6819" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.44189 4.87888L10.3639 5.37888C10.439 5.39832 10.5175 5.40004 10.5934 5.3839C10.6692 5.36776 10.7403 5.3342 10.8009 5.28587L12.3539 4.04688" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.5972 5.39795L11.3662 9.01795" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <use xlinkHref="#files"></use>
                          </svg><span className="sport_nav_link">Badminton</span></a></Link>
                      </li>

                      <li className='nav-item'>
                        <Link href="/beachvolley"  ><a className='nav-link' href="/beachvolley">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1001 9.1772L9.10013 11.3932C9.02967 11.4717 8.98583 11.5704 8.97487 11.6753C8.96392 11.7802 8.98641 11.8859 9.03913 11.9772L10.5301 14.5592C10.5828 14.6508 10.6631 14.7234 10.7596 14.7665C10.8561 14.8096 10.9637 14.8211 11.0671 14.7992L13.9831 14.1792C14.0866 14.1574 14.1804 14.1033 14.2512 14.0248C14.322 13.9463 14.3661 13.8473 14.3771 13.7422L14.6881 10.7762C14.6991 10.6712 14.6766 10.5654 14.6238 10.4739C14.571 10.3825 14.4906 10.3101 14.3941 10.2672L11.6741 9.0552C11.5778 9.01244 11.4704 9.00122 11.3673 9.02313C11.2643 9.04504 11.1707 9.09896 11.1001 9.1772V9.1772Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.6729 6.41504L17.7919 8.40004C17.7965 8.47742 17.819 8.55266 17.8577 8.61982C17.8964 8.68699 17.9502 8.74423 18.0149 8.78704L19.6729 9.88704" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.8458 8.625L14.6318 10.481" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.0642 15.6689L17.2162 16.3949C17.1437 16.4233 17.0789 16.4681 17.0268 16.5259C16.9747 16.5838 16.9368 16.6529 16.9162 16.7279L16.3882 18.6419" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.016 16.5169L14.252 14.0269" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.6931 19.8518L9.43206 18.3178C9.38262 18.2579 9.31992 18.2104 9.24893 18.179C9.17794 18.1476 9.10061 18.1331 9.02306 18.1368L7.03906 18.2248" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.25488 18.1661L10.7679 14.7681" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.12793 13.1841L5.19993 11.5101C5.24179 11.4446 5.26783 11.3703 5.27599 11.2931C5.28415 11.2159 5.2742 11.1378 5.24693 11.0651L4.54693 9.20605" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.28711 11.2939L8.97811 11.6819" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.44189 4.87888L10.3639 5.37888C10.439 5.39832 10.5175 5.40004 10.5934 5.3839C10.6692 5.36776 10.7403 5.3342 10.8009 5.28587L12.3539 4.04688" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.5972 5.39795L11.3662 9.01795" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z" stroke="#5744CB" stroke-linecap="round" stroke-linejoin="round" />
                            <use xlinkHref="#files"></use>
                          </svg><span className="sport_nav_link">Beach Volley</span></a></Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* <div className='fly_text'><p>Рандомный текст</p></div> */}

                

              </div>
            </div>
          </div>
        </header>
      </>


    )
  }
}
