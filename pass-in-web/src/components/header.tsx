// JSX = JavaScript XML

import React from "react";
import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import { NavLink } from "./nav-link";
// TSX = TypeScript XML
export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={nlwUniteIcon} />

            <nav className="flex items-center gap-5">
                <NavLink href="/eventos">Eventos</NavLink>
                <NavLink href="/participantes">Participantes</NavLink>

            </nav>
        </div>
    )
}