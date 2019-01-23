import React from 'react';
import moment from 'moment';

interface IProps {
  hoursLine: number[];
  name: string;
  workingHours: number[];
  currentTime: moment.Moment;
}

const Row = ({ hoursLine, name, workingHours, currentTime }: IProps) => {
  let tdColumnSpans: Array<{ value: number; color: string }> = [];
  let i = 0;
  while (i < hoursLine.length) {
    if (workingHours.includes(hoursLine[i])) {
      tdColumnSpans.push({
        value: 9,
        color: workingHours.includes(currentTime.hour())
          ? 'table-primary'
          : 'table-secondary'
      });
      i += 9;
    } else {
      tdColumnSpans.push({
        value: 1,
        color: 'table-light'
      });
      i += 1;
    }
  }
  return (
    <tr>
      {tdColumnSpans.map((tdCol, index) => (
        <td
          colSpan={tdCol.value}
          key={index}
          className={'text-center ' + tdCol.color}
        >
          {tdCol.value > 1 ? name : ''}
        </td>
      ))}
    </tr>
  );
};

export default Row;
