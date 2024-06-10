export default function BooklistingItemPlaceholder() {
  return (
    <div className="rounded-2xl bg-white">
      <div className="aspect-video overflow-hidden rounded-t-2xl bg-greyish"></div>
      <div className="flex animate-pulse flex-col gap-3 p-4">
        <p className="max-w-[80%] rounded-xl bg-greyish/40 p-3"></p>
        <p className="max-w-[60%] rounded-xl bg-greyish/40 p-2"></p>
        <p className="max-w-[40%] rounded-xl bg-greyish/40 p-2"></p>
      </div>
    </div>
  );
}
