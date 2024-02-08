import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { FaBars } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
interface drawernavlinktype {
  linkname: string;
  linkhref: string;
}

interface IProps {
  navlink: drawernavlinktype[];
  a?: string;
}

const Drawers = ({ navlink }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <div className="">
        <FaBars className="w-[25px] h-[25px] " onClick={showDrawer} />
      </div>
      <Drawer
        title="Mobile Navbar"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col justify-center gap-5 text-gray-500">
          {navlink.map((val: drawernavlinktype, index: number) => {
            return (
              <Link
                to={val.linkhref}
                className=""
                smooth={true}
                duration={500}
                onClick={() => onClose()}
                key={index}
              >
                {val.linkname}
              </Link>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default Drawers;
