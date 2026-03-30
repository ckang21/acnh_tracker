import { useVillagers } from "../features/villagers/hooks/useVillager"
import VillagerCard from "../features/villagers/components/VillagerCard"

function VillagersPage() {
    const { data, isLoading, isError} = useVillagers()
    if (data) {
        return (
            <div>
                {data.map((item) => (
                <VillagerCard key={item.name} villager={item} />
                ))}
            </div>
        )
        
    } else if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else if (isError) {
        return (
            <div>
                <p>Something went wrong.</p>
            </div>
        )
    }
    return null
}

export default VillagersPage