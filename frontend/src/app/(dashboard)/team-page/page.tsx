import { requireAuth } from "@/actions/auth.actions"
import { MemberCardList } from "@/features/member-card/components/MemberCardList"

export default async function TeamPage() {
    await requireAuth()
    return (
        <MemberCardList/>
    )
}