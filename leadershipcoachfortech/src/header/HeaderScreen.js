import React, { Component } from 'react';
import MenuButtonPane from "../components_library/panes/MenuButtonPane";
import MenuScreen from "../menu/MenuScreen";

// Needed to use history and move to other url
import {withRouter} from "react-router-dom";
import StandardIcon from "../components_library/icons/StandardIcon";

/**
 * This is the header always present at the top of the page.
 * It has the menu button only. This screen opens and closes the menu.
 */
class HeaderScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        };

    }

    /**
     * When the menu button, the button made of three lines, is clicked,
     * this function is called and we have to show the menu
     *
     * @param {object} event Click event for menu button
     */
    handleMenuButtonClick = event => {

        this.setState({ menuOpen: true });

    };

    /**
     * Called when an item of the menu is clicked.
     * Called as well when the close button is clicked.
     */
    handleMenuClose = () => {

        this.setState({ menuOpen: false });

    };

    /**
     * Called when the home button in the menu is clicked.
     */
    handleGoToHome = () => {

        this.setState({ menuOpen: false });

        this.props.history.push("/");

    };

    render() {

        return (

            <React.Fragment>

                <MenuButtonPane visible={!this.state.menuOpen}>

                    <StandardIcon onclick={this.handleMenuButtonClick.bind(this)}>
                        menu
                    </StandardIcon>

                </MenuButtonPane>

                <MenuScreen open={this.state.menuOpen}
                            onClose={this.handleMenuClose.bind(this)}
                            onHome={this.handleGoToHome.bind(this)}/>

            </React.Fragment>

        )
    }

}

export default withRouter(HeaderScreen);
