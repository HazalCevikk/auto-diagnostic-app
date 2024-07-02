import Image from "next/image"

export default function CabinentArrangement() {
 const context = [
    {
        img: "/3-shelves.png",
        text: "1 Door - 3 shelves"
    },
    {
        img: "/4-shelves.png",
        text: "1 Door - 4 shelves"
    },
    {
        img: "/4-shelves-2-door.png",
        text: "2 Door - 4 shelves"
    },
    {
        img: "/6-shelves.png",
        text: "2 Door - 6 shelves"
    },
    {
        img: "/7-shelves.png",
        text: "2 Door - 7 shelves"
    },
    {
        img: "/7-shelves-2-door.png",
        text: "2 Door - 7 shelves"
    },
    {
        img: "/8-shelves.png",
        text: "2 Door - 8 shelves"
    },
 ]

    return (
        <div className="mx-56 my-6 flex flex-col space-y-6 justify-center items-center">
         <p className="font-bold text-[#30303c] text-2xl">Cabinent Arrangement</p>
         <div className="flex flex-wrap gap-[20px] items-center">
            {context.map((item)=> 
            <div key={item.index}>
               <Image src={item.img} alt="cabinet" width={275} height={275}/>
                <p className="font-bold text-lg text-center text-[#30303c]">{item.text}</p>
            </div>
            )}
         </div>
        </div>
    )
}