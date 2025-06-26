import GradientText from "@/components/GradientText";
import DecryptedText from "@/components/DecryptedText";
import WorkList from "@/components/WorkList";
import { LuBrainCircuit } from "react-icons/lu";
import { MdRemoveRedEye } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";
import { TbReport } from "react-icons/tb";
export default function InnovationResearch() {
  return (
    <div className="innovation-research-section">
      <div className="innovation-research-container">
        <div className="left-side-innovation">
          <div className="innovation-title mb-8">
            <GradientText
              colors={[
                "#ffffff",
                "#BAA5FFFF",
                "#BAA5FFFF",
                "#8865FCFF",
                "#ffffff",
              ]}
              showBorder={false}
              className="custom-class"
            >
              RESEARCH & PUBLICATIONS
            </GradientText>
          </div>
          <div className="innovation-desc">
            <div>
              <DecryptedText
                text="Customize me."
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed first-desc"
                parentClassName="all-letters first-desc"
                encryptedClassName="encrypted"
                animateOn="view"
              />
            </div>
            <div>
              <DecryptedText
                text="Bring the future."
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed second-desc"
                parentClassName="all-letters second-desc"
                encryptedClassName="encrypted"
                animateOn="view"
              />
            </div>
          </div>
          <div className="innovation-badge-container gap-30">
            <div className="work-list-container flex  items-center gap-10 ">
              <div className="left-side">
                <div className="vertical-dashed-line"></div>
                <hr />
              </div>
              <div className="right-side">
                <div className="badge-icon-container flex items-center justify-center">
                  <LuBrainCircuit color="#404141FF" size={20} />
                </div>
                <div className="badge-title text-black text-xl">NLP</div>
                <div className="badge-desc break-words whitespace-normal text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, temporibus.
                </div>
              </div>
            </div>
            <div className="work-list-container flex  items-center gap-10 ">
              <div className="left-side">
                <div className="vertical-dashed-line"></div>
                <hr />
              </div>
              <div className="right-side">
                <div className="badge-icon-container flex items-center justify-center">
                  <MdRemoveRedEye color="#404141FF" size={20} />
                </div>
                <div className="badge-title text-black text-xl">
                  Computer Vision
                </div>
                <div className="badge-desc break-words whitespace-normal text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, temporibus.
                </div>
              </div>
            </div>
            <div className="work-list-container flex  items-center gap-10 ">
              <div className="left-side">
                <div className="vertical-dashed-line"></div>
                <hr />
              </div>
              <div className="right-side">
                <div className="badge-icon-container flex items-center justify-center">
                  <FiBarChart2 color="#404141FF" size={20} />
                </div>
                <div className="badge-title text-black text-xl">
                  Computer Vision
                </div>
                <div className="badge-desc break-words whitespace-normal text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, temporibus.
                </div>
              </div>
            </div>

            <div className="work-list-container flex  items-center gap-10 ">
              <div className="left-side">
                <div className="vertical-dashed-line"></div>
                <hr />
              </div>
              <div className="right-side">
                <div className="badge-icon-container flex items-center justify-center">
                  <TbReport color="#404141FF" size={20} />
                </div>
                <div className="badge-title text-black text-xl">
                  P&O Research
                </div>
                <div className="badge-desc break-words whitespace-normal text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, temporibus.
                </div>
              </div>
            </div>
            <div className="work-list-container flex  items-center gap-10 ">
              <div className="left-side">
                <div className="vertical-dashed-line"></div>
                <hr />
              </div>
              <div className="right-side">
                <div className="badge-icon-container flex items-center justify-center">
                  <TbReport color="#404141FF" size={20} />
                </div>
                <div className="badge-title text-black text-xl">4G AI</div>
                <div className="badge-desc break-words whitespace-normal text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, temporibus.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side-innovation">
          <div className="innovation-video-container">
            <video src="/rnd.mp4" autoPlay muted loop></video>
          </div>
        </div>
      </div>
    </div>
  );
}
