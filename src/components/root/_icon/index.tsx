import { IIconStore, IconEnums } from '@src/types/root';
import React from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { RiGraduationCapFill } from 'react-icons/ri';
import { MdQuestionMark } from 'react-icons/md';
import { AiOutlineSound } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';

export const IconStore = ({ iconName, fill }: IIconStore) => {
  switch (iconName) {
    case IconEnums.DownArrow: {
      return <IoIosArrowDown />;
    }
    case IconEnums.GraduationCap: {
      return <RiGraduationCapFill fill={fill} size={55} />;
    }
    case IconEnums.QuestionSign: {
      return <MdQuestionMark fill={fill} size={45} />;
    }
    case IconEnums.AiOutlineSound: {
      return <AiOutlineSound fill={fill} size={50} />;
    }
    case IconEnums.ArrowRight: {
      return <FaArrowRight fill={fill} size={25} />;
    }
    default: {
      return <IoIosArrowDown />;
    }
  }
};
