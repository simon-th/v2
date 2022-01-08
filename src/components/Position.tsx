import React from 'react';
import { createListItemsFromStringArray } from '../util/util-functions';

interface PositionProps {
  company: string;
  position: string;
  time: string;
  details: string[];
  initialDropdownStatus: boolean;
}

export default function Position(props: PositionProps) {
  const { company, position, time, details, initialDropdownStatus } = props;
  const [showDetails, setShowDetails] = React.useState(initialDropdownStatus);
  return (
    <div>
      {/* <div>
        <div>
          <button
            type="button"
            className=""
            onClick={() => setShowDetails(!showDetails)}
          >
            <div>
              <div className="Position-dropdown-arrow">{`${
                showDetails ? `\u25be` : `\u25b8`
              }`}</div>
              <div>{`${position} @ ${company}`}</div>
            </div>
          </button>
        </div>
        <div className="text-end">
          <h4 className="Site-small-text Color-tertiary-text">{time}</h4>
        </div>
      </div>
      {showDetails ? (
        <ul className="list-disc">{createListItemsFromStringArray(details)}</ul>
      ) : null} */}
    </div>
  );
}
