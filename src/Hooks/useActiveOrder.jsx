import { useQuery } from "@tanstack/react-query";

const useActiveOrder = () => {
    // console.log(" Iam calling");
    const { isPending, data: activeOrderData, refetch } = useQuery({
        queryKey: ['activeOrder'],
        queryFn: async () => {

            const response = await fetch('../../public/activeOrder.json')
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // console.log(response);
            return response.json();
        }
    });

    return [activeOrderData, isPending, refetch];
};

export default useActiveOrder;