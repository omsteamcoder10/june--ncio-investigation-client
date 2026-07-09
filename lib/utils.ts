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
  const now = new Date();
  const currentPeriod = String(now.getFullYear()).slice(-2) + String(now.getMonth() + 1).padStart(2, '0');
  const prefix = `NCIO-${currentPeriod}-`;
  let nextNumber = 1;

  if (latestId?.startsWith(prefix)) {
    const numberMatch = latestId.match(/-(\d{4})$/);

    if (numberMatch) {
      nextNumber = parseInt(numberMatch[1], 10) + 1;
    }
  }

  return `${prefix}${String(nextNumber).padStart(4, '0')}`;
}

export function truncate(str: string, n: number): string {
  return str.length > n ? str.slice(0, n) + "..." : str;
}
