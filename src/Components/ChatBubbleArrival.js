import React from 'react'
import person from '../assets/images/person.png'
import { useState } from 'react'

export default function ChatBubbleArrival() {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div>
         <div class="flex items-start gap-2.5 mt-2 mb-2 ">
            <img class="w-8 h-8 rounded-full" src={person} alt="Jese image" />
            <div class="flex flex-col w-fit max-w-[35%] shadow-lg  rounded-tr-lg rounded-br-lg rounded-bl-lg leading-1.5 p-2 border-gray-200 bg-[#C8D0D6] ">
               <div class="flex items-center space-x-2 rtl:space-x-reverse">
                  <span class="text-sm font-semibold text-gray-900">Bonnie Green</span>
               </div>
               <p class="text-sm font-normal py-2.5 text-gray-900">Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <button onClick={() => setIsOpen((isOpen) => !isOpen)}
               class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-[#DFE4C5] rounded-lg hover:bg-gray-100
    focus:ring-4 focus:outline-none focus:ring-gray-50 " type="button">
               <svg class="w-4 h-4 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                  <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
               </svg>
            </button>
            {isOpen && 
               <div id="dropdownDots" class="z-10 bg-[#c8d0d6] divide-y divide-gray-100 rounded-lg shadow w-40">
               <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconButton">
                  <li>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-400 rounded-2xl">Reply</a>
                  </li>
                  <li>        <a href="#" class="block px-4 py-2 hover:bg-gray-400 rounded-2xl">Forward</a>
                  </li>
                  <li>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-400 rounded-2xl">Copy</a>
                  </li>
                  <li>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-400 rounded-2xl">Delete</a>
                  </li>
               </ul>
            </div>}
            

         </div>

      </div>
   )
}
