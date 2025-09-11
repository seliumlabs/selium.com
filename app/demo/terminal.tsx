export default function Terminal({ value }: { value?: string }) {
  return (
    <div className="bg-black w-full h-full font-mono text-sm border-slate-300 border-1 p-2 rounded-md">
      demo$ {value}
      <span className="animate-blink">▋</span>
    </div>
  );
}
