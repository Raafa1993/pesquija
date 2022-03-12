import React, {
  useRef,
  useCallback,
  useState,
  InputHTMLAttributes,
} from "react";
import { maskDate, maskPhone } from "./masks";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  mask?: string;
}

export default function InputForm({ mask, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

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
  return (
    <Container isField={isField} isFocused={isFocused}>
      <input
        onFocus={handleIsFocus}
        onBlur={handleInputBlur}
        onKeyUp={handleKeyUp}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
}
