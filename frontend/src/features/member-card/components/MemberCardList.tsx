'use client'

import Image from "next/image"

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
        <ul className="flex-initial justify-center max-w grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-1  border">
            {teamData.map((member) => (
                <li key={member.id} className="m-2 flex-initial justify-center items-center w-80 h-130 rounded-xl border-0 overflow-hidden shadow-xl">
                    <div className="border h-80 overflow-hidden">
                        <Image
                        src={`/../../../../images/${member.imgName}`}
                        alt={member.imgName}
                        width={500}
                        height={500}
                        style={{ width: '100%', height: 'auto' }}
                        loading="eager"
                        />
                    </div>
                    <h1 className="w-max p-2">{member.name}</h1>
                    <h2 className="w-max p-2">{member.role}</h2>
                    <p className="p-2 overflow-wrap text-wrap">{member.blurb}</p>
                </li>
            ))}
        </ul>
    )
}