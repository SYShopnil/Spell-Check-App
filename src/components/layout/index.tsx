import { Button } from '@src/components/root';
import { BtnColorSchema } from '@src/types/root';
import { ILandingPageLayout } from '@src/types/view';
import { EMode } from '@src/types/view/landing';
import { useRouter } from 'next/router';
import React from 'react';

export const Layout = ({ children, mode }: ILandingPageLayout) => {
  const route = useRouter();
  const btnClickHandler = () => {
    if (mode == EMode.GiveSpellMistakeTest) {
      route.push('/spell/add');
    } else if (
      mode == EMode.GiveNewSpellMistakeInput ||
      mode == EMode.GiveLexicalResourceTest
    ) {
      route.push('/');
    }
  };
  return (
    <div className={`container`} data-testid={'landingPagePicker'}>
      {/* header part */}
      <div className={`mt-5`}>
        <div className={`grid grid-cols-12`}>
          <div
            className={`col-span-10 flex justify-center items-center bg-white p-5 rounded-md `}
          >
            <p
              className={`bg-[#FFFFFF] text-center font-bold text-xl cursor-pointer`}
              onClick={() => {
                route.push('/');
              }}
            >
              Spell Checker
            </p>
          </div>
          <div
            className={`col-span-2 flex justify-end items-end bg-white p-5 rounded-md`}
          >
            <Button
              btnText={mode == EMode.Home ? 'Add++' : 'Back To Home'}
              colorSchema={BtnColorSchema.SolidBgVioletTextWhite}
              clickHandler={btnClickHandler}
              isArrow={false}
            />
          </div>
          <div className="col-span-12">{children}</div>
        </div>
      </div>
    </div>
  );
};
