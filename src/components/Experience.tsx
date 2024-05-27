import React from 'react';

import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';

export default function Experience() {

    return (
        <Card className="w-full h-full p-4 font-sourceCodePro" radius="none" shadow="md">
            <CardHeader>
                <h1 className="font-bold"> Skills </h1>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p> I got mad experience, yo. </p>
            </CardBody>
        </Card>


    );

}