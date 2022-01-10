import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { p, h3 } from '../styles/common-styles';
import { createListItemsFromStringArray } from '../util/util-functions';
import '../styles/dropdown.css';

export interface PositionJSONProps {
  company: string;
  position: string;
  time: string;
  details: string[];
}

type PositionProps = PositionJSONProps & {
  initialDropdownStatus: boolean;
};

export default function Position(props: PositionProps) {
  const { company, position, time, details, initialDropdownStatus } = props;
  const [showDetails, setShowDetails] = React.useState(initialDropdownStatus);
  const titleMargin = showDetails ? '' : 'mb-4';
  return (
    <div>
      <div className="flex justify-between">
        <button
          type="button"
          className={`text-left transition ease-in-out hover:-translate-x-1 ${titleMargin}`}
          onClick={() => setShowDetails(!showDetails)}
        >
          <div className="flex gap-3">
            <div>{`${showDetails ? `\u25be` : `\u25b8`}`}</div>
            <h2 className={`${h3}`}>{`${position} @ ${company}`}</h2>
          </div>
        </button>
        <h4 className="w-56 md:w-4/12 pl-6 md:pl-8 text-right text-sm">
          {time}
        </h4>
      </div>
      <CSSTransition
        in={showDetails}
        timeout={0}
        classNames="dropdown"
        unmountOnExit
      >
        <ul className="list-disc my-4 px-6 text-gray-400 ease-in-out">
          {createListItemsFromStringArray(details, `${p} mb-3`)}
        </ul>
      </CSSTransition>
    </div>
  );
}
