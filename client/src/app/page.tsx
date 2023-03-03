'use client';

import generateGuardianData from '../lib/generateGuardianData';

export default function Home() {
  const guardianData = generateGuardianData(10); // Generate 10 seconds of data
  console.log(guardianData);

  return (
    <main>
      <h1>Testing Client</h1>
    </main>
  );
}
