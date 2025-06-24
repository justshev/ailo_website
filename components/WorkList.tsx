export default function WorkList({
  badge_title,
  badge_description,
}: {
  badge_title?: string;
  badge_description?: string;
}) {
  return (
    <div className="work-list-container flex  items-center gap-10 ">
      <div className="left-side">
        <div className="vertical-dashed-line"></div>
        <hr />
      </div>
      <div className="right-side">
        <div className="badge-icon-container"></div>
        <div className="badge-title text-black text-xl">{badge_title}.</div>
        <div className="badge-desc break-words whitespace-normal text-gray-400 text-sm">
          {badge_description}
        </div>
      </div>
    </div>
  );
}
