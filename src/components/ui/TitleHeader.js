import { TextField } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaLessThan } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

export default function TitleHeader({ title, path, onSearch }) {
  const router = useRouter();

  return (
    <div className=" flex items-end justify-between px-4 py-2">
      <div>
        <h2 className=" text-[26px] font-bold uppercase">{title}</h2>
        <ul className=" flex items-center gap-x-4 mt-2">
          {path.map((item, index) => {
            return (
              <>
                <li
                  key={index}
                  onClick={() => {
                    item.href === "-1" ? router.back() : router.push(item.href);
                  }}
                  className="  text-blue-600 cursor-pointer hover:underline"
                >
                  <p className=" text-sm font-medium">{item.title}</p>
                </li>
                <FaLessThan size={14} className=" text-blue-600 ml-1" />
              </>
            );
          })}
          <li>
            <p className=" text-sm font-medium ">{title}</p>
          </li>
        </ul>
      </div>

      <div>
        {/* <div>
        <MdOutlineSearch size={18} color="white" />

        </div> */}
        <TextField.Root className=" h-10">
          <TextField.Slot className=" bg-clr2 rounded-tl-md rounded-bl-md">
          <MdOutlineSearch size={18} color="#fff" />
          </TextField.Slot>
          <TextField.Input className=" mt-1" placeholder={`${" "} Search here...`}  onChange={(e)=>onSearch(e.target.value)} />
        </TextField.Root>
      </div>
    </div>
  );
}
