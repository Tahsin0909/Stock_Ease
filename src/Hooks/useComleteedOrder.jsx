import { useQuery } from "@tanstack/react-query";

const useCompletedOrder = () => {
    // console.log(" Iam calling");
    const { isPending: pending, data: CompletedOrderData} = useQuery({
        queryKey: ['CompletedOrder'],
        queryFn: async () => {

            const response = await fetch('/public/completedOrder.json')
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // console.log(response);
            return response.json();
        }
    });

    return [CompletedOrderData, pending];
};

export default useCompletedOrder;
