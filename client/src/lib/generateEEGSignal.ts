import { add, MathType, Matrix, multiply, range, sin, zeros } from 'mathjs';

export default function generateEEGSignal(
  amplitudes: number[],
  frequencies: number[],
  sampleRate: number,
  duration: number,
  noise?: boolean,
  noiseAmplitude?: number
): number[] {
  const x = range(0, duration, 1 / sampleRate);
  let signal = zeros(x.size()[0]) as MathType;

  for (let i = 0; i < amplitudes.length; i++) {
    if (noise) {
      noiseAmplitude = noiseAmplitude
        ? Math.random() * noiseAmplitude
        : Math.random() * 5; // Default noise amplitude is 10

      signal = add(
        signal,
        multiply(
          amplitudes[i],
          sin(
            multiply(
              2 * Math.PI * frequencies[i] * noiseAmplitude,
              x
            ) as unknown as number
          )
        )
      );
    } else {
      signal = add(
        signal,
        multiply(
          amplitudes[i],
          sin(multiply(2 * Math.PI * frequencies[i], x) as unknown as number)
        ) as MathType
      );
    }
  }

  return (signal as Matrix)
    .toArray()
    .flat()
    .filter((val) => !isNaN(val as number))
    .map((val) => Number(val));
}
