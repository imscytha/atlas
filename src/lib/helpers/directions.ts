/**
 * A tuple of all possible cardinal and intercardinal directions.
 * @readonly
 */
const DIRECTIONS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] as const;

/**
 * A union type representing the cardinal and intercardinal directions.
 */
export type Direction = typeof DIRECTIONS[number];

/**
 * Converts a map bearing (angle in degrees) into the corresponding
 * cardinal/intercardinal direction string. It normalizes the bearing to the
 * 0-360 range and maps it to one of the eight `Direction` values.
 *
 * @param bearing - The rotation angle of the map in degrees
 * @returns The calculated cardinal/intercardinal direction (e.g., 'N', 'NE').
 *
 * **@example**
 * ```typescript
 * const direction = b2d(90);
 * console.log(direction); // 'E'
 *
 * const direction = b2d(0.1234);
 * console.log(direction); // 'N'
 *
 * const direction3 = b2d(-67.420);
 * console.log(direction3); // 'NW'
 * ```
 */
export const b2d = (bearing: number): Direction => {
  const normalized = (bearing + 360) % 360;
  const index = Math.floor(
    (normalized / 360) * DIRECTIONS.length + 0.5
  ) % DIRECTIONS.length;

  return DIRECTIONS[index]!;
}
