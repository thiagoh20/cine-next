const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-rose-100/20 before:bg-gradient-to-r before:from-transparent before:via-slate-500/20 before:to-transparent';

export default function CardSkeleton() {
  return (
    <div className="relative box-contenth-52  md:h-52 lg:h-72 justify-center content-center rounded-lg ">
      <div className={`${shimmer} relative space-y-5 overflow-hidden rounded-lg bg-white/10 p-4 shadow-xl shadow-black/10 h-52 md:h-52 lg:h-72 `}>
        <div className="rounded-md  h-[100%]  bg-slate-400/40 ">
        </div>
      </div>
    </div>
  );
}


