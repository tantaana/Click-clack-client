import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import img1 from "./assets/blog-1.jpg";
import img2 from "./assets/blog-2.jpg";
import "./NavBlog.css";

const NavBlog = () => {
  const activeLinks = ({ isActive }) => {
    return {
      color: isActive ? "#9ca3af" : "",
    };
  };
  return (
    <div class="dropdown inline-block relative">
      <button class="inline-flex items-center">
        <NavLink to="/blog" style={activeLinks}>
          <span class="text-base xl:text-lg font-bold tracking-widest flex justify-center items-center gap-1 uppercase hover:text-gray-400 ease-in-out duration-300">
            Blog <MdOutlineArrowDropDown className="m-0 p-0" />
          </span>
        </NavLink>
      </button>

      <ul class="bg-white hidden dropdown-menu absolute lg:left-[-450px] px-4 py-2 w-[1000px]">
        <div className="h-[100px]"></div>

        <div className="grid grid-cols-5 gap-4">
          <div className="">
            <h2 className="uppercase font-bold px-4 py-2 tracking-widest">
              Categories
            </h2>
            <Link
              to="/blog/fashion"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Fashion
            </Link>
            <Link
              to="/blog/lifestyle"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Lifestyle
            </Link>
            <Link
              to="/blog/story"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Story
            </Link>
            <Link
              to="/blog/new-arrivals"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              New Arrivals
            </Link>
          </div>

          <div className="col-span-2">
            <div class="hover05 column mb-4">
              <div>
                <figure>
                  <img
                    src={img1}
                    className="w-full h-[150px] object-cover"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <h2 className="uppercase font-semibold mb-4 hover:text-gray-400 hover:ease-in-out hover:duration-500">
              Canadian-made & Designed Winter Coats
            </h2>
            <h2 className="uppercase text-sm font-semibold text-gray-500 mb-4">
              13 July 2022 | Fashion
            </h2>
          </div>

          <div className="col-span-2">
            <div class="hover05 column mb-4">
              <div>
                <figure>
                  <img
                    src={img2}
                    className="w-full h-[150px] object-cover"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <h2 className="uppercase font-semibold mb-4 hover:text-gray-400 hover:ease-in-out hover:duration-500">
              How to make Hiking Fun With Kids
            </h2>
            <h2 className="uppercase text-sm font-semibold text-gray-500 mb-4">
              13 Nov 2022 | Lifestyle
            </h2>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default NavBlog;
