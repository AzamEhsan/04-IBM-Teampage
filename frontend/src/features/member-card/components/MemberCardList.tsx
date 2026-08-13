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
        blurb: "A PM and IT student with strong communication skills. Interested in networking, and AI-driven automation."
    },
    {id: 1, 
        imgName: "SahilP.jpeg", 
        name: "Sahil Chetankumar Patel", 
        role: "Business Analyst (BA)", 
        blurb: "Final year CS student and Business Analyst with a minor in AI and cloud computing, interested in making complex requirements simple to build."
    },
    {id: 2, 
        imgName: "JessicaG.jpg", 
        name: "Jessica Giacometti", 
        role: "UX Designer", 
        blurb: "UX Designer focused on creating intuitive user interactions with experience in cybersecurity, passionate about investigation and security analysis."
    },
    {id: 3, 
        imgName: "MarieF.jpg", 
        name: "Rowena Marie Cyrelle Bulaklak Ferareza", 
        role: "Developer", 
        blurb: "A diligent all-rounded Software Developer with strong communication skills. Experienced in App and Web Development with some experience in Cloud."
    },
    {id: 4, 
        imgName: "LoveK.png", 
        name: "Love Kumar", 
        role: "Developer", 
        blurb: "IT student and aspiring Software Developer passionate about Web Development, Cloud Technologies, testing, and building reliable digital solutions."
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
                                src={`/images/${member.imgName}`}
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