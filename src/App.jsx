import React from "react";
import star from "./assets/star.png";
import lock from "./assets/lock.png";
import { FaPlay, FaCodeBranch } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { HiCheck } from "react-icons/hi";

function App() {
  return (
    <div className="bg-neutral-900 h-screen flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}

const Sidebar = () => {
  return (
    <div className="bg-neutral-800 xl:h-screen xl:w-[250px] text-white pt-6 xl:block hidden">
      <h3 className="font-bold text-xl pl-4">My Lists</h3>
      <div className="text-sm pt-3 font-medium pl-4">Created by me</div>

      <div className="flex items-center bg-neutral-700 h-10 mt-3 mx-4 rounded-lg px-2">
        <img src={star} alt="Star icon" className="h-5" />
        <span className="ml-2 text-sm font-medium flex-1">Favourite</span>
        <img src={lock} alt="Lock icon" className="h-5" />
      </div>
    </div>
  );
};

const MainContent = () => {
  const problems = [
    { Name: "Two Sum", Type: "Easy" },
    { Name: "Add Two Numbers", Type: "Medium" },
    { Name: "Longest Substring Without Repeating Characters", Type: "Medium" },
    { Name: "Median of Two Sorted Arrays", Type: "Hard" },
    { Name: "Longest Palindromic Substring", Type: "Medium" },
    { Name: "Container With Most Water", Type: "Medium" },
    { Name: "3Sum", Type: "Medium" },
    { Name: "Letter Combinations of a Phone Number", Type: "Medium" },
    { Name: "Valid Parentheses", Type: "Easy" },
    { Name: "Merge Two Sorted Lists", Type: "Easy" },
    { Name: "Generate Parentheses", Type: "Medium" },
    { Name: "Merge Intervals", Type: "Medium" },
    { Name: "Best Time to Buy and Sell Stock", Type: "Easy" },
    { Name: "Climbing Stairs", Type: "Easy" },
    { Name: "Coin Change", Type: "Medium" },
  ];

  return (
    <div className="bg-neutral-900 flex flex-col xl:flex-row items-start justify-between gap-6 xl:gap-10 p-4 sm:p-6 xl:p-10">
      <div className="bg-neutral-800 p-6 rounded-2xl sm:w-80">
        <img src={star} alt="Star" className="h-[100px] mb-4" />
        <div className="text-white text-3xl mb-1">Favourite</div>
        <div className="text-white mb-4">Sumana · 19 questions</div>

        <div className="flex gap-4">
          <button className="flex items-center bg-white text-black px-4 py-2 rounded-3xl font-medium">
            <FaPlay className="mr-2" />
            Practice
          </button>
          <button className="flex items-center bg-neutral-700 px-3 py-2 rounded-3xl">
            <FaCodeBranch className="text-white" />
          </button>
        </div>

        <hr className="text-neutral-700 my-4" />
        <div className="text-white flex justify-between">
          <span>Progress</span>
          <FiRefreshCw className="text-white mt-[2px]" />
        </div>

        <div className="flex mt-3">
          <div className="h-[163px] w-[150px] bg-neutral-700 rounded-2xl text-center flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              19/<span className="text-sm">19</span>
            </div>
            <div className="text-white">Solved</div>
          </div>

          <div className="ml-2 mt-1 space-y-1">
            <Stat label="Easy" count="11/11" color="text-blue-500" />
            <Stat label="Medium" count="7/7" color="text-amber-600" />
            <Stat label="Hard" count="1/1" color="text-red-500" />
          </div>
        </div>
      </div>

      <div className="bg-neutral-800 h-[610px] w-[800px] rounded-2xl overflow-y-auto md:block hidden">
        {problems.map((item) => (
          <List key={item.Name} Name={item.Name} Type={item.Type} />
        ))}
      </div>
    </div>
  );
};

const Stat = ({ label, count, color }) => (
  <div className="h-[50px] bg-neutral-700 w-[120px] rounded-lg flex flex-col items-center justify-center">
    <div className={`text-sm font-medium ${color}`}>{label}</div>
    <div className="text-sm text-white">{count}</div>
  </div>
);

const List = ({ Name, Type }) => {
  return (
    <div className="text-white flex justify-between px-3 xl:px-5 py-3 even:bg-neutral-900 rounded-sm items-center">
      <div className="flex items-center gap-3">
        <HiCheck className="text-green-500 h-[24px] w-[24px]" />
        <span>{Name}</span>
      </div>
      <span className="text-sm">{Type}</span>
    </div>
  );
};

export default App;
