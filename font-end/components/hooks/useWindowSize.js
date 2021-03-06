/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mai on 14/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: FBU ( đại học tài chính ngân hàng hà nội)
 */

import React from 'react';
// import PropTypes from 'prop-types';
function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState({
        heightApp: null,
        widthApp: null,
    });

    React.useEffect(() => {
        setWindowSize({
            heightApp: window.innerHeight,
            widthApp: window.innerWidth,
        });
    }, []);

    return { height: windowSize.heightApp, width: windowSize.widthApp };
}

useWindowSize.propTypes = {};

useWindowSize.defaultProps = {};

export default useWindowSize;
