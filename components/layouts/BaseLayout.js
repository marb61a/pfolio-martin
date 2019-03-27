import React from 'react';
import Header from '../shared/Header';
import Head from 'next';

const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props;
    const headerType = props.headerType || 'default';
    const title = props.title || 'Martin Byrne Portfolio';

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content="My name is Martin"/>

                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
                <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
            </Head>
            <div className='layout-container'>
                <Header 
                    className={}
                    user={user}
                    isSiteOwner={isSiteOwner}
                />
            </div>
            <main>
                <div className="wrapper">
                    {children}
                </div>
            </main>
        </React.Fragment>
    );
}

export default BaseLayout;