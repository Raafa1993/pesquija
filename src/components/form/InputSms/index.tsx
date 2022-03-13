import React, {
  useRef,
  useCallback,
  useState,
  InputHTMLAttributes,
  useEffect,
} from "react";
import { maskDate, maskPhone } from "./masks";
import { useField } from '@unform/core';

import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  mask?: string;
}

export default function InputSms({ mask, name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);
  const { fieldName, defaultValue, error, registerField, } = useField(name)

  const handleIsFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsField(!!inputRef.current?.value);
  }, []);

  const handleKeyUp = useCallback(e => {
    if (mask === "date") {
      maskDate(e);
    } else if (mask === "fone") {
      maskPhone(e);
    } else {
      return;
    }
    return;
  },
  [mask],
);

useEffect(() => {
  registerField({
    name: fieldName,
    ref: inputRef.current,
    path: 'value',
  });

  // setIsField(true)
}, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isField={isField} isFocused={isFocused}>
      <input
        onFocus={handleIsFocus}
        onBlur={handleInputBlur}
        onKeyUp={handleKeyUp}
        name={name}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <Error />
      )}
    </Container>
  );
}
