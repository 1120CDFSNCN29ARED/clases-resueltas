import React from "react";
import ContentRowTop from "./ContentRowTop/ContentRowTop";
import Topbar from "./Topbar/Topbar";
import Footer from "./Footer/Footer";

function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
        <Topbar />

        {/* <!-- Content Row Top --> */}
        <ContentRowTop />
        {/* <!--End Content Row Top--> */}
      </div>
      {/* <!-- End of MainContent --> */}

      {/* <!-- Footer --> */}
      <Footer />
      {/* <!-- End of Footer --> */}
    </div>
  );
}

export default ContentWrapper;
