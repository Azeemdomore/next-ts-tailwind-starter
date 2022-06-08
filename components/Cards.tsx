import React from "react";

type Props = {
  name?: string;
};

const Cards = ({ name }: Props) => {
  return (
    <div className="w-full h-full space-y-6 flex flex-col justify-center">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:gap-4 lg:gap-3 gap-6 sm:pl-0 pl-20">
        <div className="sm:w-[18rem] w-96 xl:h-64 h-full cursor-pointer">
          <img src="/img/cardOne.svg" alt="" />
          <div className="flex justify-center">
            <div className="bg-btnYellow h-9 w-8 flex justify-center items-center hover:border-[1px] border-black hover:bg-transparent cursor-pointer duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="sm:w-[18rem] w-96 xl:h-64 h-full">
          <img src="/img/cardTwo.svg" alt="" />
          <div className="flex justify-center">
            <div className="bg-btnYellow h-9 w-8 flex justify-center items-center hover:border-[1px] border-black hover:bg-transparent cursor-pointer duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="sm:w-[18rem] w-96 xl:h-64 h-full">
          <img src="/img/cardThree.svg" alt="" />
          <div className="flex justify-center">
            <div className="bg-btnYellow h-9 w-8 flex justify-center items-center hover:border-[1px] border-black hover:bg-transparent cursor-pointer duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="sm:w-[18rem] w-96 xl:h-64 h-full">
          <img src="/img/cardFour.svg" alt="" />
          <div className="flex justify-center">
            <div className="bg-btnYellow h-9 w-8 flex justify-center items-center hover:border-[1px] border-black hover:bg-transparent cursor-pointer duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="sm:w-[18rem] w-96 xl:h-64 h-full">
          <img src="/img/cardFive.svg" alt="" />
          <div className="flex justify-center">
            <div className="bg-btnYellow h-9 w-8 flex justify-center items-center hover:border-[1px] border-black hover:bg-transparent cursor-pointer duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="sm:w-[18rem] w-96 xl:h-64 h-full">
          <img src="/img/cardSix.svg" alt="" />
          <div className="flex justify-center">
            <div className="bg-btnYellow h-9 w-8 flex justify-center items-center hover:border-[1px] border-black hover:bg-transparent cursor-pointer duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-center sm:justify-start justify-center sm:w-full w-[550px]">
        <div className="sm:w-[18rem] w-96 xl:h-64 h-full">
          <img src="/img/cardSeven.svg" alt="" />
          <div className="flex justify-center">
            <div className="bg-btnYellow h-9 w-8 flex justify-center items-center hover:border-[1px] border-black hover:bg-transparent cursor-pointer duration-150 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
