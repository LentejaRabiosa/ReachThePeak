'use client'

import styles from './Navigation.module.css'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { Logo } from './Logo';
import { StandardLink  } from './Link'
import NextLink from 'next/link'


export function Navigation({ children }) {
    return (
        <header className={styles.header}>
            <Navbar>
                <NavbarBrand>
                    <Logo />
                </NavbarBrand>
                <NavbarContent justify='center'>
                    <NavbarItem>
                        <Link as={NextLink} href='/inicio'>Inicio</Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Link as={NextLink} href='/sabermas'>Saber más</Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify='end'>
                    <NavbarItem>
                        <Button as={NextLink} href='/login' variant='ghost' size='sm' color='success'>Iniciar sesion</Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={NextLink} href='/signup' variant='faded' size='sm' color='success'>Crear cuenta</Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </header>
    )
}