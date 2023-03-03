import generateEEGSignal from './generateEEGSignal';

type GeneratedGuardianSample = {
  ch1: number;
  ch2: number;
  timestamp: number;
};

export default function generateGuardianData(
  durationInSeconds: number
): GeneratedGuardianSample[] {
  const generatedGuardianData: GeneratedGuardianSample[] = [];
  const ch1: number[] = [];
  const ch2: number[] = [];

  for (let i = 0; i < durationInSeconds; i++) {
    // Generate random EEG signals for each channel
    const ch1Sample = generateEEGSignal([10, 3], [5, 20], 250, 1, true, 5);
    const ch2Sample = generateEEGSignal([10, 3], [5, 20], 250, 1, true, 5);

    ch1.push(...ch1Sample);
    ch2.push(...ch2Sample);
  }

  ch1.forEach((_, index) => {
    const dataSample: GeneratedGuardianSample = {
      timestamp: performance.now(),
      ch1: ch1[index],
      ch2: ch2[index],
    };

    generatedGuardianData.push(dataSample);
  });

  return generatedGuardianData;
}
