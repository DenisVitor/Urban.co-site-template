const isNumericInput = (event: any) => {
  const key = event.keyCode;
  return (key >= 48 && key <= 57) || (key >= 96 && key <= 105);
};

const isModifierKey = (event: any) => {
  const key = event.keyCode;
  return (
    event.shiftKey === true ||
    key === 35 ||
    key === 36 ||
    key === 8 ||
    key === 9 ||
    key === 13 ||
    key === 46 ||
    (key > 36 && key < 41) ||
    ((event.ctrlKey === true || event.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
  );
};

export const enforceFormat = (event: any) => {
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault();
  }
};

export const formatToPhone = (event: any) => {
  if (isModifierKey(event)) {
    return;
  }

  const input = event.target.value.replace(/\D/g, "").substring(0, 10);
  const areaCode = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) {
    event.target.value = `(${areaCode}) ${middle} - ${last}`;
  } else if (input.length > 3) {
    event.target.value = `(${areaCode}) ${middle}`;
  } else if (input.length > 0) {
    event.target.value = `(${areaCode}`;
  }
};
