'use client'

import React from "react";
import styles from './DashboardTools.module.css'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export function DashboardTools() {
    const [selectedOption, setSelectedOption] = React.useState(new Set(["voley"]));

    const labelMap = {
        voley: "Voley",
        football: "FootBall",
        lifting: "Lifting",
    }

    const selectedOptionValue = Array.from(selectedOption)[0];

    return (
        <Card>
            <CardBody className="">
                <Dropdown>
                    <DropdownTrigger>
                        <Button size="sm" variant="bordered" color="success">{labelMap[selectedOptionValue]}</Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Plantillas"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedOption}
                        onSelectionChange={selectedOption}
                    >
                        <DropdownItem key="voley">Voley</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Button size="sm" variant="solid" color="success">Crear</Button>
            </CardBody>
        </Card>
    )
}