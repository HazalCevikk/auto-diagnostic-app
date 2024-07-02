import Image from "next/image";

export default function Header({ user }) {
  return (
    <div className="w-full h-auto flex flex-row bg-white px-4 justify-between items-center shadow-sm">
      <div className="flex space-x-2 items-center">
        <Image src="/reckonai-logo.png" alt="logo" width={45} height={45} />
        <p className="font-bold text-3xl">Cabinet assembly & diagnostic tool</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-1 items-center">
          <Image src="/profile.png" alt="profile" width={36} height={36} />
          <div className="flex flex-col space-y-0">
            <p className="text-sm font-light text-gray-400">Logged in as</p>
            <p className="text-sm font-semibold">{user}</p>
          </div>
        </div>
        <div className="border-l border-gray-200 h-16 mx-4"></div>
        <div className="flex space-x-1 items-center">
          <Image src="/logout.png" alt="logout" width={32} height={32} />
          <p className="font-semibold text-sm">LOGOUT</p>
        </div>
      </div>
    </div>
  );
}