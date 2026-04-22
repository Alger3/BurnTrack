const metValues: Record<string, number> = {
  "walking-light": 3.0,
  "running-moderate": 8.0,
  "cycling-moderate": 7.0,
  "yoga-light": 3.0,
  "football-moderate": 7.0
};

export function getMetValue(sportType: string, intensity: string) {
  const key = `${sportType.toLowerCase()}-${intensity.toLowerCase()}`;
  return metValues[key] ?? 4.0;
}

export function calculateEstimatedCalories({
  metValue,
  weightKg,
  durationMinutes
}: {
  metValue: number;
  weightKg: number;
  durationMinutes: number;
}) {
  const durationHours = durationMinutes / 60;
  return Math.round(metValue * weightKg * durationHours);
}
