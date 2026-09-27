'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <main className="empty"><h1>صار شيء غير متوقع</h1><p>Something went wrong. Please try again.</p><button onClick={reset}>حاول مرة ثانية / Retry</button></main>}
