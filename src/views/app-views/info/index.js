import React from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import Flex from 'components/shared-components/Flex';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';

export const informations = () => {

    const usedTechnologies = 
    [
        {
            'name': 'PHP',
            'url' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1200px-Webysther_20160423_-_Elephpant.svg.png',
            'description' : 'Backend' 
        },
        {
            'name': 'Laravel',
            'url' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
            'description' : 'Framework PHP' 
        },
        {
            'name': 'NodeJS',
            'url' : 'https://logospng.org/download/node-js/logo-node-js-1024.png',
            'description' : 'Frontend' 
        },
        {
            'name': 'React',
            'url' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            'description' : 'Library Javascript' 
        },

        {
            'name': 'Bootstrap',
            'url' : 'https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png',
            'description' : 'Frontend' 
        },
        {
            'name': 'Javascript',
            'url' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
            'description' : 'Frontend / Backend' 
        },
        {
            'name': 'Docker',
            'url' : 'https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png',
            'description' : 'Frontend' 
        },

        
    ];


    return (
        <>
        <PageHeaderAlt className="border-bottom">
            <div className="container-fluid">
                <Flex justifyContent="between" alignItems="center" className="py-4">
                    <h2>Olá, Bem vindo!</h2>
                </Flex>
                <h3>Detalhes Técnicos</h3>
                <p>As tecnologias usadas estão listadas abaixo:</p>
            </div>
        </PageHeaderAlt>
        <div className="container">
            <Row>
                
                { usedTechnologies.map((tec) => (
                    <Col xs={8} sm={8} md={8}>
                    <Card
                        hoverable
                        style={{ width: 240 , marginTop: 30}}
                        cover={
                        <img
                            alt={tec.name}
                            src={tec.url}
                    />
                    }>
                        <Meta title={tec.name} description={tec.description} />
                    </Card>
                    </Col>
                 ))}
            
        </Row>
    </div>
        </>
    )
}

export default informations