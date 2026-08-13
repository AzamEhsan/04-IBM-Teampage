import { requireAuth } from "@/actions/auth.actions"
import { MemberCardList } from "@/features/member-card/components/MemberCardList"
import { mainAccent } from "@/types/colorPallete"
import { ibmPlexMono } from "@/types/typography"

export default async function TeamPage() {
    await requireAuth()
    return (
        <>
            <div className='w-max-sm flex font-extrabold  justify-center'>
            <h1 className={`${ibmPlexMono.className} w-50 text-center text-2xl font-extrabold tracking-tight border-b-4 pb-1 mb-3 dark:border-zinc-800 tracking-wide`}
                style={{borderColor: mainAccent}}>04-IBM Team</h1>
            </div>
            <MemberCardList/>
        </>
    )
}