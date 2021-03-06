/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 *  on 19/03/2021

 * @university: FBU ( đại học tài chính ngân hàng hà nội)
 */

import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

// Component
import MetaView from '../components/MetaView';

// const component
const HeaderController = dynamic(() => import('../components/Header/HeaderController'), { loading: () => <p>...</p> });
const ContentController = dynamic(() => import('../components/Content/ContentController'), {
    loading: () => <p>...</p>,
});
const Footer = dynamic(() => import('../components/Footer/Footer'), { loading: () => <p>...</p> });

// icon
function Index(props) {
    const { dataMeta } = props;
    return (
        <React.Fragment>
            <MetaView {...dataMeta} />
            <HeaderController />
            <ContentController />
            <Footer />
        </React.Fragment>
    );
}

Index.propTypes = {
    dataMeta: PropTypes.object,
};

Index.defaultProps = {
    // Note 3: cần có 1 trường dữ liệu có config từ server
    dataMeta: {
        image: 'https://static.unica.vn/media/images/unica-hoctuchuyengia.jpg',
        title: ' FBU Learning - Học online cùng chuyên gia',
        name: 'Mongker',
        description:
            ' FBU Learning - Hệ thống khóa học trực tuyến dành cho người đi làm với hơn 500.000 học viên đang theo học và 2.000 khóa học từ chuyên gia hàng đầu mọi lĩnh vực',
        icon: 'https://static.unica.vn/icon/favicon.ico',
        url: 'https://unica.vercel.app/',
    },
};
export default Index;
