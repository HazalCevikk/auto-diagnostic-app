import Image from "next/image"

export default function CabinetsWithShelfButtons({ selectedCabinet }) {
    const cabinets =
    {
        id: 6,
        image: selectedCabinet.image,
        shelves: [
            { id: 1, doors: [70, 80] },
            { id: 2, doors: [50, 60] },
            { id: 3, doors: [30, 40] },
            { id: 4, doors: [10, 20] },
        ]
    }


    return (
        <div className="flex flex-col items-center mr-36">
            <div className="relative">
                <Image src={selectedCabinet.image} alt="Cabinet" width={350} height={650} />
                <div className='flex flex-col absolute top-8 left-4 w-full space-y-[68px]'>
                    {cabinets.shelves.map((shelf) => (
                        <div
                            key={shelf.id}
                            className="w-full pl-5 flex justify-evenly gap-8"
                        >
                            {shelf.doors.map((buttonValue, buttonIndex) => (
                                <button
                                    key={buttonIndex}
                                    className="bg-white border border-gray-300 text-gray-700 text-xs rounded-2xl px-4 py-2"
                                    style={{
                                        left: `${(buttonIndex + 1) * 50}%`,
                                        transform: 'translateX(-50%)'
                                    }}
                                >
                                    {buttonValue}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}