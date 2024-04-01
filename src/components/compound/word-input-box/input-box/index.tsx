import React from 'react';

interface IInputBox {
  wordInput: string;
  inputOnChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = ({ inputOnChangeHandler, wordInput }: IInputBox) => {
  return (
    <div>
      <input
        type="text"
        className="w-[100%] focus:outline-none focus:border-primary focus:ring-priborder-primary border-gray-300 rounded-md p-2 border"
        onChange={inputOnChangeHandler}
        value={wordInput}
      />
    </div>
  );
};

export default InputBox;
