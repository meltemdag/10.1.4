import React from 'react';
import { CaravanProvider, useCaravan } from './state/CaravanContext';
import RouteProgress from './components/RouteProgress';
import ChronologyModal from './components/ChronologyModal';
import EducationModal from './components/EducationModal';

import S0_Intro from './scenes/S0_Intro';
import S1_Context from './scenes/S1_Context';
import S2_StationA from './scenes/S2_StationA';
import S3_StationB from './scenes/S3_StationB';
import S4_StationC from './scenes/S4_StationC';
import S5_Summary from './scenes/S5_Summary';
import S6_Closing from './scenes/S6_Closing';

function SceneRenderer() {
  const { currentScene, showChronology, setShowChronology, showEducationComparison, setShowEducationComparison } = useCaravan();

  const renderScene = () => {
    switch (currentScene) {
      case 'S0': return <S0_Intro />;
      case 'S1': return <S1_Context />;
      case 'S2': return <S2_StationA />;
      case 'S3': return <S3_StationB />;
      case 'S4': return <S4_StationC />;
      case 'S5': return <S5_Summary />;
      case 'S6': return <S6_Closing />;
      default: return <S0_Intro />;
    }
  };

  return (
    <>
      <main className="main-content">
        {renderScene()}
      </main>

      {/* Extension Modals */}
      {showChronology && (
        <ChronologyModal onClose={() => setShowChronology(false)} />
      )}
      {showEducationComparison && (
        <EducationModal onClose={() => setShowEducationComparison(false)} />
      )}
    </>
  );
}

export default function App() {
  return (
    <CaravanProvider>
      <div className="app-wrapper">
        <RouteProgress />
        <SceneRenderer />
      </div>
    </CaravanProvider>
  );
}
