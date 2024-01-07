"use client";

import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { FaAngleRight, FaRegUser } from "react-icons/fa6";
import { ImUserTie } from "react-icons/im";
import {
  MdOutlineDashboardCustomize,
  MdEmojiEvents,
  MdOutlineFeedback,
} from "react-icons/md";
import { RiCoupon3Line } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import { TiWorldOutline } from "react-icons/ti";
import { Avatar } from "@radix-ui/themes";
export default function Shell({ children }) {
  const router = useRouter();
  const currentPage = usePathname();

  const topNavigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      current: "dashboard",
    },
    {
      name: "Shopping",
      href: "/shopping/products",
      current: "shopping",
    },
    {
      name: "Career",
      href: "/carrer",
      current: "carrer",
    },
    {
      name: "Events",
      href: "/events",
      current: "events",
    },
    {
      name: "Coach",
      href: "/coach",
      current: "coach",
    },
    {
      name: "Feedback",
      href: "/feedback",
      current: "feedback",
    },
    {
      name: "Users",
      href: "/users",
      current: "users",
    },
    {
      name: "Testimonials / Blog",
      href: "/blog",
      current: "blog",
    },
    {
      name: "Aruna",
      href: "/aruna",
      current: "aruna",
    },
  ];

  const navigation = [
    {
      name: "Dashboard",
      icon: <MdOutlineDashboardCustomize size={18} />,
      href: "/dashboard",
    },
    {
      name: "Products",
      icon: <BsHandbag size={18} />,
      href: "/shopping/products",
    },
    {
      name: "Orders",
      icon: <TiWorldOutline size={18} />,
      href: "/shopping/orders",
    },
    {
      name: "Categories",
      icon: <CgSandClock size={18} />,
      href: "/shopping/categories",
    },
    {
      name: "Add Product coupon",
      icon: <RiCoupon3Line />,
      href: "/shopping/add-product-coupon",
    },
    {
      name: "Career",
      icon: <ImUserTie size={18} />,
      href: "/carrer",
    },
    {
      name: "Events",
      icon: <MdEmojiEvents size={18} />,
      href: "/events",
    },
    {
      name: "Coach",
      icon: <FaRegUser size={16} />,
      href: "/coach",
    },
    {
      name: "Feedback",
      icon: <MdOutlineFeedback size={18} />,
      href: "/feedback",
    },
    {
      name: "Users",
      icon: <TbUsers size={18} />,
      href: "/users",
    },
    {
      name: "Testimonials / Blog",
      icon: <BiMessageAltDetail size={18} />,
      href: "/blog",
    },
    {
      name: "Aruna",
      icon: <FaRegUser size={16} />,
      href: "/aruna",
    },
  ];
  // console.log(currentPage.split("/")[1]);

  return (
    <div className=" w-full h-full bg-clrbg overflow-hidden flex ">
      <div className=" h-full w-[250px] bg-clr1">
        <div className=" w-full h-[150px] flex items-center justify-center -left-2 relative">
          <Image src={"/images/logo2.png"} width={100} height={100} />
        </div>
        <div>
          {navigation
            .filter((menu) =>
              menu.href.startsWith("/" + currentPage.split("/")[1])
            )
            .map((menu, index) => {
              return (
                <div
                  key={index}
                  onClick={() => router.push(menu.href)}
                  className={`${" px-4 py-1 flex items-center gap-x-2 mb-2 cursor-pointer hover:text-white"} ${
                    menu.href === currentPage ? "text-white" : "text-gray-500"
                  }`}
                >
                  {menu?.icon && menu?.icon}
                  <h4 className=" flex-1 text-sm font-[500]">{menu.name}</h4>
                  <FaAngleRight
                    size={15}
                    className={`${
                      menu.href === currentPage ? "block" : "hidden"
                    }`}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className=" h-full flex-1 overflow-hidden">
        <div className=" bg-white px-4 h-20 flex items-center justify-between">
          <div className=" flex items-center gap-x-2 h-20">
            {topNavigation.map((menu, index) => {
              return (
                <div
                  key={index}
                  onClick={() => router.push(menu.href)}
                  className=" h-full flex items-center justify-center group relative px-3 py-4 cursor-pointer"
                >
                  <h4
                    className={`${" font-[500] group-hover:text-[#182822]"} ${
                      menu.current === currentPage.split("/")[1]
                        ? " text-[#182822] "
                        : " text-black/60"
                    }`}
                  >
                    {menu.name}
                  </h4>
                  <div
                    className={`${" absolute bottom-0 left-0 right-0 h-1 rounded-lg group-hover:bg-clr2"} ${
                      menu.current === currentPage.split("/")[1] && " bg-clr2"
                    }`}
                  />
                </div>
              );
            })}
          </div>
          <div className=" h-20 flex items-center justify-center">
            <Avatar
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              fallback="A"
              radius="full"
            />
          </div>
        </div>
        <div className=" w-full h-full">{children}</div>
      </div>
    </div>
  );
}
