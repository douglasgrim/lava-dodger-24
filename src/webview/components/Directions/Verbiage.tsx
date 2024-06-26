import React, { ReactElement } from 'react';
import { VerbiageType } from '../../../app/types';
import { getImage } from '../../utils/getImage';
import '../sidebars.css';

const Verbiage = ({ text, imageUrl }: VerbiageType): ReactElement => {
  return (
    <div className="verbiage">
      {
        imageUrl && (
          <div className="verbiage-icon">
            <img src={getImage(imageUrl)} />
          </div>
        )
      }
      <div className="verbiage-text">
        {text}
      </div>
    </div>
  );
}

export default Verbiage;