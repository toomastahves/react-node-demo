import React from 'react';
import Card from './Card';
import '../styles/card.css';

export const CardsWrap = () => {
  return (
    <div className='card-wrap pure-g'>
      <div className='pure-u-1 pure-u-md-1-2'>
        <Card
          heading={'Node'}
          content={`Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
            Node.js uses an event-driven, non-blocking I/O model that makes it lightweight
            and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open
            source libraries in the world.`}
        />
      </div>
      <div className='pure-u-1 pure-u-md-1-2'>
        <Card
          heading={'Mongo'}
          content={`MongoDB is an open-source, document database designed for ease of
            development and scaling. The Manual introduces key concepts in MongoDB,
            presents the query language, and provides operational and administrative
            considerations and procedures as well as a comprehensive reference section.`}
        />
      </div>
      <div className='pure-u-1 pure-u-md-1-2'>
        <Card
          heading={'React'}
          content={` Lots of people use React as the V in MVC.
            Since React makes no assumptions about the rest of your
            technology stack, it's easy to try it out on a small
            feature in an existing project. `}
        />
      </div>
      <div className='pure-u-1 pure-u-md-1-2'>
        <Card
          heading={'Redux'}
          content={`Redux is a predictable state container for JavaScript apps.
            It helps you write applications that behave consistently,
            run in different environments (client, server, and native), and are easy to test.`}
        />
      </div>
    </div>
  );
};

export default CardsWrap;
