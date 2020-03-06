import React, { Component } from 'react';

/**
 * FIXME doc
 */
class BlinkingPane extends Component {

    render() {

        // See src/index.css for class "blinking". It's not a class I can implement using css-in-js

        // TODO convert class blinking to css-in-js

        return (

            <div className="blinking">

                {this.props.children}

            </div>

        )

    }

}

export default BlinkingPane;

// TODO notes to convert class blinking to css-in-js
//
// @-webkit-keyframes KEYFRAME-NAME {
//     0%   { opacity: 0; }
//     100% { opacity: 1; }
// }
// @-moz-keyframes KEYFRAME-NAME {
//     0%   { opacity: 0; }
//     100% { opacity: 1; }
// }
// @-o-keyframes KEYFRAME-NAME {
//     0%   { opacity: 0; }
//     100% { opacity: 1; }
// }
// @keyframes KEYFRAME-NAME {
//     0%   { opacity: 0; }
//     100% { opacity: 1; }
// }
//
// '@keyframes slideRight': {
//     from: {opacity: 0},
//     to: {opacity: 1}
// },
//
// const animationAttributes = {
//     0% { opacity:0.6; }
// 50% { opacity: 1; }
// 100% { opacity:0.6; } }


//
// const styles = {
//     '@keyframes slideRight': {
//         from: {opacity: 0},
//         to: {opacity: 1}
//     },
//     container: {
//         animationName: '$slideRight'
//     }
// }

// const styles = {
//     CentralContentPane: {
//         //height: "45vh",
//         //marginTop: "15vh",
//         marginLeft: "auto",
//         marginRight: "auto"
//     },
//     paneWidthLargeScreen: {
//         width: "50vw"
//     },
//     paneWidthMediumScreen: {
//         width: "60vw"
//     },
//     paneWidthSmallScreen: {
//         width: "90vw"
//     }
// };
