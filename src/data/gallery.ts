export interface Photo {
  // file name in src/assets/gallery/
  file: string;
  alt: string;
  caption?: string;
}

// To add a photo: drop it in src/assets/gallery/ and add an entry. Photos show in this order.
//   { file: 'test-fire.jpg', alt: 'Engine test fire at night', caption: 'RED hot fire, Mar 2026' },
export const photos: Photo[] = [
  { file: 'fab_tour.jpg', alt: 'Group photo in smock suits', caption: 'Touring TI\'s Richardson FAB' },
  { file: 'e1-3_hotfire.png', alt: 'Engine test fire at night', caption: 'Failed ignition during a 5am hotfire' },
  { file: 'southwest_presentation.jpeg', alt: 'Six people standing in front of a projected slideshow', caption: 'Presenting for Southwest executives' },
  { file: 'ignitors_gen1_launch.jpg', alt: 'Man crouched before launching model rocket', caption: 'Launching my first model rocket' },
];
