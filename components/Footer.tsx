import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full bg-[#005f6a] flex gap-8 lg:gap-0  lg:flex-row p-8 lg:p-16">
      <div className="w-full flex justify-center items-center lg:p-8">
        <Image
          src={"/Icons/Logo Izembra@2x.png"}
          alt="Logo Footer"
          width={100}
          height={100}
          className="w-30"
        />
      </div>
      <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row">
        <div className="flex flex-col lg:p-8 gap-3 text-xs">
          <h2 className="font-semibold text-white">Lorem ipsum dolor sit amet</h2>
          <p className="text-white font-light lg:text-sm">
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </div>
         <div className="flex flex-col lg:p-8 gap-3 text-xs">
          <h2 className="font-semibold text-white">Lorem ipsum dolor sit amet</h2>
          <p className="text-white font-light lg:text-sm">
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </footer>
  );
}
