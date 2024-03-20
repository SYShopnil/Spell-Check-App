import { Button } from '@src/components/root';
import { ELocalStorageKey } from '@src/types/common';
import { BtnColorSchema } from '@src/types/root';
import React, { useEffect, useState } from 'react';

export const WordInputBox = () => {
  const defaultMessage = {
    payload: '',
    status: false,
  };

  const [wordInput, setWordInput] = useState('');
  const [message, setMessage] =
    useState<{ payload: string; status: boolean }>(defaultMessage);
  const wordAddHandler = (
    e:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    const getExistData =
      localStorage.getItem(ELocalStorageKey.SpellCheckList) &&
      JSON.parse(
        localStorage.getItem(ELocalStorageKey.SpellCheckList) || 'Not found'
      );

    if (wordInput) {
      getExistData
        ? localStorage.setItem(
            ELocalStorageKey.SpellCheckList,
            JSON.stringify([...getExistData, wordInput])
          )
        : localStorage.setItem(
            ELocalStorageKey.SpellCheckList,
            JSON.stringify([wordInput])
          );
    }
    wordInput &&
      setMessage({
        status: true,
        payload: 'Data has stored successfully',
      });
  };

  useEffect(() => {
    message.payload &&
      setTimeout(() => {
        setMessage(defaultMessage);
      }, 1500);
  }, [message]);
  return (
    <div
      className={`flex justify-center items-center shadow-primary bg-[#FFFFFF] p-7 `}
    >
      <div className={`space-y-3`}>
        <div className={`space-x-3`}>
          <label htmlFor="word-input" className={`text-lg font-semibold `}>
            Word:
          </label>
          <input
            type="text"
            className="focus:outline-none focus:border-primary focus:ring-priborder-primary border-gray-300 rounded-md p-2 border"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setWordInput(e.target.value);
            }}
            value={wordInput}
          />
        </div>
        <div>
          <div className={`flex justify-center items-center`}>
            <Button
              btnText="Add"
              colorSchema={BtnColorSchema.SolidBgWhiteTextGreen}
              clickHandler={wordAddHandler}
              isArrow={false}
            />
          </div>
          <p className={`min-h-5`}>
            {message.status ? (
              <span className={`text-red-700`}>{message.payload}</span>
            ) : (
              <span className={`text-primary`}>{message.payload}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
