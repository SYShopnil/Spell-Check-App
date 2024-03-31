import React from 'react';

interface IStartButton {
  startTestHandler: () => void;
  title: string;
}

export const StartButton = ({ startTestHandler, title }: IStartButton) => {
  return (
    <div className={`flex justify-center items-center h-screen cursor-pointer`}>
      <div
        className={`min-w-[21.875rem] min-h-[21.875rem] rounded-full bg-[#7A67EE] hover:bg-primary duration-[0.5s] flex justify-center items-center`}
        onClick={startTestHandler}
      >
        <span
          className={`font-extrabold text-[#FFFFFF]  duration-[0.5s] text-2xl`}
        >
          {title}
        </span>
      </div>
    </div>
  );
};
