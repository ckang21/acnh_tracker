import { Villager } from "../../../api/nookipedia"

type Props = {
    villager: Villager
}

function VillagerCard({ villager }: Props) {
    return (
        <div>
            <h1>{villager.name}</h1>
            <img src={villager.image_url} alt={villager.name} />
            <p>{villager.species}</p>
            <p>{villager.personality}</p>
        </div>
    )
}

export default VillagerCard