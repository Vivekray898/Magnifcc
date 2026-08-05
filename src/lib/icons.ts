// src/lib/icons.ts

// Icon map with SVG strings for Astro
// You can generate these from lucide-react icons

export const ICONS: Record<string, string> = {
  brain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4a4 4 0 0 1 3.5 6.5l-2 3.5A4 4 0 0 1 8.5 14.5l2-3.5A4 4 0 0 1 12 4z"/><path d="M12 4v16"/><path d="M8.5 14.5A4 4 0 0 0 12 20"/><path d="M12 20a4 4 0 0 0 3.5-6.5"/></svg>`,

  heartPulse: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/><polyline points="4 12 8 12 10 8 14 16 16 12 20 12"/></svg>`,

  hospital: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 15h18"/></svg>`,

  stethoscope: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 13.5a8.5 8.5 0 1 0 17 0"/><path d="M8.5 5a4.5 4.5 0 0 0-4 4.5"/><path d="M4.5 5a4.5 4.5 0 0 1 4 4.5"/><path d="M14 9.5a2.5 2.5 0 0 0-2.5 2.5"/><path d="M14 14.5a2.5 2.5 0 0 0 2.5-2.5"/><circle cx="19" cy="12" r="1"/><circle cx="14" cy="12" r="3"/></svg>`,

  microscope: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h12"/><path d="M6 6h6"/><path d="M6 10h6"/><path d="M10 6v12"/><circle cx="16" cy="16" r="4"/><path d="M16 20a4 4 0 0 0 0-8"/></svg>`,

  tooth: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3c-2 0-4 2-4 6s1 8 3 10c1 1 2 2 3 2s2-1 3-2c1 1 2 2 3 2s2-1 3-2c2-2 3-6 3-10s-2-6-4-6c-1 0-2 1-3 2-1-1-2-2-3-2s-2 1-3 2c-1-1-2-2-3-2z"/><path d="M7 9c0 1 1 2 2 2s2-1 2-2"/><path d="M15 9c0 1 1 2 2 2s2-1 2-2"/></svg>`,

  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,

  scissors: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12"/><path d="M6 18l12-12"/><path d="M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path d="M21 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path d="M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path d="M21 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>`,

  ambulance: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15h16"/><path d="M8 15v4"/><path d="M16 15v4"/><path d="M2 9h20"/><path d="M2 9l2-4h16l2 4"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>`,

  syringe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7l-2 2"/><path d="M17 9l-2 2"/><path d="M21 5l-2 2"/><path d="M15 11l-2 2"/><path d="M11 15l-2 2"/><path d="M7 19l-2 2"/><path d="M7 3h7"/><path d="M3 7h7"/><path d="M7 3v4"/><path d="M3 7v4"/><path d="M14 11v4"/></svg>`,

  pill: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 2L8 10l6 6 8-8-6-6z"/><path d="M14 8L2 20l2 2 12-12"/></svg>`,

  clipboard: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><polyline points="9 9 12 12 15 9"/><path d="M9 12l3 3 3-3"/></svg>`,

  dna: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l3 3"/><path d="M21 21l-3-3"/><path d="M21 3l-3 3"/><path d="M3 21l3-3"/><path d="M10 10l4 4"/><path d="M10 14l4-4"/><path d="M14 6l4 4"/><path d="M6 14l4 4"/><path d="M14 10l4 4"/><path d="M10 18l4 4"/><path d="M6 6l4 4"/></svg>`,

  eye: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,

  heart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,

  heartHandshake: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h4l2-3"/><path d="M11 14h4l2-3"/><path d="M19 14h2"/><path d="M5 14v4"/><path d="M13 14v4"/><path d="M21 14v4"/><path d="M7 18h4"/><path d="M15 18h4"/><path d="M5 18v4"/><path d="M13 18v4"/><path d="M21 18v4"/><path d="M7 22h4"/><path d="M15 22h4"/></svg>`,

  activity: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,

  bone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8a3 3 0 0 1-3-3 3 3 0 0 1 6 0 3 3 0 0 1-3 3z"/><path d="M12 16a3 3 0 0 1-3-3 3 3 0 0 1 6 0 3 3 0 0 1-3 3z"/><path d="M12 4a3 3 0 0 1 3-3 3 3 0 0 1 0 6 3 3 0 0 1-3-3z"/><path d="M12 20a3 3 0 0 1 3-3 3 3 0 0 1 0 6 3 3 0 0 1-3-3z"/></svg>`,

  // Add more icons as needed...
};

// Helper to get icon SVG
export const getIcon = (key: string): string => {
  return ICONS[key] || '';
};