"use client"
import Image from "next/image";
import React, { useState } from 'react';
import data from "../app/data/movies_data.json";
import { CiHeart ,CiUser } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { AiOutlineStock } from "react-icons/ai";

export default function Home() {
    const [showSidenav, setShowSidenav] = useState(false);
    const [showMarket, setShowMarket] = useState();
    const objects = data.articles;
    let height
    if (typeof window !== "undefined") {
         height = window.innerWidth;
    }

    function truncateDescription(description, wordCount) {
        const words = description?.split(' ');
        if (words?.length > wordCount) {
            return words.slice(0, wordCount).join(' ') + '...';
        }
        return description;
    }

   
  return (
      <>
          <div>
              <div className="grid grid-cols-2">
                  <button onClick={() => setShowMarket(true)} className={`${height > 768 ? "bg-white" : (!showMarket ? "bg-white" : "bg-red-900")}`} >Market Stories</button>
                  <button onClick={() => setShowMarket(false)} className={` ${ height>768?"bg-white" : ( showMarket? "bg-white": "bg-red-900")}`} >Discussion Forum</button>
              </div>
              <div className="grid grid-cols-8 md:grid-cols-12 bg-gray-800">
                  <div className={`  col-span-1 text-white md:${showSidenav ? 'col-span-2' : 'col-span-1'}`}>
                      <button onClick={() => setShowSidenav(!showSidenav)} style={{ display: !showSidenav ? 'block' : 'none' }} className="fixed top-8 left-8 bg-slate-800 text-slate-100 rounded-full p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                          </svg>
                      </button>
                      {showSidenav && (
                          <nav className="fixed z-10 h-screen bg-slate-800 w-72 text-slate-100 p-8">
                              <button onClick={() => setShowSidenav(false)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                              </button>
                              <ul className="space-y-2">
                                  <li className="text-lg text-white flex items-center "><CiUser size={23} />  User</li>
                                  <hr/>
                                  <li className="text-lg text-white flex items-center gap-1 "><GoCommentDiscussion size={24} /> Discussion Forum</li>
                                  <li className="text-lg text-white flex items-center gap-1 "> <AiOutlineStock /> Market Stories</li>
                                  <li className="text-lg text-white ">Market</li>
                                  <li className="text-lg text-white ">Sector</li>
                                  <li className="text-lg text-white ">WatchList</li>
                                  <li className="text-lg text-white ">Events</li>
                                  <li className="text-lg text-white ">News/Interviews</li>
                              </ul>
                          </nav>
                      )}
                  </div>
                  <div className={`mt-10  justify-center items-center gap-2 ${height > 768 ? "col-span-5" : (showMarket ? "col-span-5" : "hidden")} md:col-span-7 md:grid md:grid-cols-2 `}>
                      {objects.slice(1, 11).map((item, index) => (
                          <div key={index} className="px-4 m-2 max-w-[600px] py-3 bg-white rounded-md shadow-md  flex-rows items-center space-x-4">
                              <img src={item.urlToImage} className="w-full h-48 object-cover rounded-md" alt="News" />
                              <div>
                                  <h1 className="mt-2 text-lg font-semibold text-gray-800">{item.title}</h1>
                                  <p className="mt-2 text-sm text-gray-600">{truncateDescription(item.description, 20)}</p>
                              </div>
                          </div>
                      ))}
                  </div>
                  <div className={`mt-10 flex-row justify-center p-3 ${height > 768 ? " block col-span-4 " : (showMarket ? "hidden" : "col-span-7")} `}>
                      {objects.slice(1, 10).map((item, index) => (
                          <div key={index} className="max-w-md m-2 overflow-hidden bg-white rounded-lg shadow-lg ">
                              <div className=" flex gap-3 m-1 p-4 md:p-4">
                                  <img src={item.urlToImage} className="rounded-full w-20 h-20 object-cover" alt="Avatar" />
                                  <div>
                                      <h1 className="">{item.author}</h1>
                                      <p className="mt-2 text-sm text-gray-600">{truncateDescription(item.description, 10)}</p>
                                  </div>
                              </div>
                              <div className="flex justify-around m-2 ">
                                  <div className="flex m-1 items-center">
                                      <CiHeart size={32} />2K
                                  </div>
                                  <div className="flex m-1">
                                      <IoShareSocialOutline size={24} /> 2K
                                  </div>
                                  <div className="flex m-1">
                                      <FaRegComment size={24} /> 2K
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

    
  </>




                 

  );
}
