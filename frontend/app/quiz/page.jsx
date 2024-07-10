'use client'; 

import Quiz from "@/components/quiz/Quiz";
import Sidebar from "@/components/sidebar/Sidebar";

const Index = () => {
  return (
    <>
      {/* End page title for seo */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <Quiz />
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default Index;