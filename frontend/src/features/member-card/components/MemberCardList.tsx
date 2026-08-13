'use client'

import Image from "next/image"
import { mainAccent, blurbColor } from "@/types/colorPallete"

interface memberInfo {
    id: number
    imgName: string
    name: string
    role: string
    blurb: string
}

const teamData : memberInfo[] = [
    {id: 0, 
        imgName: "AzamE.jpeg", 
        name: "Azam Eshan", 
        role: "Project Manager (PM)", 
        blurb: "This is a sample blurb for the purpose of displaying the edge case where 150 characters in the maximum for a team member's blurb. It will be cut off."
    },
    {id: 1, 
        imgName: "SahilP.jpeg", 
        name: "Sahil Chetankumar Patel", 
        role: "Business Analyst (BA)", 
        blurb: "This is a sample blurb for the purpose of displaying the edge case where 150 characters in the maximum for a team member's blurb. It will be cut off."
    },
    {id: 2, 
        imgName: "JessicaG.jpg", 
        name: "Jessica Giacometti", 
        role: "UX Designer", 
        blurb: "This is a sample blurb for the purpose of displaying the edge case where 150 characters in the maximum for a team member's blurb. It will be cut off."
    },
    {id: 3, 
        imgName: "MarieF.jpg", 
        name: "Rowena Marie Cyrelle Bulaklak Ferareza", 
        role: "Developer", 
        blurb: "This is a sample blurb for the purpose of displaying the edge case where 150 characters in the maximum for a team member's blurb. It will be cut off."
    },
    {id: 4, 
        imgName: "LoveK.png", 
        name: "Love Kumar", 
        role: "Developer", 
        blurb: "This is a sample blurb for the purpose of displaying the edge case where 150 characters in the maximum for a team member's blurb. It will be cut off."
    },
]

export function MemberCardList(){
    return (
        <div className="justify-center flex-initial pl-25 pr-25">
            <ul className="max-w p-2 flex flex-initial justify-center gap-20 items-start flex-wrap">
                {teamData.map((member) => (
                    <li key={member.id}>
                        <div className="m-2 w-85 h-135 rounded-xl border-none overflow-hidden shadow-xl">
                            <div className="border border-none h-80 overflow-hidden">
                                <Image
                                src={`/../../../../images/${member.imgName}`}
                                alt={member.imgName}
                                width={500}
                                height={500}
                                style={{ width: '100%', height: 'auto' }}
                                loading="eager"
                                />
                            </div>
                            <h2 className="w-85 p-2 font-bold text-xl text-wrap overflow-wrap">{member.name}</h2>
                            <h3 className="w-max p-2 font-semibold text-lg" style={{WebkitTextFillColor: mainAccent}}>{member.role}</h3>
                            <p className="p-2 overflow-wrap text-wrap text-left font-medium" style={{WebkitTextFillColor: blurbColor}}>{member.blurb}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}