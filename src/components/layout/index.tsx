import { Button } from '@src/components/root';
import { BtnColorSchema } from '@src/types/root';
import { ILandingPageLayout } from '@src/types/view';
import { EMode } from '@src/types/view/landing';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const Layout = ({ children, mode, title }: ILandingPageLayout) => {
  let defaultBtnHandler = {
    isVisible: false,
    title: '',
  };
  const [btnHandler, setBtnHandler] =
    useState<{ isVisible: boolean; title: string }>(defaultBtnHandler);
  useEffect(() => {
    switch (mode) {
      case EMode.Home: {
        // btnHandler.isVisible = false;
        setBtnHandler({ ...btnHandler, isVisible: false });
        break;
      }
      case EMode.GiveLexicalResourceTest: {
        // btnHandler.isVisible = true;
        // btnHandler.title = 'Add Lexical Words';
        setBtnHandler({ isVisible: true, title: 'Add Lexical Words' });
        break;
      }
      case EMode.GiveSpellMistakeTest: {
        // btnHandler.isVisible = true;
        // btnHandler.title = 'Add Word';
        setBtnHandler({ isVisible: true, title: 'Add Word' });
        break;
      }
      case EMode.GiveNewLexicalResourceInput: {
        // btnHandler.isVisible = true;
        // btnHandler.title = 'Go to Home';
        setBtnHandler({ isVisible: true, title: 'Go to Home' });
        break;
      }
      case EMode.GiveNewSpellMistakeInput: {
        setBtnHandler({ isVisible: true, title: 'Go to Home' });
        break;
      }
    }
  }, []);
  const route = useRouter();
  const btnClickHandler = () => {
    if (mode == EMode.GiveSpellMistakeTest) {
      route.push('/spell/add');
    } else if (
      mode == EMode.GiveNewSpellMistakeInput ||
      mode == EMode.GiveNewLexicalResourceInput
    ) {
      route.push('/');
    } else if (mode == EMode.GiveLexicalResourceTest) {
      console.log(`It hitted`);
      route.push('/lexicalResources/add');
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
              {title || 'IELTS APP'}
            </p>
          </div>
          <div
            className={`col-span-2 flex justify-end items-end bg-white p-5 rounded-md`}
          >
            {btnHandler.isVisible && (
              <Button
                btnText={btnHandler.title}
                colorSchema={BtnColorSchema.SolidBgVioletTextWhite}
                clickHandler={btnClickHandler}
                isArrow={false}
              />
            )}
          </div>
          <div className="col-span-12">{children}</div>
        </div>
      </div>
    </div>
  );
};
