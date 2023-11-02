'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import {Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {User} from "@nextui-org/react";
import { AiOutlineArrowDown, AiOutlinePlus } from 'react-icons/ai'

export function Tools() {
    const [selectedOption, setSelectedOption] = React.useState(new Set(["voley"]));

    const labelsMap = {
        voley: "Voley",
        football: "FootBall",
        lifting: "Lifting",
    }

    const selectedOptionValue = Array.from(selectedOption)[0];

    return (
        <header>
            <Navbar>
                <NavbarContent justify='start'>
                    <NavbarItem>
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Button size="sm">
                                {labelsMap[selectedOptionValue]}<AiOutlineArrowDown />
                                    </Button>
                                </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Plantillas"
                                selectedKeys={selectedOption}
                                selectionMode="single"
                                onSelectionChange={setSelectedOption}
                                className="max-w-[300px]"
                            >
                                <DropdownItem key="voley">
                                    {labelsMap["voley"]}
                                </DropdownItem>
                                <DropdownItem key="football">
                                    {labelsMap["football"]}
                                </DropdownItem>
                                <DropdownItem key="lifting">
                                    {labelsMap["lifting"]}
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                    <NavbarItem>
                        <Button size='sm' variant="solid" color="success">
                            Crear plantilla
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button size='sm' variant="bordered">
                            Proyecto vacío<AiOutlinePlus />
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify='end'>
                    <NavbarItem>
                        <User   
                            name="Usuario Random"
                            description="Jugador de FootBall"
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                            }}
                        />
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </header>
    )
}