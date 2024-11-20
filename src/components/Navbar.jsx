import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarList,
} from "keep-react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { MdPerson2 } from "react-icons/md";

const NavbarComponent = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Navbar>
      <NavbarContainer className="mx-auto p-2 md:p-0 ">
        <NavbarBrand>
          {/* <img src={KeepLogo} alt="keep" /> */}
          <Link to="/" className="text-2xl text-[#ED4C67] font-semibold">
            Career <span className="text-[#009432]">Climb</span>
          </Link>
        </NavbarBrand>
        <NavbarList className="space-x-5 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/myprofile">My Profile</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavbarList>
        <NavbarList>
          {user && (
            <Dropdown placement=" bottom-end">
              <DropdownAction asChild>
                <Avatar>
                  <AvatarImage
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                  />
                  <AvatarFallback>
                    <MdPerson2 className="text-3xl" />
                  </AvatarFallback>
                </Avatar>
              </DropdownAction>
              <DropdownContent className="border border-metal-100 dark:border-metal-800 bg-primary-25">
                <DropdownItem> {user?.displayName}</DropdownItem>
                <DropdownItem> {user?.email}</DropdownItem>
              </DropdownContent>
            </Dropdown>
          )}
          <div>
            {user && user.email ? (
              <Button onClick={handleSignOut} className="text-[#ffffff]">
                Log Out
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                className="text-[#ffffff]"
              >
                Log In
              </Button>
            )}
          </div>
        </NavbarList>
        <NavbarCollapseBtn />

        <NavbarCollapse className="bg-primary-25 ">
          <div>
            {user && (
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                  />
                  <AvatarFallback>
                    <MdPerson2 className="text-3xl" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p>{user?.displayName}</p>
                  <p>{user?.email}</p>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/myprofile">My Profile</NavLink>
          <NavLink to="/about">About</NavLink>
          <div>
            {user && user.email ? (
              <Button onClick={handleSignOut} className="text-[#ffffff]">
                Log Out
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                className="text-[#ffffff]"
              >
                Log In
              </Button>
            )}
          </div>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
