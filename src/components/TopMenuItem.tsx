'use client'
import Link from 'next/link'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

export default function TopMenuItem ({title, pageRef, hasDropdown, children}: {title:string, pageRef:string, hasDropdown: boolean, children:React.ReactNode}){
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='gap-[12px]'>
            <Link className='w-auto text-center' href={pageRef}>
                {title}
            </Link>
            {hasDropdown && <Button
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className='w-auto h-auto text-black p-0 ml-[12px] gap-0'
                    sx={{
                        minWidth: '0px',
                        padding: '0px',
                        margin: '0px',
                    }}
                >
                <ExpandMoreIcon fontSize='small'/>    
                </Button>
            }
            {hasDropdown && <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                        return <div onClick={handleClose} className=''>
                            {React.cloneElement(child)}
                        </div>}
                        return null;
                    })}
                </Menu>
            }
        </div>
    );
}