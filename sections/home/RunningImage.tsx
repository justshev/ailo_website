import PartnetSlider from "@/components/PartnerSlider";

export default function RunningImage() {
  return (
    <div className="flex justify-center items-center mt-30 mb-10 flex-col">
      <div className="running-title">Our partnership</div>
      <div className="running-images-container mt-10">
        <PartnetSlider />
      </div>
    </div>
  );
}
