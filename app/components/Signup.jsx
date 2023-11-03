'use client'

import React from "react";
import styles from './Signup.module.css'
import NextLink from "next/link";
import { Link } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import { NextApiRequest, NextApiResponse } from 'next'

export function Signup() {
    const [name, setName] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');

    const [isValidName, setIsValidName] = React.useState(true);
    const [isValidMail, setIsValidMail] = React.useState(true);
    const [isValidPassword, setIsValidPassword] = React.useState(true);
    const [isValidRepeatPassword, setIsValidRepeatPassword] = React.useState(true);

    function handleRegister() {
        console.log('caca');
    }

    function handle(setter, validSetter, value, check) {
        setter(value);
        if (!value.length) {
            validSetter(false);
            return;
        }
        for (let i = 0; i < value.length; i++) {
            if (check.indexOf(value[i]) == -1) {
                validSetter(false);
                return;
            }
        }
        validSetter(true);
    }

    function handleName(value) {
        handle(setName, setIsValidName, value, 'abcdefghijkmnlñopqrstuvwxyzABCDEFGHIJKMNLÑOPQRSTUVWXYZ ');
    }

    function handleMail() {

    }

    return (
        <form className={styles.signup}>
            <Card>
                <CardHeader>
                    <p className='uppercase text-tiny font-bold'>Crear una cuenta nueva</p>
                </CardHeader>
                <CardBody>
                    <Input onValueChange={handleName} errorMessage={isValidName ? '' : 'Nombre requerido'} size='sm' isClearable variant='bordered' color='success' type="text" label="Nombre" />
                    <Spacer y={2} />
                    <Input onValueChange={setMail} size='sm' isClearable variant='bordered' color='success' type="email" label="Dirección email" />
                    <Spacer y={2} />
                    <Input onValueChange={setPassword} size='sm' isClearable variant='bordered' color='success' type="password" label="Contraseña" />
                    <Spacer y={2} />
                    <Input onValueChange={setRepeatPassword} size='sm' isClearable variant='bordered' color='success' type="password" label="Confirmar contraseña" />
                    <Spacer y={8} />
                    <Checkbox size='sm' color='success'>Aceptar <Link underline='hover' size='sm' as={NextLink} href='/privacidad'>politicas de privacidad</Link></Checkbox>
                </CardBody>
                <CardFooter>
                    <div className={styles.footer}>
                        <Button onPress={() => handleRegister()} size='sm' color='success' variant='bordered'>Crear cuenta</Button>
                    </div>
                </CardFooter>
            </Card>
            <Spacer />
            <Link as={NextLink} className='uppercase text-tiny' href='/login'>¿Ya tienes una cuenta?</Link>
        </form>
    )
}