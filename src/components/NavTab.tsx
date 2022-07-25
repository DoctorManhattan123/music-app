import React from 'react';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../hooks/useDimensions';

export interface INavTab {
  link: string;
  message: string;
  numberOfTabs: number;
}

function NavTab({ link, message, numberOfTabs }: INavTab): JSX.Element {
  const { height, width } = useWindowDimensions();

  const navTabHeight = height / 10;
  const navTabTextHeight = height / 15;
  const topTextMargin = navTabHeight / 2 - navTabTextHeight / 2;

  return (
    <div
      style={{ height: `${navTabHeight}px`, width: `${100 / numberOfTabs}%`, border: "solid yellow 1px", justifyContent: "center", textAlign: "center" }}
    >
      <Link
        to={link}
        style={{
          height: `${navTabTextHeight}`,
            width: `${100 / (numberOfTabs+2)}%`,
          position: 'absolute',
            textAlign: "center",
          top: `${topTextMargin}px`,
          border: "solid black 1px"
        }}
      >
        {message}
      </Link>
    </div>
  );
}

export default NavTab;
