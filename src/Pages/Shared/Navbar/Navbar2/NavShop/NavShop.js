import React from "react";
import "./NavShop.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const NavShop = () => {
  const activeLinks = ({ isActive }) => {
    return {
      color: isActive ? "#9ca3af" : "",
    };
  };
  return (
    <div class="dropdown inline-block relative">
      <button class="inline-flex items-center">
        <NavLink to="/shop" style={activeLinks}>
          <span class="text-base xl:text-lg font-bold tracking-widest flex justify-center items-center gap-1 uppercase hover:text-gray-400 ease-in-out duration-300">
            Shop <MdOutlineArrowDropDown className="m-0 p-0" />
          </span>
        </NavLink>
      </button>

      <ul class="bg-white hidden dropdown-menu absolute lg:left-[-365px] xl:left-[-350px] px-4 py-2 w-[1000px]">
        <div className="h-[100px]"></div>

        <div className="grid grid-cols-4 gap-2">
          <div className="">
            <h2 className="uppercase font-bold px-4 py-2 tracking-widest">
              Categories
            </h2>
            <Link
              to="/shop/jackets"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Jackets & Outwear
            </Link>
            <Link
              to="/shop/pants"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Pants
            </Link>
            <Link
              to="/shop/tshirts"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              T-shirts
            </Link>
            <Link
              to="/shop/backpacks"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Backpacks
            </Link>
            <Link
              to="/shop/hats"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Hats & Beanies
            </Link>
            <Link
              to="/shop/gloves"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Gloves & Mittens
            </Link>
          </div>

          <div className="">
            <h2 className="uppercase font-bold px-4 py-2 tracking-widest">
              Men
            </h2>
            <Link
              to="/shop/insulated-jackets"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Insulated Jackets
            </Link>
            <Link
              to="/shop/puffer-jackets"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Puffer Jackets
            </Link>
            <Link
              to="/shop/men-parkas"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Parkas
            </Link>
            <Link
              to="/shop/men-sweatshirts"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Sweatshirts
            </Link>
            <Link
              to="/shop/men-hoodies"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Hoodies
            </Link>
            <Link
              to="/shop/men-tshirts"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              T-shirts
            </Link>
          </div>

          <div className="">
            <h2 className="uppercase font-bold px-4 py-2 tracking-widest">
              Women
            </h2>
            <Link
              to="/shop/waterproof-jackets"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Waterproof Jackets
            </Link>
            <Link
              to="/shop/fleeces"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Fleeces
            </Link>
            <Link
              to="/shop/women-parkas"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Parkas
            </Link>
            <Link
              to="/shop/women-sweatshirts"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Sweatshirts
            </Link>
            <Link
              to="/shop/women-hoodies"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Hoodies
            </Link>
            <Link
              to="/shop/women-tshirts"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              T-shirts
            </Link>
          </div>

          <div className="">
            <h2 className="uppercase font-bold px-4 py-2 tracking-widest">
              Kids
            </h2>
            <Link
              to="/shop/coats"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Coats & Jackets
            </Link>
            <Link
              to="/shop/kids-fleeces"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              Fleeces & Hoodies
            </Link>
            <Link
              to="/shop/kids-tshirts"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              T-shirts
            </Link>
            <Link
              to="/shop/school-backpacks"
              class="block text-sm text-gray-400 font-semibold tracking-widest uppercase px-4 py-2 hover:text-black hover:ease-in-out hover:duration-500 hover:border-b hover:border-black"
            >
              School Backpacks
            </Link>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default NavShop;
