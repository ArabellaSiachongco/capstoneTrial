import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../context/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (

  <TooltipComponent 
    content={title}
    position="BottomCenter">
      <button 
      type="button" 
      onClick={customFunc} 
      style={{ color }} 
      className="relative text-xl rounded-full p-3 hover:bg-light-gray">
        <span 
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        /> 
        {icon} 
      </button>
  </TooltipComponent>

);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();
// resizing the screen to the specific size 
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize)
// call
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect (() => {
    if (screenSize <= 900){
      setActiveMenu(false);
    } else {
      setActiveMenu (true);
    }

  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton 
        title="Menu" 
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" 
        icon={<AiOutlineMenu/>} />

      <div className="flex">
      <NavButton 
        title="Cart" 
        customFunc={() => handleClick('cart')} color="blue" 
        icon={<FiShoppingCart/>} />

      <NavButton 
        title="Chat" 
        dotColor="#03c9d7"
        customFunc={() => handleClick('chat')} color="blue" 
        icon={<BsChatLeft/>} />

      <NavButton 
        title="Notification" 
        dotColor="#03c9d7"
        customFunc={() => handleClick('notification')} 
        color="blue" 
        icon={<RiNotification3Line/>} />

      <TooltipComponent
        content="Profile"
        position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
            <img className="rounded-full w-8 h-8" src={avatar} />
            <p>
              <span className="text-gray-400">I am </span> {" "}
              <span className="text-gray-400 font-bold ml-1 text-14">Arabella
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-14"/>
          </div>
        </TooltipComponent>
 {/* to turn on and off the component we render:        */}
        {isClicked.cart && <Cart/>} 
        {isClicked.chat && <Chat/>} 
        {isClicked.notification && <Notification/>} 
        {isClicked.userProfile && <UserProfile/>} 
      </div>
    </div>
  )
}

export default Navbar
