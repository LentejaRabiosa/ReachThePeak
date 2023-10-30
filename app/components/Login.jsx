'use client'

import styles from './Login.module.css'
import NextLink from "next/link";
import { Link } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";

export function Login() {
    return (
        <form className={styles.login}>
            <Card>
                <CardHeader>
                    <p className='uppercase text-tiny font-bold'>Iniciar sesion con una cuenta existente</p>
                </CardHeader>
                <CardBody>
                    <Input size='sm' isClearable variant='bordered' color='success' type="email" label="Email" />
                    <Spacer y={2} />
                    <Input size='sm' isClearable variant='bordered' color='success' type="password" label="Password" />
                </CardBody>
                <CardFooter>
                    <div className={styles.footer}>
                        <Button size='sm' color='success' variant='bordered'>Iniciar sesion</Button>
                    </div>
                </CardFooter>
            </Card>
            <Spacer />
            <Link as={NextLink} className='uppercase text-tiny' href='/signup'>¿Aún no tienes cuenta?</Link>
        </form>
    )
}
