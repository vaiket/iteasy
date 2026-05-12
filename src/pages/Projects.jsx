import React from 'react';
import PortfolioSection from '../components/PortfolioSection';
import QuestionsAnswers from '../components/QuestionsAnswers';

export default function Projects() {
  return (
    <>
      <PortfolioSection isStandalone={true} />
      <QuestionsAnswers />
    </>
  );
}
