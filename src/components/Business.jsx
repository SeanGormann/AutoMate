import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { introvideo } from "../assets";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Why work with us?<br className="sm:block hidden" />
      </h2>
      {/*<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p> */}
      {/* Replace the <p> tag with a <video> element */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* gradient start */}
        <div className="absolute z-[0] w-[20%] h-[20%] bottom-20 pink__gradient" />
        <div className="absolute z-[1] w-[50%] h-[30%] rounded-full white__gradient bottom-10" />
        <div className="absolute z-[0] w-[30%] h-[30%] right-20 bottom-0 blue__gradient" />
        {/* gradient end */}
      
      <video className="mt-5" width="600" height="500" controls style={{ width: '600px', height: '500px' }}>
        <source src={introvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>


      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
