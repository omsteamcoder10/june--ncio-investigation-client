// globals.css.d.ts
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// For global CSS imports (non-module)
declare module 'app/globals.css' {
  const content: any;
  export default content;
}