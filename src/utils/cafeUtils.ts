/**
 * Utility functions for cafe identification
 */

export type CafeName = 'tastoria' | 'cafe-hangout';

/**
 * Get cafe name from URL search params or default to 'tastoria'
 * @param searchParams - URL search params (from useSearchParams or window.location.search)
 * @returns Cafe name
 */
export function getCafeName(searchParams?: URLSearchParams | string): CafeName {
  let params: URLSearchParams;
  
  if (typeof searchParams === 'string') {
    params = new URLSearchParams(searchParams);
  } else if (searchParams) {
    params = searchParams;
  } else if (typeof window !== 'undefined') {
    params = new URLSearchParams(window.location.search);
  } else {
    return 'tastoria'; // Default
  }
  
  const cafe = params.get('cafe')?.toLowerCase();
  if (cafe === 'tastoria' || cafe === 'cafe-hangout') {
    return cafe as CafeName;
  }
  
  return 'tastoria'; // Default to tastoria
}

/**
 * Get cafe display name
 */
export function getCafeDisplayName(cafeName: CafeName): string {
  return cafeName === 'tastoria' ? 'Tastoria' : 'Cafe Hangout';
}



