import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import GenresInDb from "./GenresInDb";
import Footer from "./Footer";

import { Switch, Route } from "react-router-dom";
import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDb from "./LastMovieInDb";

export default function ContentWrapper() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <Switch>
                        <Route
                            exact="true"
                            path="/"
                            component={ContentRowTop}
                        />
                        <Route path="/cards" component={ContentRowMovies} />
                        <Route path="/genres">
                            <GenresInDb />
                        </Route>
                        <Route path="/last-movie" component={LastMovieInDb} />
                    </Switch>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    );
}
