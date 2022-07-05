import React, {
  KeyboardEvent,
  ReactNode,
  useEffect,
  useState,
  useRef,
} from 'react';
import { Keyboard, BoxProps } from 'grommet';
import { StyledBox } from './DropdownKeyboardNavigation.styled';

interface DropdownKeyboardNavigationProps {
  children: ReactNode;
  dropdownList: Array<any>;
  onEnter: (arg1: KeyboardEvent, arg2: any) => void;
  getActiveItem: (arg1: number) => void;
  innerDropWrapperProps?: BoxProps;
}

const DropdownKeyboardNavigation: React.FC<DropdownKeyboardNavigationProps> = ({
  children,
  dropdownList,
  onEnter,
  getActiveItem,
  innerDropWrapperProps = {},
}) => {
  const [selectedOfSuggested, setSelectedOfSuggested] = useState<number>(-1);
  const suggestListRef = useRef<HTMLDivElement | any>();

  useEffect(() => {
    if (selectedOfSuggested !== null) {
      const suggestList = suggestListRef.current;
      const item = suggestList
        ? suggestList.children[selectedOfSuggested]
        : false;

      if (item) {
        if (
          item.offsetTop + item.offsetHeight >=
          suggestList.scrollTop + suggestList.offsetHeight
        ) {
          suggestList.scrollTop =
            item.offsetTop + item.offsetHeight - suggestList.offsetHeight;
        }

        if (item.offsetTop <= suggestList.scrollTop) {
          suggestList.scrollTop = item.offsetTop;
        }
      }
    }
  }, [selectedOfSuggested]);

  const changeActiveItemIndex = (index: number) => {
    setSelectedOfSuggested(index);
    getActiveItem(index);
  };

  const handleOnDown = (e: KeyboardEvent) => {
    e.preventDefault();

    if (
      !dropdownList.length ||
      selectedOfSuggested === dropdownList.length - 1
    ) {
      return false;
    }

    changeActiveItemIndex(selectedOfSuggested + 1);
    return false;
  };

  const handleOnUp = (e: KeyboardEvent) => {
    e.preventDefault();

    if (!dropdownList.length || selectedOfSuggested === 0) {
      return false;
    }

    changeActiveItemIndex(selectedOfSuggested - 1);
  };

  const handleOnEnter = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (dropdownList.length && selectedOfSuggested !== -1) {
      onEnter(e, dropdownList[selectedOfSuggested]);
      changeActiveItemIndex(-1);
    }
  };

  return (
    <Keyboard
      onDown={handleOnDown}
      onUp={handleOnUp}
      onEnter={handleOnEnter}
      onKeyDown={(event) => event.preventDefault()}
      target="document"
    >
      <StyledBox
        ref={suggestListRef}
        height={{ max: '340px' }}
        {...innerDropWrapperProps}
      >
        {children}
      </StyledBox>
    </Keyboard>
  );
};

export default DropdownKeyboardNavigation;
