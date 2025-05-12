"use client";
import Link from "next/link";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

export default function TopMenuItem({
  title,
  pageRef,
  children,
}: {
  title: string;
  pageRef: string;
  children?: React.ReactNode;
}) {
  const hasChildren = React.Children.count(children) > 0;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="gap-[12px]">
      <Link className="w-auto text-center" href={pageRef}>
        {title}
      </Link>
      {hasChildren && (
        <button
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="w-auto h-auto text-black p-0 ml-[8px] gap-0"
        >
          <ExpandMoreIcon fontSize="small" />
        </button>
      )}
      {hasChildren && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return (
                <div
                  onClick={handleClose}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {React.cloneElement(child)}
                </div>
              );
            }
            return null;
          })}
        </Menu>
      )}
    </div>
  );
}
