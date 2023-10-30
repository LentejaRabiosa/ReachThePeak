'use client'

import NextLink from "next/link";
import { Link } from '@nextui-org/react'

export function StandardLink({ href, children }) {
    return (
        <Link className='text-tiny font-bold uppercase' as={NextLink} color='foreground' size='sm' underline='hover' href={href}>{children}</Link>
    )
}
