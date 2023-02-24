/* eslint-disable no-useless-escape */

/* -------------------------------------------------------------------------- */
// 아이디 체크 유틸리티
// ▸ 5 ~ 20자 — 영문, 숫자 조합
/* -------------------------------------------------------------------------- */

export const isId = (value, { min = 4, max = 19 } = {}) => {
  const regExp = new RegExp(`^[a-z]+[a-z0-9]{${min},${max}}$`, 'g');
  return regExp.test(value);
};

/* -------------------------------------------------------------------------- */
// 이메일 체크 유틸리티
/* -------------------------------------------------------------------------- */

export const isEmail = (value) => {
  const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(value);
};

/* -------------------------------------------------------------------------- */
// 패스워드 체크 유틸리티
// ▸ [normal 모드] 6 ~ 16자 — 영문, 숫자 조합
// ▸ [strong 모드] 6 ~ 16자 — 영문, 숫자, 특수문자 최소 한가지 조합
/* -------------------------------------------------------------------------- */

export const isPassword = (
  value,
  { min = 6, max = 16, isStrong = false } = {}
) => {
  let regExp = null;

  if (!isStrong) {
    regExp = new RegExp(`^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{${min},${max}}$`);
  } else {
    regExp = new RegExp(
      `^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$\`~!@$!%*#^?&\\(\\)\-_=+]).{${min},${max}}$`
    );
  }

  return regExp.test(value);
};

/* -------------------------------------------------------------------------- */
// 폰 넘버 체크 유틸리티
// ▸ [normal 모드] 010-9814-1461
// ▸ [withoutHyphen 활성화] 010-9814-1461 or 01098141461
/* -------------------------------------------------------------------------- */

export const isPhoneNumber = (value, withoutHyphen = false) => {
  value = value.toString();

  if (withoutHyphen && value.length < 12) {
    value = value.split('');
    let firstNumber = value.splice(0, 3).join('');
    let lastNumber = value.splice(value.length - 4).join('');
    let middleNumber = value.join('');
    value = `${firstNumber}-${middleNumber}-${lastNumber}`;
  }

  const regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

  return regExp.test(value);
};

/* -------------------------------------------------------------------------- */
// 체크 유틸리티
// ▸ 한글, 영문, 대문자, 소문자, 숫자, 공백, 특수문자 (_-/,.)
/* -------------------------------------------------------------------------- */

export const isCheck = (value, checkType = isCheck.types[0]) => {
  const { types } = isCheck;
  let regExp = null;

  switch (checkType) {
    // '영,대소문자,문자사이공백'
    default:
    case types[0]:
      regExp = /^[a-zA-Z][a-zA-Z ]*$/;
      break;
    // '영,대소문자,숫자,문자사이공백,특수문자(-_/,.)'
    case types[1]:
      regExp = /^[a-zA-Z0-9-_/,.][a-zA-Z0-9-_/,.]*$/;
      break;
    // '한영'
    case types[2]:
      regExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣]*$/;
      break;
    // '한'
    case types[3]:
      regExp = /[ㄱ-힣]/;
  }

  return regExp.test(value);
};

isCheck.types = [
  '영,대소문자,문자사이공백',
  '영,대소문자,숫자,문자사이공백,특수문자(-_/,.)',
  '한영',
  '한',
];

/* -------------------------------------------------------------------------- */
// validator
/* -------------------------------------------------------------------------- */

export const validator = {
  isId,
  isEmail,
  isPassword,
  isPhoneNumber,
  isCheck,
};