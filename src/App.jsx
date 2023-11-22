import styles from "./style";
import { Business, CTA, Footer, Navbar, Stats, Testimonials, Hero, Works, WorkflowTimeline} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Works />
        {/* <Stats />*/}       
        <WorkflowTimeline />
        {/* <Testimonials /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);
{/* */}
export default App;
