import { createIcon } from '@chakra-ui/react';

export const LuxTriangle = createIcon({
  displayName: 'LuxTriangle',
  viewBox: '0 0 100 100',
  path: (
    <path
      d="M50 10 L90 80 L10 80 Z"
      fill="currentColor"
    />
  ),
});

// Perfect equilateral triangle:
// Top vertex: (50, 10)
// Bottom left: (10, 80)
// Bottom right: (90, 80)
// This creates a triangle with base width of 80 and proper height for equilateral proportions