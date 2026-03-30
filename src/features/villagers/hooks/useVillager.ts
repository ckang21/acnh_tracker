import { useQuery } from "@tanstack/react-query";
import { fetchVillagers } from "../../../api/nookipedia";


export function useVillagers() {
    return useQuery({
        queryKey: ['villagers'],
        queryFn: fetchVillagers,
    })
}