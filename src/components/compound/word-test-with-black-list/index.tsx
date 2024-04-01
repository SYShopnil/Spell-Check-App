import { Button, IconStore } from '@src/components/root';
import { ELocalStorageKey } from '@src/types/common';
import { BtnColorSchema } from '@src/types/root';
import { IconName } from '@src/types/root/_icon';
import React, { useState } from 'react';
import styles from './index.module.scss';
import { IWordTestWithBlackList } from '@src/types/compound';

export const WordTestWIthBlackList = ({
  answerSubmitHandler,
  currentActiveWord,
  rootLocalStorageList,
  isRightAnswer,
  nextButtonHandler,
  mode,
  answerWordList,
  customizedLocalStorageList,
  message,
}: IWordTestWithBlackList) => {
  let defaultAnswerInputField: string[] | string = [];

  // set the default answer input field value dynamically based on mode
  switch (mode) {
    case ELocalStorageKey.LexicalResourcesList: {
      defaultAnswerInputField = Array.isArray(answerWordList)
        ? Array(answerWordList.length).fill('')
        : '';
      break;
    }
    case ELocalStorageKey.SpellCheckList: {
      defaultAnswerInputField = '';
      break;
    }
    default: {
      defaultAnswerInputField = '';
    }
  }

  const [blackList, setBlackList] = useState<string[]>([]);
  const [inNextBtnHover, setIsNextBtnHover] = useState<boolean>(false);
  const [answerInput, setAnswerInput] = useState<string | string[]>(
    defaultAnswerInputField
  );

  const renderInputFieldDynamically = () => {
    const commonWrapperStyle = `flex justify-start items-center basis-[85%]`;
    switch (mode) {
      case ELocalStorageKey.LexicalResourcesList: {
        return (
          <>
            {Array.isArray(defaultAnswerInputField) && (
              <React.Fragment>
                {defaultAnswerInputField.map((_, ind) => {
                  return (
                    <div className={`${commonWrapperStyle}`} key={ind}>
                      <input
                        type="text"
                        placeholder="Give Answer"
                        value={answerInput.at(ind)}
                        onChange={(e) => {
                          const existingInputList: string[] | string =
                            answerInput;
                          Array.isArray(answerInput) &&
                            (answerInput[ind] = e.target.value);
                          Array.isArray(existingInputList) &&
                            setAnswerInput([...existingInputList]);
                        }}
                        className={`w-[100%] focus:outline-none focus:border-primary focus:ring-priborder-primary border-gray-300 rounded-md p-2 border`}
                      />
                    </div>
                  );
                })}
              </React.Fragment>
            )}
          </>
        );
      }
      case ELocalStorageKey.SpellCheckList: {
        return (
          <div className={`${commonWrapperStyle}`}>
            <input
              type="text"
              placeholder="Give Answer"
              value={answerInput}
              onChange={(e) => setAnswerInput(e.target.value)}
              className={`w-[100%] focus:outline-none focus:border-primary focus:ring-priborder-primary border-gray-300 rounded-md p-2 border`}
            />
          </div>
        );
      }
    }
  };

  const addToBackListHandler = () => {
    switch (mode) {
      case ELocalStorageKey.SpellCheckList: {
        const isAlreadyAvailable = new Set(blackList).has(currentActiveWord);
        !isAlreadyAvailable && setBlackList([...blackList, currentActiveWord]);
        break;
      }
      case ELocalStorageKey.LexicalResourcesList: {
        let createNewDataFormatToStoreInBlackList = [];
        Array.isArray(answerWordList) &&
          createNewDataFormatToStoreInBlackList.push(
            currentActiveWord,
            ...answerWordList
          );
        const stringVersionOfNewDataFormat =
          createNewDataFormatToStoreInBlackList.join(' = ');
        const isAlreadyAvailable = new Set(blackList).has(
          stringVersionOfNewDataFormat
        );
        !isAlreadyAvailable &&
          setBlackList([...blackList, stringVersionOfNewDataFormat]);
        break;
      }
    }
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

  return (
    <div className={`grid grid-cols-12 gap-4`}>
      {/* left part wrapper */}
      <div className={`col-span-12 md:col-span-8 bg-white p-5 space-y-3`}>
        {/* input part */}
        <div className={`flex space-x-4`}>
          <div
            className={`cursor-pointer bg-[#F1F4F5]  rounded-full p-2 basis-[15%] flex justify-center items-center`}
            onClick={speakController}
          >
            <IconStore iconName={IconName.AiOutlineSound} fill="#449657" />
          </div>
          {renderInputFieldDynamically()}
        </div>
        {/* submit button part */}
        <div className={`flex justify-center items-center`}>
          <div>
            <Button
              btnText="Submit"
              colorSchema={BtnColorSchema.SolidBgWhiteTextGreen}
              clickHandler={() => answerSubmitHandler(answerInput)}
              isArrow={true}
            />
            {isRightAnswer !== null &&
              (isRightAnswer == true ? (
                <p>Right Answer</p>
              ) : (
                <p>{message || 'Wrong Answer'}</p>
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
              onClick={() => {
                if (currentActiveWord) {
                  nextButtonHandler();
                  setAnswerInput(defaultAnswerInputField);
                }
              }}
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

      {/* black list part */}
      <div className={`col-span-12  md:col-span-4 bg-white p-8  `}>
        <div className={`text-center`}>
          <p className={`bg-white text-xl font-bold`}>Black List</p>
        </div>
        <div className={`${styles.scrollContainer}`}>
          <div
            className={`bg-white overflow-y-scroll  h-[9.5rem] pr-4 ${styles.customScrollbar} `}
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
