import React from 'react';
import SEO from '../common/seo';
import HomeEight from '../components/homes/home-8';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Web Innovators Pro - Creative Agency"} />
            <HomeEight />
        </Wrapper>
    );
};

export default index;