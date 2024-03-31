import { Button } from '@src/components/root';
import { ELocalStorageKey } from '@src/types/common';
import { BtnColorSchema } from '@src/types/root';
import React, { useEffect, useState } from 'react';
import InputBox from './input-box';
import { ILexicalSchema, IWordInputBox } from '@src/types/compound';
import { optionsValueMaxLimit } from '@root/__mock-props__/component/compound/word-input-box';

export const WordInputBox = ({ mode, title }: IWordInputBox) => {
  const defaultMessage = {
    payload: '',
    status: false,
  };
  const [wordInput, setWordInput] = useState<string[]>(['']);
  const optionInputField = Array(optionsValueMaxLimit).fill('');
  const wordInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    ind: number
  ) => {
    const wordInputClone = [...wordInput];
    const inputValue = e.target.value;
    wordInputClone[ind] = inputValue;
    setWordInput(wordInputClone);
  };
  const [message, setMessage] =
    useState<{ payload: string; status: boolean }>(defaultMessage);

  const wordAddHandler = () => {
    const cloneOfWordInput = wordInput;
    const verifyEmptyFieldExistOrNot = new Set(wordInput).has('');
    if (!verifyEmptyFieldExistOrNot) {
      switch (mode) {
        case ELocalStorageKey.SpellCheckList: {
          const getExistData =
            localStorage.getItem(ELocalStorageKey.SpellCheckList) &&
            JSON.parse(
              localStorage.getItem(ELocalStorageKey.SpellCheckList) ||
                'Not found'
            );

          if (wordInput[0]) {
            getExistData
              ? localStorage.setItem(
                  ELocalStorageKey.SpellCheckList,
                  JSON.stringify([...getExistData, ...wordInput])
                )
              : localStorage.setItem(
                  ELocalStorageKey.SpellCheckList,
                  JSON.stringify([...wordInput])
                );
          }
          wordInput[0] &&
            setMessage({
              status: true,
              payload: 'Data has stored successfully',
            });
          setWordInput(cloneOfWordInput);
          break;
        }
        case ELocalStorageKey.LexicalResourcesList: {
          const getExistData =
            localStorage.getItem(ELocalStorageKey.LexicalResourcesList) &&
            JSON.parse(
              localStorage.getItem(ELocalStorageKey.LexicalResourcesList) ||
                'Not found'
            );
          if (wordInput.length) {
            const createDataFormat: ILexicalSchema = {
              createAt: Date.now(),
              words: wordInput,
            };
            getExistData && getExistData.length
              ? localStorage.setItem(
                  ELocalStorageKey.LexicalResourcesList,
                  JSON.stringify([...getExistData, createDataFormat])
                )
              : localStorage.setItem(
                  ELocalStorageKey.LexicalResourcesList,
                  JSON.stringify([createDataFormat])
                );
          }
          wordInput.length &&
            setMessage({
              status: true,
              payload: `${wordInput.length} Data has stored successfully`,
            });
          setWordInput(cloneOfWordInput);
          break;
        }
        default: {
          setMessage({
            status: false,
            payload: `Some things went wrong`,
          });
          setWordInput(cloneOfWordInput);
        }
      }
    } else {
      setMessage({
        status: false,
        payload: `Fill all empty input field!!!`,
      });
      setWordInput(cloneOfWordInput);
    }
    cloneOfWordInput.fill('');
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
          <div className={`space-y-3`}>
            <div className={`text-center `}>
              <label
                htmlFor="word-input"
                className={`text-lg font-semibold flex justify-center items-center `}
              >
                <span className={`capitalize`}>{title}</span>
                {mode == ELocalStorageKey.LexicalResourcesList && (
                  <select
                    className={`h-4 w-4 p-3`}
                    onChange={(e) =>
                      setWordInput(Array(+e.target.value).fill(''))
                    }
                  >
                    {optionInputField.map((_, ind) => {
                      const optionValue = ++ind;
                      return (
                        <option
                          key={ind}
                          className="text-sm"
                          value={optionValue}
                        >
                          {optionValue}
                        </option>
                      );
                    })}
                  </select>
                )}
              </label>
            </div>
            {wordInput.map((inputField, ind) => {
              return (
                <InputBox
                  wordInput={inputField}
                  inputOnChangeHandler={(e) => {
                    wordInputHandler(e, ind);
                  }}
                />
              );
            })}
          </div>
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
              <span className={`text-primary`}>{message.payload}</span>
            ) : (
              <span className={` text-red-700`}>{message.payload}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
