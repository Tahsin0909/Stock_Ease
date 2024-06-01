import { useQuery } from "@tanstack/react-query";

const useCompletedOrder = () => {


    const { isPending: pending, data: CompletedOrderData } = useQuery({
        queryKey: ['CompletedOrder'],
        queryFn: async () => {

            const response = await fetch('/completedOrder.json')
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        }
    });

    return [CompletedOrderData, pending];
};

export default useCompletedOrder;
