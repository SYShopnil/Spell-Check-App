import { EStartButtonVariant, IStartButton } from '@src/types/root';
import React from 'react';

export const StartButton = ({
  startTestHandler,
  title,
  variant,
}: IStartButton) => {
  let variantStyle = '';
  switch (variant) {
    case EStartButtonVariant.GreenSolidOnHoverPurpleSolidBg: {
      variantStyle = 'hover:bg-[#7A67EE] bg-primary';
      break;
    }
    case EStartButtonVariant.PurpleSolidBgOnHoverGreenSolid: {
      variantStyle = 'bg-[#7A67EE] hover:bg-primary';
      break;
    }
    default: {
      variantStyle = 'bg-[#7A67EE] hover:bg-primary';
    }
  }
  return (
    <div className={`flex justify-center items-center h-screen cursor-pointer`}>
      <div
        className={`p-3 min-w-[21.875rem] min-h-[21.875rem] rounded-full ${variantStyle} duration-[0.5s] flex justify-center items-center`}
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
