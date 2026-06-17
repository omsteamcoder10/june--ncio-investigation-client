// lib/utils.ts

export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatMonth(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });
}

export function getAge(dateOfBirth: string): number {
  const today = new Date();
  const dob = new Date(dateOfBirth);
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

export function isBirthdayToday(dateOfBirth: string): boolean {
  const today = new Date();
  const dob = new Date(dateOfBirth);
  return today.getMonth() === dob.getMonth() && today.getDate() === dob.getDate();
}

export function isBirthdayThisMonth(dateOfBirth: string): boolean {
  const today = new Date();
  const dob = new Date(dateOfBirth);
  return today.getMonth() === dob.getMonth();
}

export function generateApplicationId(latestId?: string): string {
  // If latestId is provided, increment it
  if (latestId) {
    // Extract the prefix (letters) and number from the latest ID
    // Supports formats like "NCIO0000", "NCIO1234", etc.
    const prefix = latestId.match(/^[A-Z]+/)?.[0] || "NCIO";
    const numberMatch = latestId.match(/\d+$/);
    let nextNumber = 1;
    
    if (numberMatch) {
      nextNumber = parseInt(numberMatch[0]) + 1;
    }
    
    const paddedNumber = String(nextNumber).padStart(4, '0');
    return `${prefix}${paddedNumber}`;
  }
  
  // Fallback to random generation if no latestId provided (backward compatibility)
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const part1 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  const part2 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `NCIO-APP-${part1}-${part2}`;
}

export function truncate(str: string, n: number): string {
  return str.length > n ? str.slice(0, n) + "..." : str;
}