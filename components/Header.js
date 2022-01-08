import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";


function Header() {
  return (
    <header className=''>
      <div>
        <HeaderItem title="HOME" Icon={HomeIcon} />
      </div>
      {/* lazy loading */}
      <Image src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="logo"
      />

    </header>
  )
}

export default Header
