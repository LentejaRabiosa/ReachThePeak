'use client'

import styles from './Signup.module.css'
import NextLink from "next/link";
import { Link } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";

export function Signup() {
    return (
        <form className={styles.signup}>
            <Card>
                <CardHeader>
                    <p className='uppercase text-tiny font-bold'>Crear una cuenta nueva</p>
                </CardHeader>
                <CardBody>
                <Input size='sm' isClearable variant='bordered' color='success' type="text" label="Nombre" />
                    <Spacer y={2} />
                    <Input size='sm' isClearable variant='bordered' color='success' type="email" label="Dirección email" />
                    <Spacer y={2} />
                    <Input size='sm' isClearable variant='bordered' color='success' type="password" label="Contraseña" />
                    <Spacer y={2} />
                    <Input size='sm' isClearable variant='bordered' color='success' type="password" label="Confirmar contraseña" />
                    <Spacer y={8} />
                    <Checkbox size='sm' color='success'>Aceptar <Link underline='hover' size='sm' as={NextLink} href='/privacidad'>politicas de privacidad</Link></Checkbox>
                </CardBody>
                <CardFooter>
                    <div className={styles.footer}>
                        <Button size='sm' color='success' variant='bordered'>Crear cuenta</Button>
                    </div>
                </CardFooter>
            </Card>
            <Spacer />
            <Link as={NextLink} className='uppercase text-tiny' href='/signup'>¿Ya tienes una cuenta?</Link>
        </form>
    )
}