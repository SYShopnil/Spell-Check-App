import { Button, IconStore } from '@src/components/root';
import { ELocalStorageKey } from '@src/types/common';
import { BtnColorSchema } from '@src/types/root';
import { IconName } from '@src/types/root/_icon';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

export const WordTestWIthBlackList = () => {
  const [blackList, setBlackList] = useState<string[]>([]);
  const [rootLocalStorageList, setRootLocalStorageList] = useState<string[]>(
    []
  );
  const [inNextBtnHover, setIsNextBtnHover] = useState<boolean>(false);
  const [customizedLocalStorageList, setCustomizedLocalStorageList] = useState<
    string[]
  >([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentActiveWord, setCurrentActiveWord] =
    useState<string>('colleague');
  const [answerInput, setAnswerInput] = useState<string>('');
  const [isRightAnswer, setIsRightAnswer] = useState<boolean | null>(null);
  const answerSubmitHandler = () => {
    currentActiveWord.toLowerCase() == answerInput.toLowerCase()
      ? setIsRightAnswer(true)
      : setIsRightAnswer(false);
  };

  const addToBackListHandler = () => {
    const isAlreadyAvailable = new Set(blackList).has(currentActiveWord);
    !isAlreadyAvailable && setBlackList([...blackList, currentActiveWord]);
  };
  const speakController = () => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(currentActiveWord);
      synth.speak(utterance);
    } else {
      alert('Text-to-speech not supported in this browser');
    }
  };
  const setActiveIndexAndCurrentActiveWord: (list: string[]) => void = (
    list
  ) => {
    const getRadomArrayIndex = Math.floor(Math.random() * list.length);
    setActiveIndex(getRadomArrayIndex);
    setCurrentActiveWord(list[getRadomArrayIndex]);
    list.splice(getRadomArrayIndex, 1);
    setCustomizedLocalStorageList(list);
  };
  const nextButtonHandler = () => {
    setActiveIndexAndCurrentActiveWord(customizedLocalStorageList);
    setAnswerInput('');
    setIsRightAnswer(null);
  };

  useEffect(() => {
    const getFullList =
      localStorage.getItem(ELocalStorageKey.SpellCheckList) &&
      JSON.parse(localStorage.getItem(ELocalStorageKey.SpellCheckList) || '');
    if (getFullList) {
      setRootLocalStorageList(getFullList);
      setActiveIndexAndCurrentActiveWord(
        JSON.parse(localStorage.getItem(ELocalStorageKey.SpellCheckList) || '')
      );
    }
  }, []);

  return (
    <div className={`grid grid-cols-12 gap-4`}>
      <div className={`col-span-12 md:col-span-8 bg-white p-5 space-y-3`}>
        {/* input part */}
        <div className={`flex space-x-4`}>
          <div
            className={`cursor-pointer bg-[#F1F4F5]  rounded-full p-2 basis-[15%] flex justify-center items-center`}
            onClick={speakController}
          >
            <IconStore iconName={IconName.AiOutlineSound} fill="#449657" />
          </div>
          <div className={`flex justify-start items-center basis-[85%]`}>
            <input
              type="text"
              placeholder="Give Answer"
              value={answerInput}
              onChange={(e) => setAnswerInput(e.target.value)}
              className={`w-[100%] focus:outline-none focus:border-primary focus:ring-priborder-primary border-gray-300 rounded-md p-2 border`}
            />
          </div>
        </div>
        {/* submit button part */}
        <div className={`flex justify-center items-center`}>
          <div>
            <Button
              btnText="Submit"
              colorSchema={BtnColorSchema.SolidBgWhiteTextGreen}
              clickHandler={answerSubmitHandler}
              isArrow={true}
            />
            {isRightAnswer !== null &&
              (isRightAnswer == true ? (
                <p>Right Answer</p>
              ) : (
                <p>Wrong Answer</p>
              ))}
          </div>
        </div>

        {/* footer part */}
        <div className={`flex  items-center space-x-4`}>
          <div className={`basis-[30%]`}>
            <Button
              btnText="Add Black"
              colorSchema={BtnColorSchema.SolidBgGrayTextViolet}
              clickHandler={addToBackListHandler}
              isArrow={false}
            />
          </div>
          <div className={`basis-[70%] flex justify-end items-end space-x-5`}>
            <span className="font-semibold">
              Remain Number:
              <span className={`font-extrabold font-primary `}>
                {customizedLocalStorageList.length}
              </span>{' '}
              Out of
              <span className={`font-extrabold font-primary`}>
                {rootLocalStorageList.length}
              </span>
            </span>
            <span
              className={`flex justify-center items-center cursor-pointer   bg-[#7A67EE] hover:bg-[#FFFFFF]  duration-[0.5s] rounded-full p-3 shadow-primary`}
              onClick={() => nextButtonHandler()}
              onMouseEnter={() => setIsNextBtnHover(true)}
              onMouseLeave={() => setIsNextBtnHover(false)}
            >
              <IconStore
                iconName={IconName.ArrowRight}
                fill={`${inNextBtnHover ? '#7A67EE' : '#FFFFFF'}`}
              />
            </span>
          </div>
        </div>
      </div>
      <div className={`col-span-12  md:col-span-4 bg-white p-8  `}>
        <div className={`text-center`}>
          <p className={`bg-white text-xl font-bold`}>Black List</p>
        </div>
        <div className={`${styles.scrollContainer}`}>
          <div
            className={`bg-white overflow-y-scroll  h-[9.5rem] ${styles.customScrollbar} `}
          >
            {blackList.length ? (
              <>
                {blackList.map((listData, ind) => {
                  const serial = ++ind;
                  return (
                    <p key={ind} className={`bg-white text-lg font-semibold`}>
                      <span>{serial}.</span>
                      <span>{listData}</span>
                    </p>
                  );
                })}
              </>
            ) : (
              <p className={`bg-white text-lg font-semibold text-center`}>
                No Data
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};