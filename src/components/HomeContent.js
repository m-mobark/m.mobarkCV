import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './contentData';

export default function HomeContent() {
  return (
    <div>
      <div className="accordion">
      {accordionData.map(({ title, content }) => ( <Accordion title={title} content={content} />))}
      </div>
    </div>
  )
}
